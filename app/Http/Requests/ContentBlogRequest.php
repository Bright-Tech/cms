<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContentBlogRequest extends FormRequest
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
            'content' => 'required',
            'category_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => '主标题必填！',
            'content.required' => '文章内容必填！',
            'category_id.required' => '分类必填！'
        ];
    }
}
