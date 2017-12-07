@section('title','分类管理')
@extends('admin.layouts.app')
@section('content')
    <div class="row" id="pjax-container">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>分类管理列表</h5>
                    <div class="ibox-tools">

                        <a href="{{url('/admin/category/create')}}" class="btn btn-primary btn-xs">添加一个新分类</a>
                    </div>
                </div>
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['method' => 'get', 'class' => 'form-horizontal']) !!}

                        <div class="col-sm-12">
                            <div class="input-group">
                                {{ Form::hidden('page',$pageParams['page']) }}
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
                            <th class="col-xs-2">分类名称</th>
                            <th class="col-xs-2">父级分类</th>
                            {{--<th class="col-xs-2">创建时间</th>--}}
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($models as $model)
                            <tr>
                                <td>{{$model->name}}</td>
                                <td>{{isset($model->parent->name) ? $model->parent->name :  '无'}}</td>
                                {{--<td>{{$model->created}}</td>--}}
                                <td class="col-lg-1 tooltip-demo">
                                    <a href="{{ url('/admin/category/update', ['id' => $model->id] ) }}"
                                       data-toggle="tooltip" data-placement="top" title="修改">
                                        <i class="fa fa-pencil list-btn-i"></i>
                                    </a>
                                    <a href="#"
                                       data-href="{{ url('/admin/category/delete')}}"
                                       data-id="{{$model->id}}"
                                       class="list-delete-i btnDelete"
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
                            {{ $models->links() }}
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
@stop
@push('script')
<script src="{{asset('/js/jquery.pjax.js')}}"></script>
<script>
    $(document).ready(function () {
        $(document).pjax('[data-pjax] a ,a[data-pjax]', '#pjax-container');
    });
</script>
@endpush