@section('title','添加分类')
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
                                {!! Form::label('name', '分类名称' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('name', old('name', isset($model->name) ? $model->name : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('name', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('parent_id') ? ' has-erroar' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('parent_id', '父级分类' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('parent_id', $parent , old('parent_id', isset($model->parent_id) ? $model->parent_id : null) , ['class' => 'form-control' , 'placeholder' => '请选择']) !!}
                                </div>
                                {!! $errors->first('parent_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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