<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
use App\Models\ContentBlog;
use App\Models\Navigation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Validator;

/**
 * Class NavigationController
 * @package App\Http\Controllers\Admin
 */
class NavigationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Navigation::query();

        $pageParams = [
            'keyword' => trim($request->get('keyword', ''))
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('name', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate();

        return view('admin.navigation.index', [
            'models' => $models,
            'pageParams' => $pageParams]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCreate()
    {
        $nothing = false;
        $list = false;
        $singlePage = false;
        $theChain = false;
        $category = Category::select(['id', 'name'])->pluck('name', 'id');
        $parent = Navigation::select(['id', 'name'])->pluck('name', 'id');
        $content = ContentBlog::select(['content_id', 'title'])->pluck('title', 'id');
        $parent['0'] = '请选择';
        return view('admin.navigation.create_edit', [
            'category' => $category,
            'parent' => $parent,
            'nothing' => $nothing,
            'list' => $list,
            'singlePage' => $singlePage,
            'theChain' => $theChain,
            'content' => $content
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function postCreate(Request $request)
    {
        $data = $request->all();
        $model = new Navigation();
        $validation = Validator::make($data, $model->getRules());
        $validation->sometimes('point_content_id', 'required', function ($input) {
            return $input->point_type == 1;
        });
        if ($validation->fails()) {
            return redirect()->back()
                ->withErrors($validation)
                ->withInput();
        }

        $model->fill($data);
        switch ($data['point_type']) {
            case 1:         //单页
                if ($model->point_category_id) {
                    if (!$model->point_content_id) {
                        return Redirect::back()
                            ->withInput()
                            ->withErrors('内容必填');
                    }
                } else {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('分类必填');
                }
                $model->point_url = 'content/' . $model->point_content_id;
                break;
            case 2:         //列表
                if (!$model->point_category_id) {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('分类必填');
                }
                $model->point_url = 'list/' . $model->point_category_id;
                $model->point_content_id = null;

                break;
            case 3:         //外链
                if (!$model->point_url) {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('Url必填');
                }
                $model->point_content_id = null;
                $model->point_category_id = null;
                break;
            default:
        }

        if ($model->save()) {
            return Redirect::to('/admin/navigation')->with('success', '添加成功！');
        }
        return Redirect::back()
            ->withInput()
            ->withErrors($model->getErrors());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\property $navigationId
     * @return \Illuminate\Http\Response
     */
    public function getUpdate($navigationId)
    {
        $model = $this->findModel($navigationId);
        $nothing = false;
        $list = false;
        $singlePage = false;
        $theChain = false;
        switch ($model->point_type) {
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
        $category = Category::select(['id', 'name'])->pluck('name', 'id');
        $parent = Navigation::select(['id', 'name'])->pluck('name', 'id');
        $content = ContentBlog::select(['content_id', 'title'])->pluck('title', 'id');
        $parent['0'] = '请选择';
        return view('admin.navigation.create_edit', [
            'model' => $model,
            'category' => $category,
            'parent' => $parent,
            'nothing' => $nothing,
            'list' => $list,
            'singlePage' => $singlePage,
            'theChain' => $theChain,
            'content' => $content
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\property $navigationId
     * @return \Illuminate\Http\Response
     */
    public function postUpdate($navigationId, Request $request)
    {
        $data = $request->all();
        $model = $this->findModel($navigationId);
        $model->fill($data);
        switch ($data['point_type']) {
            case 1:         //单页
                if ($model->point_category_id) {
                    if (!$model->point_content_id) {
                        return Redirect::back()
                            ->withInput()
                            ->withErrors('内容必填');
                    }
                } else {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('分类必填');
                }
                $model->point_url = 'content/' . $model->point_content_id;
                break;
            case 2:         //列表
                if (!$model->point_category_id) {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('分类必填');
                }
                $model->point_url = 'list/' . $model->point_category_id;
                $model->point_content_id = null;
                break;
            case 3:         //外链
                $model->point_content_id = null;
                $model->point_category_id = null;
                if (!$model->point_url) {
                    return Redirect::back()
                        ->withInput()
                        ->withErrors('Url必填');
                }
                break;
            default:
        }
        if ($model->save()) {
            return Redirect::to('/admin/navigation')->with('success', '修改成功！');
        }
        return Redirect::back()
            ->withInput()
            ->withErrors($model->getErrors());
    }


    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function delete()
    {
        $navigationId = $_GET['id'];
        $model = $this->findModel($navigationId);
        try {
            $model->delete();
            $result = 'success';
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            $result = 'error';
        }
        return json_encode($result);
    }

    /**
     * @param $navigationId
     * @return mixed
     */
    public function findModel($navigationId)
    {
        $model = Navigation::findOrFail($navigationId);
        return $model;
    }
}