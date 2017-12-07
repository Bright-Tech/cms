<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class AdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        $id = $this->route('admin');
        if (!$id) {
            $id = 0;
        }
        if ($id == 0) {
            return [
                'name' => 'required',
                'username' => [
                    'required',
                    Rule::unique('admin')
                ],
                'email' =>[
                    'required',
                    Rule::unique('admin')
                ],
                'password' => 'required'
            ];
        }
        return [
            'name' => 'required',
            'username' => [
                'required',
                Rule::unique('admin')->ignore($id)
            ],
            'email' =>[
                'required',
                Rule::unique('admin')->ignore($id)
            ],
            'password' => 'required',
            'mobile' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '昵称必填',
            'email.required' => '邮箱必填',
            'email.email' => '邮箱格式不正确',
            'email.unique' => '该邮箱已存在',
            'password.required' => '密码必填',
            'username.required' => '用户名必填',
            'username.unique' =>'用户名唯一',
            'mobile.required' => '手机号必填'
        ];

    }
}
