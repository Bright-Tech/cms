<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class NavigationRequest extends FormRequest
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
        $id = $this->route('navigation');
        if (!$id) {
            $id = 0;
        }
        return [
            'name' => [
                'required',
                Rule::unique('navigation')->ignore($id)->where(function ($query) {
                    $query->where('deleted_at', null);
                })
            ],
            'point_type' => 'required',
            'sorting' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '导航名称必填',
            'name.unique' => '导航名称是唯一的',
            'point_type.required' => '导航类型必填',
            'sorting.required' => '排序必填'
        ];
    }
}
