<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\items;
use App\settings;
use Illuminate\Support\Facades\DB;
use PhpParser\JsonDecoder;
use Psy\Util\Json;
use Session;

class ItemsController extends Controller
{
    public function index()
    {
        $items = items::all();

        return $items;
    }

    public function resetAll(Request $request)
    {
        DB::table('items')->update(['key' => null]);
    }

    public function deleteAll(Request $request)
    {
        DB::table('items')->delete();
    }

    public function setVideo(Request $request)
    {
        if(settings::all()->first() === null){
            settings::query()->insert(['buttons' => '1,2,3,4,5,6,7,8,9,10,11,12', 'opros' => false]);
        }
        if($request->url !== null){
            DB::table('settings')->update(['url' => $request->url]);
        }
    }

    private function parseAddr(){
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if (isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if (isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if (isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if (isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';

        if($ipaddress==="::1") {
            $ipaddress = "127.0.0.1";
        }
        $m = explode(".", explode(",", $ipaddress)[0]);
        if($m[2]==="0") $m[2] = "1";
        //$ipaddress = join('.', $m);
        return [ 'ip' => $ipaddress, 'ch' => null, 'num' => null, 'fio' => null ];
    }

    public function getSession(Request $request)
    {
        if ($request->hasHeader('Authorization')) {
            $token = $request->bearerToken();
        } else {
            $token = $request->query("token", "");
        }

        /*
        if($request->terminals !== null){
            foreach (json_decode($request->terminals) as $item) {
                items::query()->updateOrInsert(['address'=> $item->address], ['ch' => $item->ch, 'num' => $item->num, 'key' => null ]);
            }
        }
        */
    }

    public function sendRegister(Request $request)
    {
        if($request->terminals !== null){
            foreach (json_decode($request->terminals) as $item) {
                items::query()->updateOrInsert(['address'=> $item->address], ['ch' => $item->ch, 'num' => $item->num, 'key' => null ]);
            }
        }
    }

    public function saveConfig(Request $request)
    {
        if(settings::all()->first() === null){
            settings::query()->insert(['buttons' => '1,2,3,4,5,6,7,8,9,10,11,12', 'opros' => false]);
        }
        if($request->url !== null) {
            DB::table('settings')->update(['url' => $request->url]);
        }
        if($request->baseurl !== null) {
            DB::table('settings')->update(['baseurl' => $request->baseurl]);
        }
        if($request->oauthurl !== null) {
            DB::table('settings')->update(['oauthurl' => $request->oauthurl]);
        }
        if($request->authpage !== null) {
            DB::table('settings')->update(['authpage' => $request->authpage]);
        }
        if($request->fields !== null) {
            DB::table('settings')->update(['fields' => $request->fields]);
        }
    }

    public function sendData(Request $request)
    {
        if(settings::all()->first() === null){
            settings::query()->insert(['buttons' => '1,2,3,4,5,6,7,8,9,10,11,12', 'opros' => false]);
        }

        if($request->buttons !== null){
            DB::table('settings')->update(['buttons' => $request->buttons]);
        }
        if($request->opros !== null){
            DB::table('settings')->update(['opros' => $request->opros]);
        }
        if($request->timer !== null){
            DB::table('settings')->update(['timer' => $request->timer]);
        }
        if($request->authpage !== null){
            DB::table('settings')->update(['authpage' => $request->authpage]);
        }
        $settings = settings::all()->first();

        if(isset($request->clientid)) {
            $itm = DB::table('items')->where("address", "=", $request->clientid)->first();
            if($itm === null) {
                $fio = null;
                if(!$settings["authpage"]){
                    $fio = $request->clientid;
                }
                $addr = ['ip' => $request->clientid, 'ch' => null, 'num' => null, 'fio' => $fio];
            }else{
                $addr = ['ip' => $itm->address, 'ch' => $itm->ch, 'num' => $itm->num, 'fio' => $itm->fio];
            }
        }else {
            $addr = $this->parseAddr();
        }

        //if($addr["fio"] !== null)
            items::query()->updateOrInsert(['address'=> $addr["ip"]], ['address' => $addr["ip"], 'ch' => $addr["ch"], 'num' => $addr["num"], 'fio' => $addr["fio"], 'key' => null ]);

        if($request->data !== null) {
            if($request->data !== "NULL") {
                if (!!$settings->opros) {
                    DB::table('items')->where("address", "=", $addr["ip"])->update(['key' => $request->data]);
                }
            }
        }

        if($request->fio !== null){
            DB::table('items')->where("address", "=", $addr["ip"])->update(['FIO' => $request->fio]);
        }
    }

    public function getData(Request $request)
    {

        $settings = settings::all()->first();
        if($settings === null){
            settings::query()->insert(['buttons' => '1,2,3,4,5,6,7,8,9,10,11,12', 'opros' => false]);
            $settings = settings::all()->first();
        }

        if(($_GET["clientid"] !== null)&&($_GET["clientid"] !== "")) {
            $itm = DB::table('items')->where("address", "=", $_GET["clientid"])->first();
            if($itm === null) {
                $fio = null;
                if(!$settings["authpage"]){
                    $fio = $request->clientid;
                }
                $addr = ['ip' => $request->clientid, 'ch' => null, 'num' => null, 'fio' => $fio];
            }else{
                $addr = ['ip' => $itm->address, 'ch' => $itm->ch, 'num' => $itm->num, 'fio' => $itm->fio];
            }
        }else{
            $addr = $this->parseAddr();
        }
	    if($addr["fio"] !== null)
        	items::query()->updateOrInsert(['address'=> $addr["ip"]], ['address' => $addr["ip"], 'ch' => $addr["ch"], 'num' => $addr["num"], 'fio' => $addr["fio"] ]);

        $item = items::query()->where("address", "=", $addr["ip"])->first();

        return response()->json([
            'data' => $item,
            'settings' => $settings
        ]);
    }
}
