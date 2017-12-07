<?php

use Illuminate\Http\Request;

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


/**
 * Back End
 */
Route::group(['namespace' => 'Api\Admin', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('access-token', 'AuthController@getAccessToken');
});

Route::group(['middleware' => ['auth:api'], 'namespace' => 'Api\Admin', 'prefix' => 'admin'], function () {




  //管理员管理
    Route::resource('manager', 'AdminManagerController');
    Route::post('reset-password/{id}','AdminManagerController@resetPassword');
    //管理员
    Route::resource('admin', 'AdminController', [
        'except' => ['create', 'edit']
    ]);

    //分类列表
    Route::get('category-list','CategoryController@tableList');


    //获取当前登录人的个人信息
    Route::get('profile', 'AdminController@getProfile');
    Route::post('profile', 'AdminController@updateProfile');

    //导航管理
    Route::resource('navigation', 'NavigationController');
    Route::resource('navigation', 'NavigationController', [
        'except' => ['create', 'edit', 'update']
    ]);


    Route::post('reset-password/{id}', 'AdminManagerController@resetPassword');



    //获取当前登录人的个人信息
    Route::get('profile', 'AdminController@getProfile');
    Route::post('profile', 'AdminController@updateProfile');

/**
 * 内容
 */

//    Route::resource('content', 'ContentController', [
//        'except' => [
//            'create', 'store', 'edit', 'update'
//        ]
//    ]);
//    Route::group(['prefix' => 'content'], function () {
//        Route::get('content-blog-list-by-category', 'ContentController@getContentBlogListByCategory');
//    });




//参数
    Route::resource('property', 'PropertyController', [
        'except' => [
            'create', 'edit'
        ]
    ]);
//文章
    Route::resource('content-blog', 'ContentBlogController', [
        'except' => [
            'create', 'edit'
        ]
    ]);


//图片内容
    Route::resource('content-picture', 'ContentPictureController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    Route::resource('option', 'OptionController', [
        'except' => [
            'create', 'edit', 'destroy'
        ]
    ]);
//分类
    Route::resource('category', 'CategoryController', [
        'except' => ['create', 'edit']
    ]);
    Route::get('category/check-content/{id}', 'CategoryController@checkContent');

//个人中心
    Route::group(['prefix' => 'personal'], function () {
        Route::get('/', 'PersonalController@index');
        Route::get('create', 'PersonalController@create');
        Route::post('create', 'PersonalController@store');
        Route::get('update/{id}', 'PersonalController@edit');
        Route::post('update/{id}', 'PersonalController@update');
        Route::get('delete/{id}', 'PersonalController@getDelete');
    });

    //素材
    Route::resource('asset', 'AssetController');

    //公共下拉列表数据
    Route::get('content-select-data/{categoryId}/{type?}', 'DataProviderController@getContentSelectorData');
    Route::get('category-select-data', 'DataProviderController@getCategoriesSelectorData');
    Route::get('navigation-select-data', 'DataProviderController@getNavigationSelectorData');
});

