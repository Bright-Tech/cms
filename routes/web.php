<?php
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

/**
 * Front End
 */
Route::group(['namespace' => 'Site'], function () {
    Route::get('/', 'HomeController@index');
    Route::get('/home', 'HomeController@index');
    Route::get('/list/{id?}', 'HomeController@getList');         //列表
    Route::get('/content/{content}', 'HomeController@getContent');   //文章
});

/**
 * 登录路由
 */
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

/**
 * 后台入口
 */
Route::get('/login', 'HomeController@index');
Route::get('/admin', 'HomeController@index');
Route::get('/admin/{query}', 'HomeController@index')->where('query', '.*');

