@section('title','文章详情')
@extends('admin.layouts.app')
@section('content')
    <div class="wrapper wrapper-content  animated fadeInRight article">
        <div class="row">
            <div class="col-lg-12 ">
                <div class="ibox">
                    <div class="ibox-content">
                        <div class="pull-right">
                            @foreach($model->parentContent->categories as $category)
                                <button class="btn btn-white btn-xs" type="button">{{$category->name}}</button>
                            @endforeach
                        </div>
                        <div class="text-center article-title">
                            <h1>
                                {{$model->title}}
                            </h1>
                            <h3>
                                {{$model->sub_title}}
                            </h3>
                            <div class="text-left">
                                <h5>关键字：<span>{{$model->parentContent->keywords}}</span></h5>
                            </div>
                        </div>

                        {!! $model->content !!}
                        <hr>
                        <div class="row">
                            <div class="pull-right">
                                <h4>{{$model->parentContent->createdBy->name}}</h4>
                                <h4><span ><i class="fa fa-clock-o"></i> {{$model->parentContent->updated_at}}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
@endsection
@push('script')
<script src="{{asset('/js/jquery.pjax.js')}}"></script>
<script>
    $(document).ready(function () {
        $(document).pjax('[data-pjax] a ,a[data-pjax]', '#pjax-container');
    });
</script>
@endpush