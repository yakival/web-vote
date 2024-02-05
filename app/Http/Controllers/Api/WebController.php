<?php

namespace App\Http\Controllers\Api;

use App\Mail\VoteEmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\fconfig;
use App\fdata;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class WebController extends Controller
{

    public function getConfig(Request $request)
    {
        if(fconfig::all()->first() === null){
            fconfig::query()->insert(['json' => '{}']);
        }
        $item = fconfig::all()->first();

        return response()->json([
            'json' => $item->json,
        ]);
    }

    public function setConfig(Request $request)
    {
        if(fconfig::all()->first() === null){
            fconfig::query()->insert(['json' => '{}']);
        }
        DB::table("fconfigs")->update(['json' => $request->data]);
    }

    public function setData(Request $request)
    {
        fdata::query()->insert(['json' => $request->data]);
    }

    public function clearData(Request $request)
    {
        fdata::query()->delete();
        fdata::query()->insert(['json' => $request->data]);
    }

    public function getData(Request $request)
    {
        $itm = fdata::query()->orderBy("id")->first();
        if($itm) {
            fdata::query()->where("id", "=", $itm->id)->delete();
            return response()->json([
                'json' => $itm->json,
            ]);
        }else{
            return response()->json([
                'json' => null,
            ]);
        }
    }

    public function getPowerPoint(Request $request)
    {
        //ftest::query()->insert(['message' => $request->votes]);
        $data = $request->votes;
        $mode = $request->locid;
        $sum = 0;
        $out = "";
        if($data) {
            $arr = explode(";", $data);
            for($i=0; $i<count($arr); $i++){
                if($mode === "1") {
                    $sum = $sum + ((int)$arr[$i] * ($i + 1));
                }else{
                    if ($arr[$i] !== "0") {
                        $out = $out.((strlen($out) > 0) ? "," : "").'{"key": "'.($i + 1).'", "cnt": "'.$arr[$i].'" }';
                    }
                }
            }
            if($mode === "1") {
                $out = '[{"key": "'.$request->num.'", "cnt": "'.$sum.'"}]';
            }else{
                $out = "[".$out."]";
            }
            fdata::query()->insert(['json' => $out]);
        }
    }

    public function sendMail(Request $request)
    {
        $name       = @trim(stripslashes($_POST['name']));
        $from       = @trim(stripslashes($_POST['email']));
        $subject    = @trim(stripslashes($_POST['subject']));
        $message    = @trim(stripslashes($_POST['message']));
        $to   		= 'support@web-vote.ru';//replace with your email

        $headers   = array();
        $headers[] = "From: {$name} <{$from}>";
        $headers[] = "Reply-To: <{$from}>";
        $headers[] = "Subject: {$subject}";

        $objDemo = new \stdClass();
        $objDemo->demo_one = 'Demo One Value';
        $objDemo->demo_two = 'Demo Two Value';
        $objDemo->sender = 'SenderUserName';
        $objDemo->receiver = 'ReceiverUserName';

        //Mail::raw('emails.reminder', function ($m) {
        //    $m->from('site@web-vote.ru', 'Your Application');

        //    $m->to('support@web-vote.ru')->subject('Your Reminder!');
        //});

        Mail::to("yakival@mail.ru")->send(new VoteEmail($objDemo));

        //::to($to)->send($message);
        //mail($to, $subject, $message);
        return response()->json([
            'json' => null,
        ]);
    }

}
