<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreOptionsPost
 * @package App\Http\Requests
 */
class StoreOptionsPost extends FormRequest
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
        return [
            //
            'title' => 'required',
            'keywords' => 'required',
            'domain' => 'required',
            'logo' => 'required',
            'description' => 'required',
            'icp' => 'required',
            'web_analytics_code' => 'required',
        ];
    }

    /**
     * 验证错误提示信息
     *
     */
    public function messages()
    {
        return [
            'title.required' => '网站名称必填',
            'keywords.required' => '网站关键字必填',
            'domain.required' => '网站域名必填',
            'logo.required' => '网站图标必选',
            'description.required' => '网站说明必填',
            'icp.required' => 'ICP备案号必填',
            'web_analytics_code.required' => '流量监测代码必填',
        ];
    }
}
