<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Content
 * @package App\Models
 */
class Content extends Model
{
    use SoftDeletes;

    /**
     * 对应表名
     *
     * @var string
     */
    public $table = 'contents';

    public $fillable = [
        'keywords','contenttable_type'
    ];

    public function contenttable()
    {
        return $this->morphTo()->withTrashed();
    }

    /**
     *
     * @return mixed
     */
    public function createdBy()
    {
        return $this->belongsTo(Admin::class, 'author');
    }

    /**
     * 分类
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'content_has_category', 'content_id', 'category_id')->withTrashed();
    }

    public function navigation(){
        return $this->hasOne(Navigation::class,'point_content_id');
    }
}
