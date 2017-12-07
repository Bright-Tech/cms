<?php
/**
 * Created by PhpStorm.
 * User: samxiao
 * Date: 2017/6/9
 * Time: 下午5:58
 */

namespace App\Repositories;


use App\Models\Content;
use App\Models\Navigation;
use App\Models\Property;

class AppRepository
{

    private $navigationArr = null;
    /**
     * @var array
     */
    private $properties = null;

    /**
     * @return array
     */
    public function getNavigation()
    {
        if (empty($this->navigationArr)) {
            $navigation = Navigation::query()->get();
            $this->navigationArr = $this->formatTree($navigation);
        }
        return $this->navigationArr;
    }

    /**
     * @param $array
     * @param $pid
     * @return array
     */
    protected function formatTree($array, $pid = 0)
    {
        $arr = array();
        foreach ($array as $navigation) {
            if ($navigation['parent_id'] == $pid) {
                $navItem = [
                    'title' => $navigation['name'],
                    'url' => $navigation['point_url'],
                ];
                $items = $this->formatTree($array, $navigation['id']);
                $navItem['items'] = $items;
                $arr[] = $navItem;
            }
        }
        return $arr;
    }

    /**
     * @return array
     */
    public function getProperty()
    {
        if (empty($this->properties)) {
            $this->properties = Property::query()->pluck('value', 'key');
        }
        return $this->properties;
    }

    /**
     * @param $type
     * @param $category
     * @return mixed
     */
    public function getContentByCategory($type, $category)
    {

        return Content::whereHas('categories', function ($query) use ($category) {
            $query->where('name', $category);
        })->where('type', $type)->get();
    }

}