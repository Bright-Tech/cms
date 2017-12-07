{{-- This comment will not be present in the rendered HTML --}}
@extends('admin.layouts.app')

{{-- This comment will not be present in the rendered HTML --}}
@section('title','添加系统参数')

{{-- This comment will not be present in the rendered HTML --}}
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal','method'=>'post', 'url'=>url('/admin/property/'.$model->id)]) !!}
                        @if($model->id != 0)
                            {{ method_field('PUT') }}
                        @endif
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('label', '名称' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('label', old('name', isset($model->label) ? $model->label : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('label', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('category_id') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('key', '编码' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('key', old('name', isset($model->key) ? $model->key : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('key', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('value', '值' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('value', old('url', isset($model->value) ? $model->value : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('value', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
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
@endsection