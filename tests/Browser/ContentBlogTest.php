<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use App\Models\Admin;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ContentBlogTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->browse(function ($first , $second , $third , $fourth) {
            $first->loginAs(Admin::find(1))
                ->visit('/admin')
                ->assertSeeLink('设置');
            $second->loginAs(Admin::find(3))
                ->visit('/admin')
                ->assertDontSeeLink('设置');
            $third->loginAs(Admin::find(1))
                ->visit('/admin/content-blog')
                ->assertSee('文章管理');
            $fourth->loginAs(Admin::find(1))
                ->visit('/admin')
                ->clickLink('内容')
                ->clickLink('文章')
                ->assertSee('文章管理');
        });
    }
}
