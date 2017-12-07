@section('title','添加文章')
@extends('admin.layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal', 'method' => 'post' , 'url' => url('/admin/content-blog/' . $model->content_id)]) !!}
                        @if($model->content_id != 0)
                            {{ method_field('PUT') }}
                        @endif
                        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('title', '文章标题' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('title', old('title', isset($model->title) ? $model->title : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('title', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('sub_title') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('sub_title', '文章副标题' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('sub_title', old('sub_title', isset($model->sub_title) ? $model->sub_title : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('sub_title', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('category_id') ? ' has-error' : '' }} category_id">
                            <div class="col-lg-12">
                                {!! Form::label('category_id', '文章分类' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('category_id[]', $categories , old('category_id', isset($exitCategories) ? $exitCategories : null) , [
                                    'class' => 'form-control chosen-select' , 'data-placeholder' => '请选择分类' , 'multiple']) !!}
                                </div>
                                {!! $errors->first('category_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('intro_image') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('intro_image', '文章介绍图' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    <button type="button" class="btn btn-primary col-lg-2   " data-toggle="modal" data-target="#myModal">
                                        添加介绍图
                                    </button>
                                    <div id="intro_img_info" class="col-lg-4">
                                        <div id="intro_img_content">
                                            @if(isset($model->intro_image))
                                                <img src="{{asset(\Illuminate\Support\Facades\Storage::url($model->intro_image))}}">
                                            @endif
                                        </div>
                                    </div>
                                    {!! Form::hidden('intro_image', old('intro_image', isset($model->intro_image) ? $model->intro_image : null) , ['class' => 'form-control' , 'id' => 'intro_image' ]) !!}
                                </div>

                                {!! $errors->first('intro_image', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('keywords') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('keywords', '文章关键字' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('keywords', old('keywords', isset($model->parentContent) ? $model->parentContent->keywords : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('keywords', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('content') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('content', '文章内容' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-8 col-xs-12">
                                    {!! Form::textarea('content', old('content', isset($model->content) ? $model->content : null) , ['class' => 'form-control' , 'id' => 'content']) !!}
                                </div>
                                {!! $errors->first('content', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="col-lg-4 col-lg-offset-3">
                            <button type="submit" class="btn btn-primary block full-width m-b">{{isset($model)? '保存':'提交'}}</button>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal inmodal fade" id="myModal" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog " style="width: 945px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">选择介绍图</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            @foreach($imgList as $item)
                                <div class="file-box">
                                    <div class="file">
                                        <a href="javascript:selectImage('{{$item->path}}' , '{{Storage::url($item->path)}}')">
                                            <span class="corner"></span>

                                            <div class="image">
                                                <img alt="image" class="img-responsive" src="{{Storage::url($item->path)}}">
                                            </div>
                                            <div class="file-name">
                                                {{ $item->name }}
                                                <br/>
                                                <small>{{ $item->updated_at }}</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog" style="width: 945px">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">插入图片</h4>
                </div>
                <div class="modal-body">
                    <div class="animated fadeInRight">
                    <div class="row">
                        <div class="col-lg-12">
                            @foreach($imgList as $item)
                                <div class="file-box">
                                    <div class="file">
                                        <a href="javascript:insertImage('{{asset(\Illuminate\Support\Facades\Storage::url($item->path))}}' , '{{ $item->name }}')">
                                            <span class="corner"></span>

                                            <div class="image">
                                                <img alt="image" class="img-responsive" src="{{asset(\Illuminate\Support\Facades\Storage::url($item->path))}}">
                                            </div>
                                            <div class="file-name">
                                                {{ $item->name }}
                                                <br/>
                                                <small>{{ $item->updated_at }}</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
<script src="{{asset('/js/summernote.js')}}"></script>
<script>
    function animationHover(element, animation) {
        element = $(element);
        element.hover(
            function () {
                element.addClass('animated ' + animation);
            },
            function () {
                //wait for animation to finish before removing classes
                window.setTimeout(function () {
                    element.removeClass('animated ' + animation);
                }, 2000);
            });
    }

    function selectImage(path , url) {
        console.log(path);
        $("#intro_image").val(path);
        var html = '<div id="intro_img_content"><img src="' + url + '"></div>';
        $("#intro_img_content").remove();
        $("#intro_img_info").append(html);
        $('#myModal').modal('hide');
    }

    function insertImage(url , name) {
        console.log(url);
        //插入图片
        $("#content").summernote('insertImage', url, name);
        $('#myModal5').modal('hide');
    }

    //定义一个插入图片的按钮
    var InsertImage = function () {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
            contents: '<i class="note-icon-picture"/>',
            tooltip: '插入图片',
            click: function () {
                $('#myModal5').modal('show');
            }
        });
        return button.render();   // return button as jquery object
    }

    $(document).ready(function(){
        $('#content').summernote({
            placeholder: 'write here...',
            lang: 'zh-CN',
            minHeight: 300,
            toolbar: [
                ['misc', ['style' , 'codeview' , 'undo' , 'redo' , 'help']],
                ['style', [ 'bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontname', ['fontname']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['insert', ['link' , 'video' , 'table' , 'hr']],
                ['mybutton', ['image']]
            ],
            buttons: {
                image: InsertImage
            },
            callbacks: {
                onInit: function() {
                    console.log('summernote init');
                }
            }
        });
        $('.file-box').each(function() {
            animationHover(this, 'pulse');
        });
        $('.chosen-select').chosen({width: "100%"});
    });
</script>
@endpush