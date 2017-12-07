<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Assets;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AssetsResource;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;

class AssetController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $models = Assets::query()->orderByDesc('id')->paginate(12);
        return AssetsResource::collection($models);
    }

    /**
     * @param Request $request
     * @return AssetsResource
     */
    public function store(Request $request)
    {
        $file = $request->file('file');
        $path = Storage::put('assets', $file, 'public');

        $thumb = \Image::make($file);
        $thumb->resize(150, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $fileName = pathinfo($path)['filename'];
        $extension = pathinfo($path)['extension'];
        Storage::put('assets/' . $fileName . '_thumb.' . $extension, $thumb->encode(), 'public');

        $model = new Assets();
        $model->path = $path;
        $model->thumb = 'assets/' . $fileName . '_thumb.' . $extension;
        $model->type = 1;
        $model->name = $request->get('name', '未命名');
        $model->save();

        return new AssetsResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = $this->findModel($id);

        return new AssetsResource($model);
    }

    public function update(AssetsRequest $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $model->save();
        return new AssetsResource($model);
    }

    public function destroy($id)
    {
        $model = $this->findModel($id);
        Storage::delete($model->path);
        Storage::delete($model->thumb);
        $model->delete();
        return response()->json(['state' => 'success']);
    }

    public function findModel($id)
    {
        $model = Assets::query()->findOrFail($id);
        return $model;
    }

}
