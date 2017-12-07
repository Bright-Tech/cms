<?php
namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

/**
 * Created by PhpStorm.
 * User: 都大爽
 * Date: 2017/8/24
 * Time: 11:26
 */

class AuthController extends Controller
{

    /**
     * 登录
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|mixed|\Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|exists:admin',
            'password' => 'required'
        ],[
            'username.required' => '用户名必填',
            'username.exists' => '用户名不存在',
            'password.required' => '密码必填'
        ]);
        if ($validator->fails()) {
            return response($validator->errors()->toArray(), 401);
        }

        $request->offsetSet('client_name', 'Laravel Password Grant Client');
        $response = $this->getAccessToken($request);

        if ($response['status']){
            return $response['token_info'];
        }else{
            return $response;
//            return response($response['msg'], 401);
        }
    }

    /**
     * 获取AccessToken
     * @param Request $request
     * @return array
     */
    public function getAccessToken(Request $request)
    {
        $data = $request->all();
        $client = $this->getClient($data['client_name']);
        if ($client){
            $http = new Client();
            try{
                $response = $http->post(url('oauth/token'), [
                    'form_params' => [
                        'grant_type' => 'password',
                        'client_id' => $client->id,
                        'client_secret' => $client->secret,
                        'username' => $data['username'],
                        'password' => $data['password'],
                        'scope' => '',
                    ],
                    'http_errors' => false
                ]);
                $tokenInfo = json_decode((string) $response->getBody(), true);
                return ['status' => true, 'token_info' => $tokenInfo];
            }catch (\Exception $e){
                return ['status' => false, 'msg' => $e->getMessage()];
            }
        }else{
            return ['status' => false, 'msg' => '不存在的客户端'];
        }
    }


    /**
     * 获取客户端
     * @param string $grantType
     * @param $clientName
     * @return mixed
     */
    public function getClient($clientName, $grantType = 'password')
    {
        return DB::table('oauth_clients')->when($grantType == 'password', function ($query){
            return $query->where('password_client', 1);
        })->where('name', $clientName)->first();
    }





}