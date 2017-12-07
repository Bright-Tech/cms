<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\ContentPictureRequest;
use App\Http\Resources\ContentPictureResource;
use App\Models\Category;
use App\Models\Content;
use App\Models\ContentPicture;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ContentPictureController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $models = ContentPicture::query()->when($keyword, function ($query) use ($keyword) {
            $query->where('title', 'like', '%' . $keyword . '%');
        })->with('contents.createdBy', 'contents.categories')->orderByDesc('id')->paginate();
        return ContentPictureResource::collection($models);
    }

    /**
     * @param ContentPictureRequest $request
     * @return ContentPictureResource
     */
    public function store(ContentPictureRequest $request)
    {
        $data = $request->all();
        $validator = $this->validateData($data);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $contentPicture = new ContentPicture();
        $contentPicture->fill($data);
        $contentPicture = $this->fillData($data, $contentPicture);
        $content = new Content();
        if ($contentPicture->save()) {
            $content->fill($data);
            $content->contenttable_type = 'ContentPicture';
            $content->contenttable_id = $contentPicture->id;
            $content->author = Auth::user()->id;
            $content->categories_str = $this->getCategoryIdStr($data['category_id']);
            if ($content->save()) {
                $content->categories()->sync($data['category_id']);
            }
        }
        return new ContentPictureResource($contentPicture);
    }

    /**
     * @param $id
     * @return ContentPictureResource
     */
    public function show($id)
    {
        $model = $this->findModel($id);
        return new ContentPictureResource($model);
    }

    /**
     * @param ContentPictureRequest $request
     * @param $id
     * @return ContentPictureResource
     */
    public function update(ContentPictureRequest $request, $id)
    {
        $data = $request->all();
        $validator = $this->validateData($data);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $contentPicture = $this->findModel($id);
        $contentPicture->fill($data);

        $contentPicture = $this->fillData($data, $contentPicture);
        if ($contentPicture->save()) {
            $content = $contentPicture->contents;
            $content->fill($data);
            $content->categories_str = $this->getCategoryIdStr($data['category_id']);
            if ($content->save()) {
                $content->categories()->sync($data['category_id']);
            }
        }
        return new ContentPictureResource($contentPicture);
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $contentPicture = $this->findModel($id);
        $content = $contentPicture->contents;
        $content->delete();
        $contentPicture->delete();
        return ['删除成功！'];
    }

    protected function findModel($id)
    {
        $model = ContentPicture::query()->findOrFail($id);
        return $model;
    }

    protected function getCategoryIdStr($categoryIdArr)
    {
        $categories = Category::query()->whereIn('id',$categoryIdArr)->get();
        $categoriesName = [];
        foreach ($categories as $category){
            $categoriesName[] = $category->name;
        }
        return json_encode($categoriesName,JSON_UNESCAPED_UNICODE);
    }


    public function validateData($data)
    {
        $v = Validator::make($data, [],[
            'point_category_id.exists'=>'指向分类必填',
            'point_content_id.exists'=>'内容必填',
            'point_url.required'=>'Url必填',
        ]);
        $v->sometimes('point_category_id', 'exists:category,id', function ($input) {
            return in_array($input->point_type, [1,2]);
        });
        $v->sometimes('point_content_id', 'exists:contents,id', function ($input) {
            return $input->point_type == 1;
        });
        $v->sometimes('point_url', 'required', function ($input) {
            return $input->point_type == 3;
        });

        return $v;
    }

    public function fillData($data, $model)
    {
        switch($data['point_type']){
            case 1:
                $model->point_url = 'content/'.$data['point_content_id'];
                break;
            case 2:
                $model->point_url = 'list/'.$data['point_category_id'];
                break;
            case 3:
            default :
            $model->point_url = $data['point_url'];
        };

        return $model;
    }
}
