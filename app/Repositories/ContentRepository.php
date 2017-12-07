<?php
/**
 * Created by PhpStorm.
 * User: samxiao
 * Date: 2017/6/9
 * Time: 下午5:58
 */

namespace App\Repositories;


use App\Models\Content;

class ContentRepository
{


    /**
     * @param $type
     * @param $category
     * @return Content[]
     */
    public function getContentByCategory($type, $category)
    {
        $result = Content::whereHas('categories', function ($query) use ($category) {
            $query->where('name', $category);
        })->where('contenttable_type', $type)->take(4)->get();
        if(empty($result)){
            return false;
        }else{
            return $result;
        }

    }

}