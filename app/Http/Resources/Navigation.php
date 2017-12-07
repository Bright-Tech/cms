<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Navigation extends Resource
{
    use BaseResource;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => (int) $this->id,
            'name' => (string) $this->name,
            'point_type' => (int) $this->point_type,
            'point_content_id' => (int) $this->point_content_id,
            'point_category_name' => $this->when($this->hasInclude($request, 'point_category_name'),  (string) $this->point_category_id ? $this->category->name : '无'),
            'point_content_name' => $this->when($this->hasInclude($request, 'point_content_name'),  (string) $this->point_content_id ? $this->content->contenttable->title : '无'),
            'point_category_id' => (int) $this->point_category_id,
            'parent_navigation_id' => (int) $this->parent_navigation_id,
            'point_url' => (string) $this->point_url,
            'parent_id' =>  $this->parent_id,
            'parent_navigation_name' => $this->when($this->hasInclude($request, 'parent_navigation_name'), (string) $this->parent_id ? $this->parent->name : '无'),
        ];
    }
}
