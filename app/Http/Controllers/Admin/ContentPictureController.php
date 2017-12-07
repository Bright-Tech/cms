<?php

namespace App\Http\Controllers\Admin;


use App\Http\Requests\ContentPictureRequest;
use App\Models\Assets;
use App\Models\Content;
use App\Models\ContentBlog;
use App\Models\ContentPicture;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

/**
 * Class ContentPictureController
 * @package App\Http\Controllers\Admin
 */
class ContentPictureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $query = ContentPicture::query();
        $pageParams = [
            'keyword' => trim($request->get('keyword', ''))
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('title', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate();
        return view('admin.content-picture.index', [
            'models' => $models,
            'pageParams' => $pageParams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @param  \App\Models\ContentPicture $picture
     * @return \Illuminate\Http\Response
     */
    public function create(ContentPicture $picture)
    {
        $imgList = Assets::all();
        $nothing = false;
        $list = false;
        $singlePage = false;
        $theChain = false;
        $categories = Category::select(['id', 'name'])->pluck('name', 'id');
        $currentCategoryId = Input::old('point_category_id', null);
        $content = ContentBlog::getContentBlogList($currentCategoryId);
        return view('admin.content-picture.create_edit', [
            'categories' => $categories,
            'nothing' => $nothing,
            'list' => $list,
            'singlePage' => $singlePage,
            'theChain' => $theChain,
            'content' => $content,
            'imgList' => $imgList,
            'model' => $picture
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ContentPictureRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContentPictureRequest $request)
    {
        $data = $request->all();
        $content = new Content();
        $content->fill($data);
        $content->author = Auth::user()->id;
        $content->type = 2;
        if ($content->save()) {
            $content->categories()->sync($data['category_id']);
            $model = new ContentPicture();
            $model->fill($data);
            $model->content_id = $content->id;
            switch ($data['point_type']) {
                case 0:
                    $model->point_url = '#';
                    break;
                case 1: //单页
                    if (!$model->point_content_id) {
                        return Redirect::back()->withInput()->withErrors('指向内容必填');
                    }
                    $model->point_url = 'content/' . $model->point_content_id;
                    break;
                case 2: //列表
                    if (!$model->point_category_id) {
                        return Redirect::back()->withInput()->withErrors('指向分类必填');
                    }
                    $model->point_url = 'list/' . $model->point_category_id;
                    break;
                default:
            }
            if ($model->save()) {
                return redirect()->to('admin/content-picture')->with('success', '图片添加成功!');
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
     * @param  \App\Models\ContentPicture $picture
     * @return \Illuminate\Http\Response
     */
    public function show(ContentPicture $picture)
    {
        //
        return view('admin.content-picture.view', ['model' => $picture]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContentPicture $picture
     * @return \Illuminate\Http\Response
     */
    public function edit(ContentPicture $picture)
    {
        $imgList = Assets::all();
        $nothing = false;
        $list = false;
        $singlePage = false;
        $theChain = false;
        switch ($picture->point_type) {
            case 0:
                $nothing = true;
                break;
            case 1:
                $singlePage = true;
                break;
            case 2:
                $list = true;
                break;
            case 3:
                $theChain = true;
                break;
            default:
        }
        $categories = Category::select(['id', 'name'])->pluck('name', 'id');
        $currentCategoryId = Input::old('point_category_id', $picture->point_category_id);
        $content = ContentBlog::getContentBlogList($currentCategoryId);
        $exitCategories = DB::table('content_has_category')->where('content_id', $picture->content_id)->pluck('category_id')->toArray();
        return view('admin.content-picture.create_edit', [
            'categories' => $categories,
            'exitCategories' => $exitCategories,
            'nothing' => $nothing,
            'list' => $list,
            'singlePage' => $singlePage,
            'theChain' => $theChain,
            'content' => $content,
            'imgList' => $imgList,
            'model' => $picture
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\ContentPicture $picture
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContentPicture $picture)
    {
        $data = $request->all();
        $content = $picture->parentContent;
        $content->fill($data);
        if ($content->save()) {
            $content->categories()->sync($data['category_id']);
            $picture->fill($data);
            switch ($data['point_type']) {
                case 0:
                    $picture->point_url = '#';
                    break;
                case 1: //单页
                    if (!$picture->point_content_id) {
                        return Redirect::back()->withInput()->withErrors('指向内容必填');
                    }
                    $picture->point_url = 'content/' . $picture->point_content_id;
                    break;
                case 2: //列表
                    if (!$picture->point_category_id) {
                        return Redirect::back()->withInput()->withErrors('指向分类必填');
                    }
                    $picture->point_url = 'list/' . $picture->point_category_id;
                    break;
                default:
            }
            if ($picture->save()) {
                return redirect()->to('admin/content-picture')->with('success', '图片修改成功!');
            } else {
                return redirect()->back()->withInput()->withErrors($picture->getErrors());
            }
        } else {
            return redirect()->back()->withInput()->withErrors($content->getErrors());
        }


    }

    /**
     * Remove the specified resource from storage.
     * @param  \App\Models\ContentPicture $picture
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContentPicture $picture)
    {
        try {
            $picture->parentContent->categories()->detach();
            $picture->parentContent->delete();
            $picture->delete();
            $result = 'success';
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            $result = 'error';
        }
        return json_encode($result);
    }

    /**
     * @param $categoryId
     * @return mixed
     */
    public function findModel($categoryId)
    {
        $model = ContentPicture::where('content_id', $categoryId)->first();
        return $model;
    }
}
