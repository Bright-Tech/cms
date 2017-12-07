<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\ContentBlogResource;

class Content extends Resource
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
            'keywords' => (string) $this->keywords,
            'author' => new Admin($this->createdBy),
            'content_info' => $this->when($this->hasInclude($request,'content_info'),
                $this->contenttable_type == 'ContentBlog' ? new ContentBlogResource($this->contenttable) : new ContentPictureResource($this->contenttable)),
            'category' => $this->when($this->hasInclude($request,'category'),Category::collection($this->categories))
        ];
    }
}
