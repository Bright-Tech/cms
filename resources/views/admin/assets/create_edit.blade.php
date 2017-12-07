@section('title','添加素材')
@extends('/admin/layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal','enctype'=>'multipart/form-data']) !!}
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('name', '名称' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('name', old('name', isset($model->name) ? $model->name : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('name', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        {{--<div class="form-group{{ $errors->has('url') ? ' has-error' : '' }}">--}}
                        {{--<div class="col-lg-12">--}}
                        {{--{!! Form::label('url', '选择文件' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}--}}
                        {{--<div class="col-lg-6 col-xs-12">--}}
                        {{--{!! Form::file('url', old('url', isset($model->url) ? $model->url : null) , ['class' => 'form-control']) !!}--}}
                        {{--</div>--}}
                        {{--{!! $errors->first('url', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                            <div class="form-control" data-trigger="fileinput">
                                <i class="glyphicon glyphicon-file fileinput-exists"></i>
                                <span class="fileinput-filename"></span>
                            </div>
                            <span class="input-group-addon btn btn-default btn-file">
                                <span class="fileinput-new">Select file</span>
                                <span class="fileinput-exists">Change</span>
                                <input type="file" id="assets-file" name="upload-file" data-url="{{url('/admin/assets/uploadFile')}}"/>
                            </span>
                            <a href="#" class="input-group-addon btn btn-default fileinput-exists"
                               data-dismiss="fileinput">Remove</a>
                        </div>

                        <div class="col-lg-4 col-lg-offset-3">
                            <button type="submit"
                                    class="btn btn-primary block full-width m-b">{{isset($model)? '保存':'提交'}}</button>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{asset('/js/assets.js')}}"></script>
    <script>
        Assets.imageServerUrl = 'http://localhost/cms/public/';
    </script>
@endsection