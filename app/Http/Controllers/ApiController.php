<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Transaction;
use App\Delivery;
use App\Item;
use App\System;
use App\Faq;
use App\Information;
use App\Slider;
use App\Category;
use App\Province;
use App\City;
use App\Ticket;
use App\TicketGroup;
use App\TicketMessage;
use SoapClient;
use SoapFault;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{     
    function socket()
    {
        echo 'connect';

        $host    = "https://farazist.ir";
        $port    = 8090;
        $message = "Hello Server";
        echo "Message To server :".$message;
        // create socket
        $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
        // connect to server
        $result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");  
        // send string to server
        socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");
        // get server response
        $result = socket_read ($socket, 1024) or die("Could not read server response\n");
        echo "Reply From Server  :".$result;
        // close socket
        socket_close($socket);
    }

    function sendQrcode(Request $request)
    {

    }

    function signInUser(Request $request)
    {
        $valid_request = $request->validate([
            'mobile_number' => 'required',
            'password' => 'required',
        ]);

        if(Auth::attempt(['mobile_number' => $valid_request['mobile_number'], 'password' => $valid_request['password']]))
        {
            $user = User::with('systems.city', 'systems.work_times', 'system.city', 'system.work_times')->where('id', Auth::user()->id)->get()->first();
            $user->access_token = $user->createToken('authToken')->accessToken;
            return response()->json($user, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
        }
    }

    function getTargetUser(Request $request)
    {
        $user = User::select('id', 'name')->where('mobile_number', $request['mobile_number'])->get()->first();
        return response()->json($user, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getUser(Request $request)
    {
        $user = User::with('systems.city', 'systems.work_times', 'system.city', 'system.work_times')->where('id', auth()->guard('api')->user()->id)->first();
        return response()->json($user, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }
     
    function checkUser(Request $request)
    {
        if ($request->has('mobile_number') && $request->has('password'))
        {
            if(Auth::attempt(['mobile_number' => $request['mobile_number'], 'password' => $request['password']]))
            {
                $result = 1;
            }
            else
            {
                $result = 0;
            }
        }
        elseif($request->has('mobile_number'))
        {
            if(User::where('mobile_number', $request['mobile_number'])->exists())
            {
                $result = 1;
            }
            else
            {
                $result = 0;
            }
        }
        else
        {
            $result = 0;
        }
        return response()->json($result);
    }
     
    function signUpUser(Request $request)
    {
        $valid_request = $request->validate([
            'name' => 'required|max:255',
            'mobile_number' => 'required|max:11|unique:users',
            'password' => 'required',
        ]);

        $user = new User();
        $user->name = $valid_request['name'];
        $user->mobile_number = $valid_request['mobile_number'];
        $user->password = bcrypt($valid_request['password']);

        if ($request->has('address')) 
        {
            $user->address = $request['address'];            
        }

        $user->save();

        return $this->signInUser($request);
    }

    function editUser(Request $request)
    {
        $user = auth()->guard('api')->user();

        if ($request->has('name')) 
        {
            $user->name = $request['name'];            
        }

        if ($request->has('address')) 
        {
            $user->address = $request['address'];            
        }
        
        if ($request->has('email')) 
        {
            $user->email = $request['email'];            
        }

        if ($request->has('password')) 
        {
            $user->password = bcrypt($request['password']);            
        } 

        if ($request->has('system_id')) 
        {
            $user->system_id = $request['system_id'];            
        }

        $user->update();

        return response()->json($user, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function changeUserPassword(Request $request)
    {
        $delivery->user_id = $request['user_id'];
        
        $user = auth()->guard('api')->user();

        $new_password = rand(1000, 9999);

        $user->password = bcrypt($new_password);
        $user->update();

        return $this->sendSMS($user->mobile_number, "m3l043bhai", array( "user_id" => $user->id, "new_password" => $new_password));
    }
    
    function getUserTransactions(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        $result = Transaction::with('target_user')->where('user_id', $user_id)->get();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getOwnerCitizensCount(Request $request)
    {
        $result = 0;
        foreach(auth()->guard('api')->user()->systems as $system)
        {
            $result += $system->citizens()->count();
        }
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getUserDeliveries(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        $result = Delivery::with('system.owner', 'system.city', 'items')->where('user_id', $user_id)->orderBy('created_at', 'DESC')->get();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getLastUserDelivery(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        $result = Delivery::with('system.owner', 'system.city', 'items')->where('user_id', $user_id)->orderBy('created_at', 'DESC')->first();
        
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
     
    function getSystemDeliveries(Request $request)
    {
        $result = Delivery::with('items', 'user')->where('system_id', $request['id'])->orderBy('created_at', 'DESC')->get();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getUserTickets(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        $result = Ticket::with('group')->where('user_id', $user_id)->orderBy('created_at', 'DESC')->get();
        
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getTicketMessages(Request $request)
    {
        $result = Ticket::find($request['ticket_id'])->messages;
        
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function getTicketGroups(Request $request)
    {
        $result = TicketGroup::all();
        
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function addTicket(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        
        $ticket = new Ticket();
        $ticket->user_id = $user_id;
        $ticket->group_id = $request['group_id'];
        $ticket->subject = $request['subject'];
        $ticket->save();

        return response()->json($ticket, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function addTicketMessage(Request $request)
    {
        $user_id = auth()->guard('api')->user()->id;
        
        $ticket_message = new TicketMessage();
        $ticket_message->text = $request['text'];
        $ticket_message->type = $request['type'];
        $ticket_message->ticket_id = $request['ticket_id'];
        $ticket_message->save();

        return response()->json($ticket_message, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    function transfer(Request $request)
    {
        $sender = auth()->guard('api')->user();
        $receiver = User::where('id', $request['target_user_id'])->get()->first();
        
        if(!$sender || !$receiver)
        {
            return "0";
        }
        elseif($sender->wallet - $request['amount'] < 0)
        {
            return "00";
        }
        else
        {
            $sender->wallet -= $request['amount'];
            $sender->update();
            
            $receiver->wallet += $request['amount'];
            $receiver->update();

            $transaction = new Transaction();
            $transaction->user_id = $sender->id;
            $transaction->target_user_id = $receiver->id;
            $transaction->amount = -$request['amount'];
            if ($request->has('description')) $transaction->description = $request['description'];
            $transaction->save();

            $transaction = new Transaction();
            $transaction->user_id = $receiver->id;
            $transaction->target_user_id = $sender->id;
            $transaction->amount = $request['amount'];
            if ($request->has('description')) $transaction->description = $request['description'];
            $transaction->save();

            $this->sendSMS($sender->mobile_number, "6iawhe3ig8", array( "sender_id" => $sender->id, "amount" => $request['amount'], "wallet" => $sender->wallet));
            $this->sendSMS($receiver->mobile_number, "6nr93842ew", array( "receiver_id" => $receiver->id, "amount" => $request['amount'], "wallet" => $receiver->wallet));

            return "1";
        }
    }

    function transferSecure(Request $request)
    {
        $sender = System::find($request['system_id'])->owner()->id;
        $receiver = auth()->guard('api')->user();
        
        if(!$sender || !$receiver)
        {
            return "0";
        }
        elseif($sender->wallet - $request['amount'] < 0)
        {
            return "00";
        }
        else
        {
            $sender->wallet -= $request['amount'];
            $sender->update();
            
            $receiver->wallet += $request['amount'];
            $receiver->update();

            $transaction = new Transaction();
            $transaction->user_id = $sender->id;
            $transaction->target_user_id = $receiver->id;
            $transaction->amount = -$request['amount'];
            if ($request->has('description')) $transaction->description = $request['description'];
            $transaction->save();

            $transaction = new Transaction();
            $transaction->user_id = $receiver->id;
            $transaction->target_user_id = $sender->id;
            $transaction->amount = $request['amount'];
            if ($request->has('description')) $transaction->description = $request['description'];
            $transaction->save();

            $this->sendSMS($sender->mobile_number, "6iawhe3ig8", array( "sender_id" => $sender->id, "amount" => $request['amount'], "wallet" => $sender->wallet));
            $this->sendSMS($receiver->mobile_number, "6nr93842ew", array( "receiver_id" => $receiver->id, "amount" => $request['amount'], "wallet" => $receiver->wallet));

            return "1";
        }
    }

    function getCities(Request $request)
    {
        $result = City::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getProvinceCities(Request $request)
    {
        $result = Province::find($request['province_id'])->cities;
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getProvinces(Request $request)
    {
        $result = Province::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getInformations(Request $request)
    {
        $result = Information::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getFaqs(Request $request)
    {
        $result = Faq::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getItems(Request $request)
    {
        $result = Item::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getCategories(Request $request)
    {
        $result = Category::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getSliders(Request $request)
    {
        $result = Slider::all();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getSystemSliders(Request $request)
    {
        $result = System::find($request['system_id'])->sliders;

        if($result->count() == 0)
        {
            $result = Slider::where('system_id', '0')->get();
        }
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getSystems(Request $request)
    {
        $result = System::with('owner', 'city')->get();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function getSystem(Request $request)
    {
        $result = System::with('owner', 'city', 'work_times')->where('id', $request['id'])->first();
        return response()->json($result, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function editSystem(Request $request)
    {
        $system = System::find($request['id']);

        if ($system) 
        {
            if ($request->has('state')) 
            {
                $system->state = $request['state'];            
            }
            $system->update();
            return response()->json($system, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
        }
    }
     
    function editDelivery(Request $request)
    {
        $delivery = Delivery::find($request['id']);

        if ($request->has('address')) 
        {
            $delivery->address = $request['address'];            
        }
        
        if ($request->has('system_id')) 
        {
            $delivery->system_id = $request['system_id'];            
        }

        if ($request->has('state')) 
        {
            $delivery->state = $request['state'];            
        } 

        if ($request->has('seen')) 
        {
            $delivery->seen = $request['seen'];            
        } 

        if ($request->has('description')) 
        {
            $delivery->description = $request['description'];            
        } 

        $delivery->update();

        if ($request->has('items')) 
        {
            foreach($delivery->items as $item)
            {
                $delivery->items()->detach($item->id);
            }

            foreach($request['items'] as $item)
            {
                $delivery->items()->attach([$item['id'] => ['count'=> $item['count']]]);
            }
        }

        return response()->json($delivery, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }

    function addNewDelivery(Request $request)
    {
        $delivery = new Delivery();
        $delivery->user_id = $request['user_id'];
        $delivery->system_id = $request['system_id'];
    
        if ($request->has('address')) 
        {
            $delivery->address = $request['address'];            
        }

        if ($request->has('state')) 
        {
            $delivery->state = $request['state'];            
        }

        $delivery->save();

        foreach($request['items'] as $item)
        {
            $delivery->items()->attach([$item['id'] => ['count'=> $item['count']]]);
        }

        return response()->json($delivery, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
    }
     
    function verificationSMS(Request $request)
    {
        return $this->sendSMS($request['mobile_number'], "esxf1rvim9", array( "code" => $request['code']));
    }
     
    private function sendSMS($mobile_number, $pattern_code, $input_data)
    {
        // turn off the WSDL cache
        ini_set("soap.wsdl_cache_enabled", "0");
        try 
        {
            $client = new SoapClient("http://ippanel.com/class/sms/wsdlservice/server.php?wsdl");
            $user = "09155598173"; 
            $pass = "2200698518"; 
            $fromNum = "3000505"; 
            $toNum = array($mobile_number);
        
            return $client->sendPatternSms($fromNum,$toNum,$user,$pass,$pattern_code,$input_data);
        } 
        catch (SoapFault $ex) 
        {
            return $ex->faultstring;
        }
    }
}