@php
    $isHome = false;
@endphp
@extends('_site.layouts.app')
@section('title','列表')
@section('content')
    @include('site.layouts.breadcrumb')
    <div class="container">
        <div class="container-content">
            <div class="panel-group" id="accordion" style="min-height: 200px">
                @foreach($content as $value)
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#content{{$value->id}}" aria-expanded="true"
                                   role="button">
                                    <div class="row">
                                        <div class="col-xs-11">
                                            {{$value->contenttable->title}}
                                        </div>
                                        <div class="col-xs-1"><i class="glyphicon glyphicon-chevron-down"></i>
                                        </div>
                                    </div>
                                </a>
                            </h4>
                        </div>
                        <div id="content{{$value->id}}" class="panel-collapse collapse " role="tabpanel" aria-expanded="false">
                            <div class="panel-body">
                                {!! $value->contenttable->content !!}}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="container-fluid container-footer-messages">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6  col-md-offset-3">
                    <div class="row row-logo">
                        <div class="col-sm-4 col-xs-12 ">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/03.png">
                                </li>

                            </ul>
                        </div>
                        <div class="col-sm-4 col-xs-6">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/02.jpg">
                                </li>
                                <li class="list-group-item">关注我们的微信</li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-xs-6">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/01.png">
                                </li>
                                <li class="list-group-item">关注我们的微博</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row row-link">
                        <div class="col-sm-4 col-xs-4 col-join"><a href="#">加入我们</a></div>
                        <div class="col-sm-4 col-xs-4"><a href="#">法律声明</a></div>
                        <div class="col-sm-4 col-xs-4"><a href="#">商务合作</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
