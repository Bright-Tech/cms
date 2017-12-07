<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
use App\Models\ContentBlog;
use App\Models\Navigation;
use App\Models\ContentPicture;
use App\Repositories\ContentRepository;
use Illuminate\Http\Request;

/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ContentRepository $contentRepository)
    {
        $upperAds =$contentRepository->getContentByCategory('ContentPicture','首页上部广告位') ;
        $middleAdPicture =$contentRepository->getContentByCategory('ContentPicture','首页中部广告位');
        $middleAdBlog =$contentRepository->getContentByCategory('ContentBlog','新闻资讯') ;
//        $products =$contentRepository->getContentByCategory('ContentBlog','解决方案') ;
        $successCase =$contentRepository->getContentByCategory('ContentPicture','成功案例') ;
//        dd($upperAds);
        return view('_site.home', [
            'upperAds' => $upperAds,
            'middleAdPicture' => $middleAdPicture,          //中部广告位图片
            'middleAdBlog' => $middleAdBlog,                //中部广告位文章
//            'products' => $products,                        //产品信息
            'successCase' => $successCase                   //成功案例
        ]);
    }



    /**
     * @param Content $content
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getContent(Content $content)
    {
        return view('_site.content', [
            'content' => $content,
        ]);
    }

    /**
     * @param $categoryId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getList($categoryId = null)
    {
        $categoryId = $categoryId || Category::query()->where('name', '新闻资讯')->first()->id;
        $content = Content::whereHas('categories', function ($query) use ($categoryId) {
            $query->where('id', '=', $categoryId);
        })->where('contenttable_type', 'ContentBlog')->get();
        return view('_site.list', [
            'content' => $content,
        ]);
    }
}
