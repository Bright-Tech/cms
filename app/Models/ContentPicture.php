<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class ContentPicture
 * @package App\Models
 */
class ContentPicture extends Model
{
    use SoftDeletes;
    /**
     * 对应表名
     * @var string
     */
    public $table = 'content_picture';

    public $timestamps = FALSE;

    /**
     * @var array
     */
    public $fillable = [
        'title',
        'point_url',
        'point_type',
        'point_category_id',
        'point_content_id',
        'assets_url',
        'description'
    ];

    public function contents()
    {
        return $this->morphOne('App\Models\Content', 'contenttable');
    }

}
