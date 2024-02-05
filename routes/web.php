<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::options('/{any}', function(){ return ''; })->where('any', '.*');
Route::get('/video', 'App\Http\Controllers\HomeController@video');
Route::get('/signin-oidc', 'App\Http\Controllers\HomeController@Oauth');
Route::get('/{any}', 'App\Http\Controllers\HomeController@index')->where('any', '.*');
