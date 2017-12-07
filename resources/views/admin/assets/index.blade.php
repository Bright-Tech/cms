@section('title','素材管理')
@extends('admin.layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>素材管理</h5>
                </div>
                <div class="ibox-content">
                    <div class="row">

                        {!! Form::open(['class' => 'form-horizontal','enctype'=>'multipart/form-data']) !!}
                        <div class="col-xs-10">
                        <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                            <div class="form-control" data-trigger="fileinput">
                                <i class="glyphicon glyphicon-file fileinput-exists"></i>
                                <span class="fileinput-filename"></span>
                            </div>
                            <span class="input-group-addon btn btn-default btn-file">
                                <span class="fileinput-new">选择文件</span>
                                <span class="fileinput-exists">更改</span>
                                <input type="hidden">
                                <input type="file" name="upload-file">
                            </span>
                            <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">删除</a>
                        </div>
                        </div>
                        <div class="col-xs-2">
                            <button type="submit"
                                    class="btn btn-primary block full-width m-b">上传</button>
                        </div>
                        {!! Form::close() !!}
                    </div>
                    <hr>
                    <div class="lightBoxGallery">
                        @foreach($models as $model)
                            <a href="#" title="Image from Unsplash" data-gallery=""><img
                                        src="{{asset(\Illuminate\Support\Facades\Storage::url($model->thumb))}}"></a>
                        @endforeach
                    <!-- The Gallery as lightbox dialog, should be a child element of the document body -->
                    </div>

                </div>
            </div>
        </div>
    </div>
@stop