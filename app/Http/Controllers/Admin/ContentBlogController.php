<?php

namespace App\Http\Controllers\Admin;


use App\Models\Assets;
use App\Models\Category;
use App\Models\Content;
use App\Models\ContentBlog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Class ContentBlogController
 * @package App\Http\Controllers\Admin
 */
class ContentBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $query = ContentBlog::query();
        $pageParams = [
            'keyword' => trim($request->get('keyword', ''))
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('title', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate();
        return view('admin.content-blog.index', [
            'models' => $models,
            'pageParams' => $pageParams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @param  \App\Models\ContentBlog $contentBlog
     * @return \Illuminate\Http\Response
     */
    public function create(ContentBlog $contentBlog)
    {
        $imgList = Assets::all();
        $categories = Category::select(['id', 'name'])->pluck('name', 'id');
        return view('admin.content-blog.create_edit', [
            'imgList' => $imgList,
            'model' => $contentBlog,
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $content = new Content();
        $content->fill($data);
        $content->author = Auth::user()->id;
        $content->type = 1;
        if ($content->save()) {
            $content->categories()->sync($data['category_id']);
            $model = new ContentBlog();
            $model->fill($data);
            $model->content_id = $content->id;
            if ($model->save()) {
                return redirect()->to('admin/content-blog')->with('success', '文章添加成功!');
            } else {
                $content->categories()->detach();
                $content->delete();
                return redirect()->back()->withInput()->withErrors($model->getErrors());
            }
        } else {
            return redirect()->back()->withInput()->withErrors($content->getErrors());
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContentBlog $contentBlog
     * @return \Illuminate\Http\Response
     */
    public function show(ContentBlog $contentBlog)
    {
        //
        return view('admin.content-blog.view', ['model' => $contentBlog]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContentBlog $contentBlog
     * @return \Illuminate\Http\Response
     */
    public function edit(ContentBlog $contentBlog)
    {
        $imgList = Assets::all();
        $categories = Category::select(['id', 'name'])->pluck('name', 'id');
        $exitCategories = DB::table('content_has_category')->where('content_id', $contentBlog->content_id)->pluck('category_id')->toArray();
        return view('admin.content-blog.create_edit', [
            'imgList' => $imgList,
            'categories' => $categories,
            'exitCategories' => $exitCategories,
            'model' => $contentBlog
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\ContentBlog $contentBlog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContentBlog $contentBlog)
    {
        $data = $request->all();
        $content = $contentBlog->parentContent;
        $content->fill($data);
        if ($content->save()) {
            $content->categories()->sync($data['category_id']);
            $contentBlog->fill($data);
            if ($contentBlog->save()) {
                return redirect()->to('admin/content-blog')->with('success', '文章修改成功!');
            } else {
                return redirect()->back()->withInput()->withErrors($contentBlog->getErrors());
            }
        } else {
            return redirect()->back()->withInput()->withErrors($content->getErrors());
        }


    }

    /**
     * Remove the specified resource from storage.
     * @param  \App\Models\ContentBlog $contentBlog
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContentBlog $contentBlog)
    {
        try {
            $contentBlog->parentContent->categories()->detach();
            $contentBlog->parentContent->delete();
            $contentBlog->delete();
            $result = 'success';
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            $result = 'error';
        }
        return json_encode($result);
    }

    /**
     * @param $contentId
     * @return mixed
     */
    public function findModel($contentId)
    {
        $model = ContentBlog::where('content_id', $contentId)->first();
        return $model;
    }
}
