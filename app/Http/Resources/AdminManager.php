<?php
/**
 * Created by PhpStorm.
 * User: Daxu
 * Date: 2017/11/24
 * Time: 12:01
 */

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;

class AdminManager extends Resource
{
    use BaseResource;
    public function toArray($request)
    {
        return [
            'id' => (int) $this->id,
            'name' => (string) $this->name,
            'username' => (string) $this->username,
            'email' => (string) $this->email,
            'mobile' => (string) $this->mobile,
            //'permissions' => $this->when($this->hasInclude($request, 'profile'), $this->getPermissions())
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