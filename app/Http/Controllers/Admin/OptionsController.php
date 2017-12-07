<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\StoreOptionsPost;
use App\Models\Option;
use App\Models\Property;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

/**
 * Class OptionsController
 * @package App\Http\Controllers\Admin
 */
class OptionsController extends Controller
{

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = Property::select(['key', 'value'])->where('type', 'site-property')->pluck('value', 'key')->toArray();
        $model = new Option();
        foreach ($data as $key => $value) {
            if ($key == 'web_analytics_code') {
                $model->webAnalyticsCode = $data[$key];
            } else {
                $model->$key = $value;
            }
        }
        return view('admin.options.general', [
            'model' => $model
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOptionsPost $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOptionsPost $request)
    {
        $data = $request->all();
        foreach ($data as $key => $value) {
            DB::table('property')->where('key', $key)->update(['value' => $value]);
        }
        return Redirect::to('/admin/options')->with('success', '添加成功！');
    }

}
