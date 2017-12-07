<?php

namespace App\Providers;

use App\Repositories\ContentRepository;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Laravel\Dusk\DuskServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * Class AppServiceProvider
 * @package App\Providers
 */
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
        Relation::morphMap([
            'ContentBlog' => \App\Models\ContentBlog::class,
            'ContentPicture' => \App\Models\ContentPicture::class
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        switch ($this->app->environment()) {
            case 'production':
                break;
            case 'testing':
                $this->app->register(DuskServiceProvider::class);
                break;
            default:
                $this->app->register(DuskServiceProvider::class);
                $this->app->register(\Way\Generators\GeneratorsServiceProvider::class);
                $this->app->register(\Xethron\MigrationsGenerator\MigrationsGeneratorServiceProvider::class);
        }


        $this->app->singleton(ContentRepository::class, function($app)
        {
            return new ContentRepository();
        });

    }
}
