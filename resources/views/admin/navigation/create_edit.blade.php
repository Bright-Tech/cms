@section('title','添加导航')
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
                                {!! Form::label('name', '名称' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('name', old('name', isset($model->name) ? $model->name : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('name', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('parent_id') ? ' has-erroar' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('parent_id', '父级导航' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('parent_id', $parent , old('parent_id', isset($model->parent_id) ? $model->parent_id : null) , ['class' => 'form-control' ]) !!}
                                </div>
                                {!! $errors->first('parent_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('sorting') ? ' has-error' : '' }}">
                            <div class="col-lg-12">
                                {!! Form::label('sorting', '排序' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('sorting', old('mobile', isset($model->sorting) ? $model->sorting : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('sorting', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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
                                {!! Form::label('point_category_id', '分类' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('point_category_id', $category , old('point_category_id', isset($model->point_category_id) ? $model->point_category_id : null) , ['class' => 'form-control' , 'placeholder' => '请选择分类','id'=>'point-category']) !!}
                                </div>
                                {!! $errors->first('point_category_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }} point_url"
                             style="display: none">
                            <div class="col-lg-12">
                                {!! Form::label('point_url', 'Url' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::text('point_url', old('point_url', isset($model->point_url) ? $model->point_url : null) , ['class' => 'form-control']) !!}
                                </div>
                                {!! $errors->first('point_url', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('content_id') ? ' has-error' : '' }} point_content_id"
                             style="display: none">
                            <div class="col-lg-12">
                                {!! Form::label('point_content_id', '内容' , ['class' => 'col-lg-2 col-xs-12 control-label']) !!}
                                <div class="col-lg-6 col-xs-12">
                                    {!! Form::select('point_content_id', $content , old('point_content_id', isset($model->point_content_id) ? $model->point_content_id : null) , ['class' => 'form-control' , 'placeholder' => '请选择']) !!}
                                </div>
                                {!! $errors->first('point_content_id', '<div class="help-block  col-lg-4 col-xs-12 inline"> :message</div>') !!}
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
@push('script')
<script>
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
    }
    window.onload = function () {
        renderLink();
    };
    $('#point-category').on('change', function () {
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
</script>
@endpush