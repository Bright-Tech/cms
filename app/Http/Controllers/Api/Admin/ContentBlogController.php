<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\ContentBlogRequest;
use App\Models\Category;
use App\Models\Content;
use App\Models\ContentBlog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ContentBlogResource;
use Illuminate\Support\Facades\Auth;

class ContentBlogController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $models = ContentBlog::query()->when($keyword, function ($query) use ($keyword) {
            $query->where('title', 'like', '%' . $keyword . '%');
        })->with('contents.createdBy', 'contents.categories')->orderByDesc('id')->paginate();
        return ContentBlogResource::collection($models);
    }

    /**
     * @param ContentBlogRequest $request
     * @return ContentBlogResource
     */
    public function store(ContentBlogRequest $request)
    {
        $data = $request->all();
        $contentBlog = new ContentBlog();
        $contentBlog->fill($data);
        $content = new Content();
        if ($contentBlog->save()) {
            $content->fill($data);
            $content->contenttable_type = 'ContentBlog';
            $content->contenttable_id = $contentBlog->id;
            $content->author = Auth::user()->id;
            $content->categories_str = $this->getCategoryIdStr($data['category_id']);
            if ($content->save()) {
                $content->categories()->sync($data['category_id']);
            }
        }
        return new ContentBlogResource($contentBlog);
    }

    /**
     * @param $id
     * @return ContentBlogResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);
        return new ContentBlogResource($model);
    }

    /**
     * @param ContentBlogRequest $request
     * @param $id
     * @return ContentBlogResource
     */
    public function update(ContentBlogRequest $request, $id)
    {
        $data = $request->all();
        $contentBlog = $this->findModel($id);
        $contentBlog->fill($data);
        if ($contentBlog->save()) {
            $content = $contentBlog->contents;
            $content->fill($data);
            $content->categories_str = $this->getCategoryIdStr($data['category_id']);
            if ($content->save()) {
                $content->categories()->sync($data['category_id']);
            }
        }
        return new ContentBlogResource($contentBlog);
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    protected function findModel($id)
    {
        $model = ContentBlog::query()->findOrFail($id);
        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $contentBlog = $this->findModel($id);
        $content = $contentBlog->contents;
        $content->delete();
        $contentBlog->delete();
        return response()->json(['删除成功！']);
    }

    /**
     * @param $categoryIdArr
     * @return string
     */
    protected function getCategoryIdStr($categoryIdArr)
    {
        $categories = Category::query()->whereIn('id',$categoryIdArr)->get();
        $categoriesName = [];
        foreach ($categories as $category){
            $categoriesName[] = $category->name;
        }
        return json_encode($categoriesName,JSON_UNESCAPED_UNICODE);
    }
}
