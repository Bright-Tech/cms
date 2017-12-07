<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Admin extends Resource
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
            'username' => (string) $this->username,
            'email' => (string) $this->email,
            'mobile' => (string) $this->mobile,
            'permissions' => $this->when($this->hasInclude($request, 'profile'), $this->getPermissions())
        ];
    }

    public function getPermissions()
    {
        $permissionList = [];
        foreach ($this->roles as $role) {
            foreach ($role->perms as $permission) {
                $permissionList[] = $permission->name;
            }
        }
        return $permissionList;
    }
}
