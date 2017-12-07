<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

/**
 * Class CategoryController
 * @package App\Http\Controllers\Admin
 */
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Category::query();

        $pageParams = [
            'keyword' => trim($request->get('keyword', '')),
            'page' => $request->get('page', 1)
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('name', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate();
        return view('admin.category.index', [
            'models' => $models,
            'pageParams' => $pageParams
        ]);
    }

    /**
     *
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getCreate()
    {
        $parent = Category::Select('name', 'id')->pluck('name', 'id');
        $parent['0'] = '无';
        return view('admin.category.create_edit', [
            'parent' => $parent
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
        $model = new Category();
        $model->fill($data);
        if ($model->save()) {
            return Redirect::to('/admin/category')->with('success', '添加成功！');
        }
        return Redirect::back()
            ->withInput()
            ->withErrors($model->getErrors());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property $categoryId
     * @return \Illuminate\Http\Response
     */
    public function getUpdate($categoryId)
    {
        $model = $this->findModel($categoryId);
        $parent = Category::Select('name', 'id')->pluck('name', 'id');
        $parent['0'] = '无';
        return view('admin.category.create_edit', [
            'model' => $model,
            'parent' => $parent
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\property $categoryId
     * @return \Illuminate\Http\Response
     */
    public function postUpdate($categoryId, Request $request)
    {
        $data = $request->all();
        $model = $this->findModel($categoryId);
        $model->fill($data);
        if ($model->save()) {
            return Redirect::to('/admin/category')->with('success', '修改成功');
        }
        return Redirect::back()
            ->withInput()
            ->withErrors($model->getErrors());
    }

    /**
     * Remove the specified resource from storage.
     * @return \Illuminate\Http\Response
     */
    public function delete()
    {
        $categoryId = $_GET['id'];
        $model = $this->findModel($categoryId);
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
     * @param $categoryId
     * @return mixed
     */
    public function findModel($categoryId)
    {
        $model = Category::findOrFail($categoryId);
        return $model;
    }

}