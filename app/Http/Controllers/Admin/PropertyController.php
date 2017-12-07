<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

/**
 * Class PropertyController
 * @package App\Http\Controllers\Admin
 */
class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $query = Property::where(['type' => 'custom']);
        //关键词筛选
        $pageParams = [
            'keyword' => trim($request->get('keyword', '')),
            'page' => $request->get('page', 1)
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('label', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate(25);
        return view('admin.property.index', ['models' => $models,
            'pageParams' => $pageParams]);
    }

    /**
     *
     * Show the form for creating a new resource.
     *
     * @param Property $property
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create(Property $property)
    {
        //
        return view('admin.property.create_edit', ['model' => $property]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $model = new Property();
        $model->fill($data);
        $model->type = 'custom';
        if ($model->save()) {
            return Redirect::to('/admin/property')->with('success', '添加成功');
        }
        return Redirect::back()->withInput()->withErrors($model->getErrors());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property $property
     * @return \Illuminate\Http\Response
     */
    public function show(Property $property)
    {
        //
        return view('admin.property.view', ['model' => $property]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\property $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        //
        return view('admin.property.create_edit', ['model' => $property]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\property $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        //
        $data = $request->all();
        $property->fill($data);
        if ($property->save()) {
            return Redirect::to('/admin/property')->with('success', '更新成功');
        } else {
            return Redirect::back()->withInput()->withErrors($property->getErrors());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\property $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        $model = $this->findModel($property->id);
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
     * @param $propertyId
     * @return mixed
     */
    public function findModel($propertyId)
    {
        $model = Property::findOrFail($propertyId);
        return $model;
    }
}
