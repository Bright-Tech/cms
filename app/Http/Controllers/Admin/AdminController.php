<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;

/**
 * Class AdminController
 * @package App\Http\Controllers\Admin
 */
class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Admin::query();

        $pageParams = [
            'keyword' => trim($request->get('keyword', '')),
            'page' => $request->get('page', 1)
        ];
        if (!empty($pageParams['keyword'])) {
            $query->where('name', 'LIKE', '%' . $pageParams['keyword'] . '%');
        }

        $models = $query->paginate();
        return view('admin.content.index', [
            'models' => $models,
            'pageParams' => $pageParams
        ]);
    }

}