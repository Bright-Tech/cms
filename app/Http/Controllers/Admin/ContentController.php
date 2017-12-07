<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContentBlog;
use Illuminate\Http\Request;
use App\Models\Content;
use App\Http\Resources\Content as ContentResource;
use App\Http\Requests\ContentBlogRequest;
use Illuminate\Support\Facades\Auth;


/**
 * Class ContentController
 * @package App\Http\Controllers\Admin
 */
class ContentController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword');
        $type = $request->get('type');
        $models = Content::query()->when($keyword, function ($queryString) use ($keyword) {
            $queryString->where('keywords', 'like', '%' . $keyword . '%');
        })->when($type, function ($queryString) use ($type) {
            $queryString->where('type', $type);
        })->paginate();
        return ContentResource::collection($models);
    }

    /**
     * @param $id
     * @return ContentResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);
        return new ContentResource($model);
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    protected function findModel($id)
    {
        $model = Content::query()->where('id', $id)->first();
        return $model;
    }

    /**
     * @param $categoryIdArr
     * @return string
     */
    protected function getCategoryIdStr($categoryIdArr)
    {
        $newCategoryIdArr = [];
        foreach ($categoryIdArr as $key => $categoryId) {
            $newCategoryIdArr[] = '{' . $categoryId . '}';
        }
        return implode(',', $newCategoryIdArr);
    }

    /**
     * ajax请求文章列表
     * @return array
     */
    public function getContentBlogListByCategory()
    {
        $categoryId = $_GET['id'];
        if ($categoryId != null) {
            $list = ContentBlog::getContentBlogList($categoryId);
        } else {
            $list = [];
        }
        return json_encode($list);
    }
}
