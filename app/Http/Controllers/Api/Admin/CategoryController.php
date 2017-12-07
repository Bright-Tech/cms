<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Category::query();
        $models = $query->when($keyword, function ($queryString) use ($keyword) {
            return $queryString->where('name', 'like', '%' . $keyword . '%');
        })->orderByDesc('id')->paginate();
        return CategoryResource::collection($models);
    }
    /**
     * @param CategoryRequest $request
     * @return CategoryResource
     */
    public function store(CategoryRequest $request)
    {
        $data = $request->all();
        $model = new Category();
        $model->fill($data);
        $model->save();
        return new CategoryResource($model);
    }

    /**
     * @param $id
     * @return CategoryResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);

        return new CategoryResource($model);
    }

    /**
     * @param CategoryRequest $request
     * @param $id
     * @return CategoryResource
     */
    public function update(CategoryRequest $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $model->save();
        return new CategoryResource($model);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $model = $this->findModel($id);
        $model->delete();
        return response()->json(['state'=>'success']);

    }

    public function checkContent($id)
    {
        $model = $this->findModel($id);
        $contents = $model->contents;
        if($contents->count()){
            return response()->json(['state'=>'该分类下有内容，是否继续删除']);
        }else{
            return response()->json(['state'=>'success']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findModel($id){
        $model = Category::query()->where('id',$id)->first();
        return $model;
    }
}
