<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\settings;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*
    public function __construct()
    {
        $this->middleware('auth');
    }
    */
    public function float(Request $request){
        return view('float', []);
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

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $token = "";
        $client_id = "";
        $audio_id = "";
        $conferenceId = "";

        if($request->path() == "/") {
            return view('webvote', ["token" => $token, "clientid" => $client_id, "audioid" => $audio_id]);
        }

        $settigs = settings::all()->first();
        if ($request->hasHeader('Authorization')) {
            $token = $request->bearerToken();
        } else {
            $token = $request->query("token", "");
        }
        if (isset($request->userId)) {
            $client_id = $_GET["userId"];
        } else {
            $client_id = "";
        }
        if (isset($request->audio)) {
            $audio_id = $_GET["audio"];
        } else {
            $audio_id = "";
        }

        $client = new Client();
        if (($client_id !== "") && ($settigs->baseURL !== "") && ($settigs->baseURL !== null)) {
            $conferenceId = (isset($request->conferenceId)) ? $request->conferenceId : "1";
            $response = $client->post($settigs->baseURL,
                //"https://apm-demo.isap.team/api/services/app/VoteIntegration/CheckDelegate",
                [
                    'http_errors' => false,
                    'json' =>
                        [
                            "tenantId" => "841a2213-885a-4c91-bc27-ea38f627414b",
                            "conferenceId" => $conferenceId, //"3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "lawyerId" => $client_id, //"cea8e34e-6fe0-4f28-9cf8-5cb62c764c6f"
                        ]
                ]
            );
            //$response->getStatusCode()
            $response = json_decode($response->getBody()->getContents());
            $check = false;
            if (isset($response->success)) {
                if ($response->success) {
                    if ($response->result->isDelegate) {
                        $check = true;
                    }
                }
            }
            if (!$check) {
                $client_id = "";
            }
        }else{
            if($client_id === "") $client_id = $request->session()->get('_token'); //$this->parseAddr()["ip"];
        }
        return view('home', ["token" => $token, "clientid" => $client_id, "audioid" => $audio_id]);
    }

    public function video(Request $request)
    {
        //$settigs = settings::all()->first();
        if(Str::contains($request->url, "youtu")){
            return view('youtube', ["url" => $request->url]);
        }else {
            return view('video', ["url" => $request->url]);
        }
    }

    public function Oauth(Request $request)
    {
        $oauth_url = "https://apm-is-demo.isap.team";
        $clientid = "c43bd86594254d50b7091f8acc95a6f2";
        $client_secret = "465dedf79dd34338b49f1f5eec8b29bc";
        if (!isset($request->code)) {
            return redirect($oauth_url.'/connect/authorize?'.
                'client_id='.$clientid.
                '&response_type=code'.
                '&scope=openid profile email Ais Apgm'.
                '&state=i-vote1'.
                '&redirect_uri='.
                    ((config('app.env') === 'production') ?
                        'https://' . explode(":", $_SERVER["HTTP_HOST"])[0] . "/signin-oidc" :
                        'http://' . $_SERVER["HTTP_HOST"] . "/signin-oidc")
            );
        } else {
            $token = "";
            $client_id = "";

            $client = new Client();
            $response = $client->post($oauth_url.'/connect/token',
                [
                    'http_errors' => false,
                    'headers' => ['Content-Type' => 'application/x-www-form-urlencoded'],
                    'form_params' =>
                        [
                            "client_id" => $clientid,
                            "client_secret" => $client_secret,
                            "grant_type" => "authorization_code",
                            "scope" => $request->scope,
                            'redirect_uri' =>
                                ((config('app.env') === 'production') ?
                                    'https://' . explode(":", $_SERVER["HTTP_HOST"])[0] . "/signin-oidc" :
                                    'http://' . $_SERVER["HTTP_HOST"] . "/signin-oidc"),
                            "code" => $request->code,
                        ]
                ]
            );
            $response = json_decode($response->getBody()->getContents());
            if(isset($response->access_token)) {
                $response1 = $client->get($oauth_url.'/connect/userinfo',
                    [
                        'http_errors' => false,
                        'headers' => ['Authorization' => 'Bearer ' . $response->access_token],
                    ]
                );
                $response1 = json_decode($response1->getBody()->getContents());
                $client_id = $response1->sub;



            }else{
                return redirect((config('app.env') === 'production') ?
                    'https://' . explode(":", $_SERVER["HTTP_HOST"])[0] . "/signin-oidc" :
                    'http://' . $_SERVER["HTTP_HOST"] . "/signin-oidc");
            }

            return view('home', ["token" => $response->access_token, "clientid" => $client_id]);
        }
    }
}
