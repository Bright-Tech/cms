<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class SelectorResource extends Resource
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
            'label' => (string)($this->name ? $this->name : $this->contenttable->title),
            'value' => (int)$this->id
        ];
    }
}
