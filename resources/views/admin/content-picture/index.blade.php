@section('title','图片管理')
@extends('admin.layouts.app')
@section('content')
    <div class="row" id="pjax-container">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>图片列表</h5>
                    <div class="ibox-tools">
                        <a href="{{url('/admin/content-picture/create')}}" class="btn btn-primary btn-xs">添加一张新图片</a>
                    </div>
                </div>
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['method' => 'get', 'class' => 'form-horizontal']) !!}

                        <div class="col-sm-12">
                            <div class="input-group">
                                {!! Form::text('keyword', isset($pageParams['keyword']) ? $pageParams['keyword'] : '', ['placeholder' => '请输入关键词' , 'class' => 'input-sm form-control']) !!}
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-sm btn-primary">检索</button>
                                </span>
                            </div>
                        </div>


                        {!! Form::close() !!}
                    </div>

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th class="col-lg-2">缩略图</th>
                            <th>分类</th>
                            <th>标题</th>
                            <th>指向类型</th>
                            <th>关键字</th>
                            <th>发布人</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($models as $model)
                            <tr>
                                <td><img src="{{asset(\Illuminate\Support\Facades\Storage::url($model->assets_url))}}" width="150" height="auto"></td>
                                <td>
                                    @foreach($model->parentContent->categories as $category)
                                        {{$category->name}}<br>
                                    @endforeach
                                </td>
                                <td>{{$model->title}}</td>
                                <td>{{trans('content.point_type.'.$model->point_type)}}</td>
                                <td>{{$model->parentContent->keywords}}</td>
                                <td>{{$model->parentContent->createdBy->name}}</td>
                                <td class="col-lg-1 tooltip-demo">
                                    <a href="{{ url('/admin/content-picture/'.$model->content_id .'/edit') }}"
                                       data-toggle="tooltip" data-placement="top" title="修改">
                                        <i class="fa fa-pencil list-btn-i"></i>
                                    </a>
                                    <a href="#"
                                       data-href="{{ route('content-picture.destroy' , ['id' => $model->content_id]) }}"
                                       class="list-delete-i btnRemove"
                                       data-toggle="tooltip" data-placement="top" title="删除">
                                        <i class=" fa fa-trash list-btn-i"></i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>

                    <div class="widget-toolbox padding-10 clearfix">
                        <div class="pull-right">
                            {{ $models->appends($pageParams)->links() }}
                        </div>
                        <div class="pull-left">
                            总计: <span
                                    class="label label-lg label-primary arrowed-right"> {{ $models->total() }} </span>
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