<?php

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Admin;
use App\Models\Permission;

class UserRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //创建角色
        $owner = new Role();
        $owner->name = 'owner';
        $owner->display_name = 'Project Owner';
        $owner->description = 'User is the owner of a given project';
        $owner->save();

        $admin = new Role();
        $admin->name = 'admin';
        $admin->display_name = 'User Administrator';
        $admin->description = 'User is allowed to manage and edit other users';
        $admin->save();

        $user = Admin::where('name', '=', 'admin')->first();

        //调用EntrustUserTrait提供的attachRole方法
        $user->attachRole($admin); // 参数可以是Role对象，数组或id

        // 或者也可以使用Eloquent原生的方法
        //$user->roles()->attach($admin->id); //只需传递id即可



        $createPost = new Permission();
        $createPost->name = 'create-post';
        $createPost->display_name = 'Create Posts';
        $createPost->description = 'create new blog posts';
        $createPost->save();

        $editUser = new Permission();
        $editUser->name = 'edit-user';
        $editUser->display_name = 'Edit Users';
        $editUser->description = 'edit existing users';
        $editUser->save();

        $owner->attachPermission($createPost);
        //等价于 $owner->perms()->sync(array($createPost->id));

        $admin->attachPermissions(array($createPost, $editUser));
        //等价于 $admin->perms()->sync(array($createPost->id, $editUser->id));
    }
}
