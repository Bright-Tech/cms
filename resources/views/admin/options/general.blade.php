@section('title','网站设置')
@extends('admin.layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal']) !!}
                        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('title', '网站名称' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('title', old('title', isset($model->title) ? $model->title : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('title', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('keywords') ? ' has-erroar' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('keywords', '网站关键字' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('keywords', old('keywords', isset($model->keywords) ? $model->keywords : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('keywords', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('domain') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('domain', '网站域名' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('domain', old('domain', isset($model->domain) ? $model->domain : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('domain', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('logo') ? ' has-error' : '' }} ">
                            <div class="col-lg-12">
                                {!! Form::label('logo', '网站图标' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('logo', old('logo', isset($model->logo) ? $model->logo : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('logo', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('description') ? ' has-error' : '' }} ">
                            <div class="col-lg-12">
                                {!! Form::label('description', '网站说明' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::textarea('description', old('logo', isset($model->description) ? $model->description : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('description', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('icp') ? ' has-error' : '' }} ">
                            <div class="col-lg-12">
                                {!! Form::label('icp', 'ICP 备案号' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('icp', old('icp', isset($model->icp) ? $model->icp : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('icp', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('web_analytics_code') ? ' has-error' : '' }} ">
                            <div class="col-lg-12">
                                {!! Form::label('web_analytics_code', '流量监测代码' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::textarea('web_analytics_code', old('web_analytics_code', isset($model->webAnalyticsCode) ? $model->webAnalyticsCode : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('web_analytics_code', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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