<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\PropertyRequest;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Property as PropertyResource;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Property::query()->where('type','custom');
        $models = $query->when($keyword, function ($queryString) use ($keyword) {
            return $queryString->where('label', 'like', '%' . $keyword . '%');
        })->orderByDesc('id')->paginate();

        return PropertyResource::collection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PropertyRequest $request
     * @return PropertyResource
     */
    public function store(PropertyRequest $request)
    {
        $data = $request->all();
        $model = new Property();
        $model->fill($data);
        $model->type = 'custom';
        $model->save();
        return new PropertyResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return PropertyResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);

        return new PropertyResource($model);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PropertyRequest $request
     * @param $id
     * @return PropertyResource
     */
    public function update(PropertyRequest $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $model->save();
        return new PropertyResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = $this->findModel($id);
        $model->delete();
        return response()->json(['state'=>'success']);
    }

    /**
     * get a model by id
     *
     * @param $id
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function findModel($id){
        $model = Property::query()->findOrFail($id);
        return $model;
    }
}
