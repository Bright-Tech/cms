<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ContentPictureResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    use BaseResource;

    public function toArray($request)
    {
        return [
            'id' => (int) $this->id,
            'title' => (string) $this->title,
            'point_url' => (string) $this->point_url,
            'point_type' => (int) $this->point_type,
            'point_category_id' => (int) $this->point_category_id,
            'point_content_id' => (int) $this->point_content_id,
            'assets_url' => (string) $this->assets_url,
            'category_name' => $this->when($this->hasInclude($request, 'category_name'), $this->contents->categories()->get()->pluck('name')),
            'category_id' => $this->when($this->hasInclude($request, 'category_id'), $this->contents->categories()->get()->pluck('id')),
            'author' => $this->when($this->hasInclude($request, 'author'), new Admin($this->contents->createdBy)),
            'keywords' => (string) $this->contents->keywords,
            'description' => (string) $this->description
        ];
    }
}
