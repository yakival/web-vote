<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/register', '\App\Http\Controllers\UserController@update');
});

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user'])->name('user');

    // Users
    Route::get('users/index', '\App\Http\Controllers\UserController@index');
    Route::get('users/delete', '\App\Http\Controllers\UserController@delete');
    Route::get('users/{id}', '\App\Http\Controllers\UserController@show');
    Route::post('users/update/{id}', '\App\Http\Controllers\UserController@update');

});

Route::get('/pult/getdata.asp', '\App\Http\Controllers\Api\ItemsController@getData');
Route::get('/pult/getdataall.asp', '\App\Http\Controllers\Api\ItemsController@index');
Route::post('/pult/resetall.asp', '\App\Http\Controllers\Api\ItemsController@resetAll');
Route::post('/pult/deleteall.asp', '\App\Http\Controllers\Api\ItemsController@deleteAll');
Route::get('/pult/senddata.asp', '\App\Http\Controllers\Api\ItemsController@sendData');
Route::get('/pult/saveconfig.asp', '\App\Http\Controllers\Api\ItemsController@saveConfig');
Route::post('/pult/sendregister.asp', '\App\Http\Controllers\Api\ItemsController@sendRegister');
Route::post('/pult/setvideo.asp', '\App\Http\Controllers\Api\ItemsController@setVideo');

Route::get('/pult/session', '\App\Http\Controllers\Api\ItemsController@getSession');

Route::get('/web/readconfig', '\App\Http\Controllers\Api\WebController@getConfig');
Route::post('/web/writeconfig', '\App\Http\Controllers\Api\WebController@setConfig');
Route::post('/web/writeform', '\App\Http\Controllers\Api\WebController@setData');
Route::post('/web/clearform', '\App\Http\Controllers\Api\WebController@clearData');
Route::get('/web/readdata', '\App\Http\Controllers\Api\WebController@getData');
Route::post('/web/powerpoint', '\App\Http\Controllers\Api\WebController@getPowerPoint');

Route::post('/webvote/mail', '\App\Http\Controllers\Api\WebController@sendMail');
