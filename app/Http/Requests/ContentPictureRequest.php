<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ContentPictureRequest extends FormRequest
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
            'title' => 'required',
            'point_type' => 'required|numeric',
            'assets_url' => 'required',
            'category_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => '标题必填',
            'category_id.required'  => '类型必填',
            'point_type.required'  => '指向类型必填',
            'point_type.numeric' => '指向类型格式不正确',
            'assets_url.required'  => '图片必填'
        ];
    }
}
