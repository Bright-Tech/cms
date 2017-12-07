@extends('site.layouts.app')
@section('title',$content->contenttable->title)
@section('content')
    @include('site.layouts.breadcrumb')
    <div class="container content blog-page blog-item">
        <div class="blog">
            <h2>{{$content->contenttable->title}}</h2>
            <h3>{{$content->contenttable->title}}</h3>
            <div class="blog-post-tags">

            </div>
            {!! $content->contenttable->content !!}
        </div>
    </div>
@stop