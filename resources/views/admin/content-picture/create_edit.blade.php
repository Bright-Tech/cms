@section('title','添加图片')
@extends('/admin/layouts.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        {!! Form::open(['class' => 'form-horizontal' , 'method' => 'post' , 'url' => url('/admin/content-picture/'.$model->content_id)]) !!}
                        @if($model->content_id != 0)
                            {{ method_field('PUT') }}
                        @endif
                        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('title', '标题' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('title', old('title', isset($model->title) ? $model->title : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('title', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('category_id') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('category_id', '图片分类' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('category_id[]', $categories , old('category_id', isset($exitCategories) ? $exitCategories : null) , [
                                    'class' => 'form-control chosen-select' , 'data-placeholder' => '请选择分类' , 'multiple']) !!}
                                </div>
                                {!! $errors->first('category_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('keywords') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('keywords', '关键字' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('keywords', old('keywords', isset($model->parentContent) ? $model->parentContent->keywords : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('keywords', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('point_type') ? ' has-error' : '' }}">
                            <div class="col-lg-12 ">
                                {!! Form::label('point_type', '指向类型' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-1 col-xs-6 ">
                                    {!! Form::radio('point_type', '0' , old('sex' , $nothing),['id'=>'nothing','onchange'=>'renderLink()']) !!}
                                    <label for="nothing">&nbsp;无</label>
                                </div>
                                <div class="col-lg-1 col-xs-6">
                                    {!! Form::radio('point_type', '1' , old('sex' , $singlePage),['id'=>'singlePage','onchange'=>'renderLink()']) !!}
                                    <label for="singlePage">&nbsp;单页</label>
                                </div>
                                <div class="col-lg-1 col-xs-6">
                                    {!! Form::radio('point_type', '2' , old('sex' , $list),['id'=>'list','onchange'=>'renderLink()']) !!}
                                    <label for="list">列表</label>
                                </div>
                                <div class="col-lg-1 col-xs-6">
                                    {!! Form::radio('point_type', '3' , old('sex' , $theChain),['id'=>'theChain','onchange'=>'renderLink()']) !!}
                                    <label for="theChain">外链</label>
                                </div>
                                {!! $errors->first('point_type', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('point_category_id') ? ' has-error' : '' }} point_category_id"
                             style="display: none">
                            <div class="col-lg-12">
                                {!! Form::label('point_category_id', '指向分类' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('point_category_id', $categories , old('point_category_id', isset($model->point_category_id) ? $model->point_category_id : null) , ['class' => 'form-control' , 'placeholder' => '请选择分类']) !!}
                                </div>
                                {!! $errors->first('point_category_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('point_url') ? ' has-error' : '' }} point_url"
                             style="display: none">
                            <div class="col-lg-12">
                                {!! Form::label('point_url', 'Url' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('point_url', old('point_url', isset($model->point_url) ? $model->point_url : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('point_url', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('point_content_id') ? ' has-error' : '' }} point_content_id"
                             style="display: none">
                            <div class="col-lg-12">
                                {!! Form::label('point_content_id', '内容' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('point_content_id', $content , old('point_content_id', isset($model->point_content_id) ? $model->point_content_id : null) , ['class' => 'form-control' , 'placeholder' => '请选择']) !!}
                                </div>
                                {!! $errors->first('point_content_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('assets_url') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('assets_url', '选择图片' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    <button type="button" class="btn btn-primary col-lg-2   " data-toggle="modal"
                                            data-target="#myModal">
                                        添加
                                    </button>
                                    <div id="intro_img_info" class="col-lg-4">
                                        <div id="intro_img_content">
                                            @if(isset($model->assets_url))
                                                <img src="{{asset(\Illuminate\Support\Facades\Storage::url($model->assets_url))}}" width="200px" height="auto">
                                            @endif
                                        </div>
                                    </div>
                                    {!! Form::hidden('assets_url', old('intro_image', isset($model->assets_url) ? $model->assets_url : null) , ['class' => 'form-control' , 'id' => 'intro_image' ]) !!}
                                </div>

                                {!! $errors->first('assets_url', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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
    <div class="modal inmodal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog " style="width: 945px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">选择介绍图</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            @foreach($imgList as $item)
                                <div class="file-box">
                                    <div class="file">
                                        <a href="javascript:selectImage('{{$item->path}}' , '{{asset(\Illuminate\Support\Facades\Storage::url($item->path))}}')">
                                            <span class="corner"></span>

                                            <div class="image">
                                                <img alt="image" class="img-responsive"
                                                     src="{{asset(\Illuminate\Support\Facades\Storage::url($item->path))}}">
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
@endsection
@push('script')
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

    function selectImage(path, url) {
        console.log(path);
        $("#intro_image").val(path);
        var html = '<div id="intro_img_content"><img src="' + url + '" width="200px" height="auto"></div>';
        $("#intro_img_content").remove();
        $("#intro_img_info").append(html);
        $('#myModal').modal('hide');
    }

    function renderLink() {
        var type = $('input[name="point_type"]:checked').val();
        if (type == 1) {
            $(".point_category_id").show();
            $(".point_content_id").show();
            $(".point_url").hide();
        } else if (type == 2) {
            $(".point_category_id").show();
            $(".point_content_id").hide();
            $(".point_url").hide();
        } else if (type == 3) {
            $(".point_category_id").hide();
            $(".point_content_id").hide();
            $(".point_url").show();
        } else {
            $(".point_category_id").hide();
            $(".point_content_id").hide();
            $(".point_url").hide();
        }

        $('.chosen-select').chosen({width: "100%"});

        $("#point_category_id").on("change", function () {
            $.ajax({
                url: "{{ URL::to('admin/content/content-blog-list-by-category') }}",
                type: 'get',
                data: {'id': $(this).val()},
                dataType: "json",
                success: function (contents) {
                    console.log(contents);
                    $("#point_content_id option:gt(0)").remove();
                    $.each(contents, function (index, value) {
                        $('<option value="' + index + '" >' + value + '</option>').appendTo("#point_content_id");
                    });
                }
            });
        });

    }

    window.onload = function () {
        renderLink();
    }
</script>
@endpush