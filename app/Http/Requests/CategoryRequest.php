<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'name' => 'required',
//            'parent_id' => 'required',
        ];
    }

    public function messages()
    {
        return ['name.required'=>'分类名称必填',
//            'parent_id.required'=>'分类父级必填',
        ];
    }
}
