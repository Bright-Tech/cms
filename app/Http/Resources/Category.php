<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Category extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */

    public function toArray($request)
    {
        return [
            'id' => (int)$this->id,
            'name' => (string)$this->name,
//            'parent_id' => (int)$this->parent_id,
//            'parent_name'=>(string)$this->getParent($this->parent_id)
        ];
    }
//    private function getParent($id){
//        if(!$id){
//            return '无';
//        }else{
//            $model = \App\Models\Category::query()->where('id',$id)->first();
//            return $model->name;
//        }
//
//    }
}
