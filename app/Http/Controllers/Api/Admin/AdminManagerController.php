<?php
/**
 * Created by PhpStorm.
 * User: Daxu
 * Date: 2017/11/24
 * Time: 11:58
 */

namespace App\Http\Controllers\Api\Admin;


use App\Http\Resources\AdminManager;
use App\Models\Admin;
use App\Http\Requests\AdminRequest ;
use Illuminate\Http\Request;

class AdminManagerController
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Admin::query();
        $models = $query->when($keyword, function ($queryString) use ($keyword) {
            return $queryString->where('name', 'like', '%' . $keyword . '%');
        })->orderByDesc('id')->paginate();
        return AdminManager::collection($models);
    }


    /**
     * @param AdminRequest $request
     * @return AdminManager
     */
    public function store(AdminRequest $request)
    {
        $data = $request->all();
        $model = new Admin();
        $model->fill($data);
        $model->password = bcrypt($request->get('password'));
        $model->save();
        return new AdminManager($model);
    }

    /**
     * 密码重置
     * @param $id
     * @param Request $request
     * @return AdminManager
     */
    public function resetPassword($id,Request $request){
        $password = $request->get('password');
       $model=$this->findModel($id);
       $model->password =  bcrypt($password);
       $model->save();
        return new AdminManager($model);
    }

    /**
     * @param $id
     * @return AdminManager
     */
    public function show($id)
    {
        $model = $this->findModel($id);
        return new AdminManager($model);
    }

    public function update(Request $request,$id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
//        $model->password = bcrypt($data['password']);
        $model->save();
        return new AdminManager($model);
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
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findModel($id){
        return Admin::query()->where('id',$id)->first();
    }
}