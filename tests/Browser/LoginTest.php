<?php

namespace Tests\Browser;

use App\Models\Admin;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        $user = Admin::where('name' , 'admin')->first();
        $this->browse(function ($first , $second) use ($user) {
            $first->visit('/admin')
                ->assertPathIs('/cms/public/admin/login')
                ->assertSee('崇光内容管理系统')
                ->type('name', $user->name)
                ->type('password', '111111')
                ->press('Login')
                ->assertPathIs('/cms/public/admin')
                ->assertSee('Dashboard');
            $second->visit('/admin/login')
                ->assertTitle('Login')
                ->press('Login')
                ->assertSee('用户名必须填写！')
                ->type('name' , $user->name)
                ->type('password' , 'aaa')
                ->press('Login')
                ->assertSee('These credentials do not match our records');
        });
    }
}
