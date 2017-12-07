<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class AssetsResource extends Resource
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
            'id' => (int) $this->id,
            'name' => (string)$this->name,
            'path' => (string)$this->path,
            'url' => (string)$this->url,
            'type' => (int)$this->type,
            'thumb' => (string)$this->thumb
        ];
    }
}
