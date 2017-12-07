<?php


namespace App\Http\Controllers;


use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        $imgBaseUrl = Storage::url('');
        return view('home', compact('imgBaseUrl'));
    }
}