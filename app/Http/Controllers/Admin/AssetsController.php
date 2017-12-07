<?php

namespace App\Http\Controllers\Admin;

use App\Models\Assets;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Class AssetController
 * @package App\Http\Controllers\Admin
 */
class AssetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = DB::table('assets')->orderByDesc('id')->get();
        return view('admin.assets.index', [
            'models' => $models,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.assets.create_edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = $request->file('upload-file');
        if ($file) {

            $path = $file->store('assets', 'public');                                //上传原图到public\storage\assets文件夹中
            $fileName = pathinfo($path)['filename'];                                //取出原图filename
            $img = Image::make(Storage::disk('public')->get($path));
            $img->resize(200, 200);
            $data = pathinfo($path);
            $file = $img->encode($data['extension']);
            Storage::disk('public')->put('assets/' . $fileName . '_thumb.' . $data['extension'], $file);
            $model = new Assets();
            $model->path = $path;
            $model->thumb = $data['dirname'] . '/' . $data['filename'] . '_thumb.' . $data['extension'];
            $model->type = 1;
            if ($model->save()) {
                return Redirect::to('/admin/assets')->with('success', '添加成功！');
            }
        } else {
            return Redirect::back()->withInput()->withErrors('请选择图片');
        }
        return Redirect::back()->withInput()->withErrors($model->getErrors());
    }


    /**
     * Remove the specified resource from storage.
     *上传图片  LIU
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function uploadFile(Request $request)
    {
        $path = $request->file('upload-file')->store('avatars');
        $data = [];
        if ($path) {
            $data['file_url'] = Storage::url($path);
            $data['success'] = 1;
        } else {
            $data['success'] = 0;
            $data['errorMessage'] = '上传失败';
        }

        return json_encode($path);
    }
}
