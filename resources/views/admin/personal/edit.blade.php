@section('title','个人中心')
@extends('/admin/layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal']) !!}
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('name', '用户名' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('name', old('name', isset($model->name) ? $model->name : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('name', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('email', '邮箱' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('email', old('mobile', isset($model->email) ? $model->email : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('email', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('initialPassword') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('initialPassword', '密码' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::password('initialPassword', ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('initialPassword', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('repeatPassword') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('repeatPassword', '确认密码' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::password('repeatPassword',  ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('repeatPassword', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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