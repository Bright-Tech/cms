<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;
use App\Models\Category;

/**
 * Class ContentBlog
 * @package App\Models
 */
class ContentBlog extends Model
{
    use SoftDeletes;

    const CACHE_TAG = 'content-list';

    public $table = 'content_blog';

    public $timestamps = FALSE;

    public $fillable = [
        'title',
        'sub_title',
        'content',
        'intro_image'
    ];

    public function contents()
    {
        return $this->morphOne('App\Models\Content', 'contenttable');
    }


    /**
     * 根据分类获取文章列表
     * @param $category_id
     * @return mixed
     */
    public static function getContentBlogList($category_id)
    {
        $result = \Cache::tags(self::CACHE_TAG)->rememberForever('content-list:' . $category_id, function () use ($category_id) {
            $category = Category::find($category_id);
            $list = [];
            if ($category) {
                $contents = $category->contents->where('type', 1);
                foreach ($contents as $content) {
                    $list[$content->id] = $content->contentBlog->title;
                }
            }
            return json_encode($list, JSON_UNESCAPED_UNICODE);
        });
        return json_decode($result, true);
    }
}
