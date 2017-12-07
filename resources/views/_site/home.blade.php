@php
    $isHome = true;
@endphp
@extends('_site.layouts.app')
@section('title','首页')
@section('content')
    @if($upperAds)
    <div class="top-img">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators hidden-xs">
                @foreach($upperAds as $key=>$value)
                    <li class="{{$key == 0 ? 'active' : ''}}" data-target="#carousel-example-generic"
                        data-slide-to="{{$key}}"></li>
                @endforeach
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                @foreach($upperAds as $index => $upperAd)
                    @if($upperAd->contenttable)
                        <div class="{{$index == 0 ? 'item active' : 'item'}}">
                            <a href="{{url($upperAd->contenttable->point_url)}}"><img
                                        src="{{'storage/'. $upperAd->contenttable->assets_url}}"
                                        alt="..."></a>
                        </div>
                    @endif

                @endforeach
                    {{--<div class="item active">--}}
                        {{--<a href=""><img--}}
                                    {{--src="{{'storage/assets/TjIa87k1ORl9UVdS0mx0ufc7HmOZi9Yqj7bY2xKG.jpeg'}}"--}}
                                    {{--alt="..."></a>--}}
                    {{--</div>--}}
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <img src="{{asset('images/left.png')}}" alt="">
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <img src="{{asset('images/right.png')}}" alt="">
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>
    @endif
    <div class="container-fluid container-middle">
        <div class="container">
            <div class="row row-pic">
                <div class="col-sm-12 col-xs-12 middle-text"></div>
            </div>
            @if($successCase)
            <div id="owl-demo" class="owl-carousel">
                @foreach($successCase as $key=>$content)
                    <a href="{{url($content->contenttable->point_url)}}">
                        <img src="{{ Storage::url($content->contenttable->assets_url)}}" class="img-responsive"/>
                    </a>
                @endforeach
            </div>
            @endif
        </div>
    </div>
    @if($middleAdBlog)
    <div class="container-fluid container-news">
        <div class="container">
            <div class="row row-index-news">
                <div class="col-sm-7 col-xs-12 news-text">
                    <div class="news-top">
                        <span>新闻资讯</span>
                    </div>
                    <ul class="list-group news-list-group">
                        @foreach($middleAdBlog as $content)
                            <li class="list-group-item">
                                <a href="{{url('content',['contentId'=>$content->id])}}">{{$content->contenttable->title}}</a>
                                {{date('m-d',strtotime($content->created_at))}}
                            </li>
                        @endforeach
                    </ul>
                    {{--<div class="news-more">--}}
                        {{--{{dd($middleAdBlog[0]->categories)}}--}}
                        {{--<a href="{{url('/list/'.$middleAdBlog[0]->categories->id)}}">更多资讯...</a>--}}
                    {{--</div>--}}
                    <div class="news-more">
                        <a href="{{url('list')}}">更多资讯...</a>
                    </div>
                </div>
                {{--<!--  col-sm-offset-1 在当前位置向右移一格   -->--}}
                {{--@if($middleAdPicture)--}}
                <div class="col-sm-4 col-sm-offset-1  col-xs-12 news-img">
                    {{--<img alt="" src="{{ Storage::url($middleAdPicture[0]->contenttable->assets_url) }}"--}}
                         {{--class="img-responsive">--}}
                    <img alt="" src="http://ths.daxuefun.cn//storage/assets/fbRd21MWiG4PKFLQ0E47lLL4OPOYIju4tATcE7KG.png" class="img-responsive" style="max-width:88%; padding-top:35px; ">
                </div>
                {{--@endif--}}
            </div>
        </div>
    </div>
    @endif
@stop