<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function Login(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!$this->guard()->attempt($credentials)) {
            return response()->json([

                'message' => 'The provided credentials are incorrect.'
            ], 422);
        }
        $this->guard()->attempt($credentials);
        $userg = $this->guard()->user();
        $token = $userg->createToken('auth-token')->plainTextToken;

        //$user = $userg->get()->first();
        DB::select(
            DB::raw("update users set remember_token='" . $token . "' where id=" . $userg->id)
        );

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }


    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $this->guard()->logout();
        return response()->json([
            'status_code' => '200',
            'message' => 'logged out successfully'
        ]);
    }

    public function user(Request $request)
    {
        if(auth("sanctum")->check()){
            $user = DB::select(
                DB::raw('select * from users where id=' . auth("sanctum")->user()->id)
            )[0];
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                //'email_verified_at' => $user->email_verified_at,
                'token' => $user->remember_token
            ]);
        }
    }

    public function guard($guard = 'web')
    {
        return Auth::guard($guard);
    }
}
