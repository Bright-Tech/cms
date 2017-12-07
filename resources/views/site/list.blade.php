@extends('site.layouts.app')
@section('title','列表')
@section('content')
    @include('site.layouts.breadcrumb')
        <div class="container">
            <div class="container-content">
                <div class="panel-group" id="accordion">
                    @foreach($content as $value)
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#content{{$value->contenttable->id}}" aria-expanded="true"
                                       role="button">
                                        <div class="row">
                                            <div class="col-xs-11">
                                                {{$value->contenttable->title}}
                                            </div>
                                            <div class="col-xs-1"><i class="glyphicon glyphicon-chevron-down"></i>
                                            </div>
                                        </div>
                                    </a>
                                </h4>
                            </div>
                            <div id="content{{$value->contenttable->id}}" class="panel-collapse collapse " data-toggle="collapse" data-parent="#accordion"  role="tabpanel" aria-expanded="false">
                                <div class="panel-body">
                                    {{$value->contenttable->content}}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            {{--<table class="table table-striped">--}}
               {{--<thead>--}}
               {{--<tr>--}}
                   {{--<th>#</th><th>标题</th><th>添加日期</th>--}}
               {{--</tr>--}}
               {{--</thead>--}}
                {{--<tbody>--}}
                {{--@foreach($content as $key=> $value)--}}
             {{--<tr>--}}
                 {{--<td>{{$key+1}}</td><td>{{$value->contenttable->title}}</td><td>{{$value->contenttable->created_at}}</td>--}}
             {{--</tr>--}}
                {{--@endforeach--}}
                {{--</tbody>--}}
            {{--</table>--}}
        </div>
    
@endsection