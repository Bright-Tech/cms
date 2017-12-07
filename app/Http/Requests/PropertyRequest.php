<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
//        return $this->user->can('');
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
            'key' => 'required',
            'value' => 'required',
            'label' => 'required'
//            'type' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'key.required' => '参数名称必填',
            'value.required' => '参数内容必填',
            'label.required' => '参数标题必填'
//            'type.required' => '参数类型必填'
        ];
    }
}
