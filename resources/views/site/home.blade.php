@php
    $isHome = true;
@endphp
    @extends('site.layouts.app')
@section('title','首页')
@section('content')
    <!--轮播图 Start-->
    @if($upperAds)
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            @foreach($upperAds as $key=>$value)
                @if($value->contenttable)
                <li class="{{$key == 0 ? 'active' : ''}}" data-target="#carousel-example-generic"
                    data-slide-to="{{$key}}"></li>
                @endif
            @endforeach
        </ol>
        <div class="carousel-inner" role="listbox">

            @foreach($upperAds as $index => $upperAd)
                @if($upperAd->contenttable)
                <div class="{{$index == 0 ? 'item active' : 'item'}}">
                    <a href="{{url($upperAd->point_url.' ')}}"><img
                                src="{{'storage/'. $upperAd->contenttable->assets_url}}"
                                alt="..."></a>
                </div>
                @endif
            @endforeach

        </div>
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    @endif


    <!--轮播图 End-->
    <div class="container text-justify menu-item">
        <h2><span class="span-style">新闻资讯</span></h2>
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5 news-img">
            @if($middleAdPicture)
            <img src="{{'storage/'.$middleAdPicture[0]->contenttable->assets_url}}" alt=""
                 style="width: 100%;height: 200px;"/>
            @endif
        </div>
        <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 news-list">
            @if($middleAdBlog)
            <ul class="news-display">
                @foreach($middleAdBlog as $content)
                    <li>
                        <a href="{{url('content',['contentId'=>$content->id])}}">{{$content->contenttable->title}}</a><span
                                class="pull-right">{{date('m-d',strtotime($content->created_at))}}</span></li>
                @endforeach
            </ul>
            @endif
        </div>
    </div>
    @if($products)
        <div class="container text-justify menu-item">
            @foreach($products as $content)
                <div class="col-xs-6 col-sm-6 col-md-3 col-md-3 news-img">
                    <div class="brightech-img-card ">
                        <a href="{{url('/content',['id'=>$content->id])}}">
                            <img src="{{'storage/'.$content->contenttable->intro_image}}" alt=""/>
                        </a>
                    </div>

                </div>
            @endforeach
        </div>
    @endif
    @if($products)
    <div class="container-fluid container-news">
        <div class="container">
            <div class="row row-index-news">
                <div class="col-sm-7 col-xs-12 news-text">
                    <div class="news-top">
                        <span>新闻资讯</span>
                    </div>
                    <ul class="list-group news-list-group">
                        @foreach($products as $content)
                            <li class="list-group-item">
                            <a href="{{url('/content',['id'=>$content->id])}}">{{$content->contenttable->title}}</a>
                            04-13
                        </li>
                        @endforeach
                    </ul>
                    <div class="news-more">
                        <a href="#">更多资讯...</a>
                    </div>
                </div>
                <!--  col-sm-offset-1 在当前位置向右移一格   -->
                <div class="col-sm-4 col-sm-offset-1  col-xs-12 news-img">
                    <img alt="" src="http://ths.daxuefun.cn//storage/assets/fbRd21MWiG4PKFLQ0E47lLL4OPOYIju4tATcE7KG.png" class="img-responsive">
                </div>
            </div>
        </div>
    </div>
    @endif
    @if($products)
    <div class="container text-justify menu-item">
        <h2><span class="span-style">产品信息</span></h2>
        @foreach($products as $content)
            <div class="col-xs-6 col-sm-6 col-md-3 col-md-3 news-img">
                <div class="brightech-img-card ">
                    <a href="{{url('/content',['id'=>$content->id])}}">
                        <img src="{{'storage/'.$content->contenttable->intro_image}}" alt=""/>
                    </a>
                    <a href="#"><span>Read More+</span></a>
                </div>
                <div class="brightech-text-card ">
                    <a class="product-a" href="{{url('/content',['id'=>$content->id])}}">
                        <h4>{{$content->contenttable->title}}</h4>
                    </a>
                    <div class="brightech-project-detail">
                        <a class="product-a" href="{{url('/content',['id'=>$content->id])}}">
                            {{$content->contenttable->sub_title}}
                        </a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    @endif
    @if($successCase)
    <div class="container text-justify menu-item cases-display">
        <h2><span class="span-style">成功案例</span></h2>
        @foreach($successCase as $content)
            <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 ">
                <a href="#">
                    <img src="{{'storage/'.$content->contenttable->assets_url}}"/>
                </a>
            </div>
        @endforeach
    </div>
    @endif
@stop