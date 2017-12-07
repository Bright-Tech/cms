<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\StoreOptionsPost;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Property as PropertyResource;

class OptionController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $models = Property::query()->where('type', 'site-property')->get();
        return PropertyResource::collection($models);
    }

    /**
     * @param StoreOptionsPost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreOptionsPost $request)
    {
        $data = $request->all();
        foreach ($data as $key => $value) {
            DB::table('property')->where('key', $key)->update(['value' => $value]);
        }
        return response()->json(['保存成功']);
    }


}
