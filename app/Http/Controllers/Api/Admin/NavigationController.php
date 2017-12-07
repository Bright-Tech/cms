<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\NavigationRequest;
use App\Models\Navigation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Navigation as NavigationResource;
use Illuminate\Support\Facades\Validator;

class NavigationController extends Controller
{
    const MESSAGES_ARR = [
        'point_url.required' => 'url必填',
        'point_category_id.required' => '分类必填',
        'point_content_id.required' => '内容必填',
    ];

    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', null);
        $models = Navigation::query()->when($keyword, function ($queryString) use ($keyword) {
            $queryString->where('name', 'like', '%' . $keyword . '%');
        })->with('category', 'content.contenttable', 'parent')->orderByDesc('id')->paginate();
        return NavigationResource::collection($models);
    }

    /**
     * @param NavigationRequest $request
     * @return NavigationResource
     */
    public function store(NavigationRequest $request)
    {
        $data = $request->all();
        $model = new Navigation();
        $model->fill($data);
        $validate = $this->validateData($data, $model);
        $validator = $validate['validator'];
        $model = $validate['model'];
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model->save();
        return new NavigationResource($model);
    }

    /**
     * @param $id
     * @return NavigationResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);
        return new NavigationResource($model);
    }

    /**
     * @param NavigationRequest $request
     * @param $id
     * @return NavigationResource
     */
    public function update(NavigationRequest $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $validate = $this->validateData($data, $model);
        $validator = $validate['validator'];
        $model = $validate['model'];
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model->save();
        return new NavigationResource($model);
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = $this->findModel($id);
        $model->delete();
        return ['删除成功！'];
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findModel($id)
    {
        $model = Navigation::query()->where('id', $id)->first();
        return $model;
    }

    protected function validateData($data, $model)
    {
        switch ($data['point_type']) {
            case 1:         //单页
                $validator = Validator::make($data, [
                    'point_category_id' => 'required',
                    'point_content_id' => 'required'
                ], self::MESSAGES_ARR);
                $model->point_url = 'content/' . $model->point_content_id;
                break;
            case 2:         //列表
                $validator = Validator::make($data, [
                    'point_category_id' => 'required'
                ], self::MESSAGES_ARR);
                $model->point_url = 'list/' . $model->point_category_id;
                $model->point_content_id = null;

                break;
            case 3:         //外链
                $validator = Validator::make($data, [
                    'point_url' => 'required'
                ], self::MESSAGES_ARR);
                $model->point_content_id = null;
                $model->point_category_id = null;
                break;
            default:      //无  不加会报undefined
                $validator = Validator::make($data,[
                ],self::MESSAGES_ARR);
                $model->point_url = null;
                $model->point_content_id = null;
                $model->point_category_id = null;
        }
        return ['validator' => $validator, 'model' => $model];
    }
}
