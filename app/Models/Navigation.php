<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;

/**
 * Class NavigationController
 * @package App\Models
 */
class Navigation extends Model
{

    use SoftDeletes;

    /**
     * 表名
     *
     * @var string
     */
    public $table = 'navigation';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'parent_id',
        'sorting',
        'point_url',
        'point_type',
        'point_content_id',
        'point_category_id'
    ];

    /**
     * 分类
     * @return mixed
     */
    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'point_category_id')->withTrashed();
    }

    /**
     * 内容
     * @return mixed
     */
    public function content()
    {
        return $this->hasOne(Content::class, 'id', 'point_content_id')->withTrashed();
    }

    /**
     * 父级导航
     * @return mixed
     */
    public function parent()
    {
        return $this->hasOne(Navigation::class, 'id', 'parent_id')->withTrashed();
    }
}
