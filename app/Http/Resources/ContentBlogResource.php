<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ContentBlogResource extends Resource
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
            'title' => (string) $this->title,
            'sub_title' => (string)$this->sub_title,
            'content' => (string) $this->content,
            'keywords' => (string) $this->contents->keywords,
            'categories' => json_decode($this->contents->categories_str),
            'category_id' => $this->when($this->hasInclude($request, 'category_id'), $this->contents->categories()->get()->pluck('id')),
            'intro_image' => (string) $this->intro_image,
            'author' => $this->when($this->hasInclude($request, 'author'), new Admin($this->contents->createdBy))
        ];
    }
}
