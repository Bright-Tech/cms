<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SelectorResource;
use App\Models\Category;
use App\Models\Content;
use App\Models\Navigation;

class DataProviderController extends Controller
{

    public function getCategoriesSelectorData()
    {
        $model = Category::query()->select(['id', 'name'])->get();
        return SelectorResource::collection($model);
    }

    public function getNavigationSelectorData()
    {
        $model = Navigation::query()->select(['name', 'id'])->get();
        return SelectorResource::collection($model);
    }

    /**
     * 根据$type 和 $category 获取对应的内容
     * @param $categoryId
     * @param string $type all  blog  picture
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getContentSelectorData($categoryId, $type = 'all')
    {
        switch ($type) {
            case 'blog':
                $models = Content::query()->with('contenttable')->where('contenttable_type', 'ContentBlog')
                    ->whereHas('categories', function ($query) use ($categoryId) {
                        $query->where('id', $categoryId);
                    })->get();
                break;
            case 'picture':
                $models = Content::query()->with('contenttable')->where('contenttable_type', 'ContentPicture')
                    ->whereHas('categories', function ($query) use ($categoryId) {
                        $query->where('id', $categoryId);
                    })->get();
                break;
            default:
                $models = Content::query()->with('contenttable')
                    ->whereHas('categories', function ($query) use ($categoryId) {
                        $query->where('id', $categoryId);
                    })->get();
        }
        return SelectorResource::collection($models);
    }

}