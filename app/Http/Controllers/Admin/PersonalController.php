<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;

/**
 * Class PersonalController
 * @package App\Http\Controllers\Admin
 */
class PersonalController extends Controller
{

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $adminId
     * @return \Illuminate\Http\Response
     */
    public function edit($adminId)
    {
        //
        $model = $this->findModel($adminId);
        return view('admin.personal.edit', [
            'model' => $model,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $adminId
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $adminId)
    {
        $data = $request->all();
        $model = $this->findModel($adminId);
        $model->fill($data);
        if ($data['initialPassword'] != '' && $data['repeatPassword'] != '') {
            if ($data['initialPassword'] == $data['repeatPassword']) {
                $model->password = Hash::make($data['repeatPassword']);
            } else {
                return Redirect::back()->withInput()->withErrors('两次输入的密码保持一致');
            }
        } elseif ($data['initialPassword'] == '' && $data['repeatPassword'] != '' || $data['initialPassword'] != '' && $data['repeatPassword'] == '') {
            return Redirect::back()->withInput()->withErrors('密码和确认密码都不为空');
        }


        if ($model->save()) {
            return Redirect::to('/admin/navigation')->with('success', '修改成功！');
        }
        return Redirect::back()
            ->withInput()
            ->withErrors($model->getErrors());

    }

    /**
     * @param $adminId
     * @return mixed
     */
    public function findModel($adminId)
    {
        $model = Admin::findOrFail($adminId);
        return $model;
    }

}
