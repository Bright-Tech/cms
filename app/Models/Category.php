<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;

/**
 * Class Category
 * @package App\Models
 */
class Category extends Model
{
    use SoftDeletes;
    /**
     * 对应表名
     *
     * @var string
     */
    public $table = 'category';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'parent_id'
    ];


    /**
     * 父级分类
     * @return mixed
     */
    public function parent()
    {
        return $this->hasOne(Category::class, 'id', 'parent_id');
    }

    /**
     * 文章
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function contents()
    {
        return $this->belongsToMany(Content::class , 'content_has_category' , 'category_id' , 'content_id');
    }
}
