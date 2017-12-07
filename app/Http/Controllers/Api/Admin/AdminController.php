<?php
namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Http\Resources\Admin as AdminResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class AdminController extends Controller
{
    /**
     * @return AdminResource
     */
    public function getProfile()
    {
        $authUser = \Auth::user();
        return new AdminResource($authUser);
    }

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
        return AdminResource::collection($models);
    }

    public function store(AdminRequest $request)
    {
        $data = $request->all();
        $model = new Admin();
        $model->fill($data);
        $model->password = bcrypt($data['password']);
        $model->save();
        return new AdminResource($model);
    }

    public function show($id)
    {
        $model = $this->findModel($id);

        return new AdminResource($model);
    }

    public function update(AdminRequest $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $model->password = bcrypt($data['password']);
        $model->save();
        return new AdminResource($model);
    }

    public function destroy($id)
    {
        $model = $this->findModel($id);
        $model->delete();
        return response()->json(['state'=>'success']);
    }

    public function findModel($id){
        $model = Admin::query()->findOrFail($id);
        return $model;
    }

    public function resetUserPassword($userId, $password)
    {
        DB::table('admin')->where('id', $userId)->update(['password' => bcrypt($password)]);
        return ['更新成功！'];
    }
}