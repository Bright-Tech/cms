@php
    $isHome = false;
@endphp
@extends('_site.layouts.app')
@section('title',$content->navigation ? $content->navigation->name : $content->contenttable->title)
@section('content')
    @include('_site.layouts.breadcrumb')
    <div class="container">
        <div class="row container-content">
            <div class="col-xs-12">
                <div class="content-title">
                    <p> {{$content->contenttable->title}}</p>
                    <div class="container-created">
                        {{date('y-m-d',strtotime($content->created_at))}}
                    </div>
                </div>
                <div class="content-text" style="min-height: 150px">
                    {!! $content->contenttable->content !!}
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid container-footer-messages">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6  col-md-offset-3">
                    <div class="row row-logo">
                        <div class="col-sm-4 col-xs-12 ">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/03.png">
                                </li>

                            </ul>
                        </div>
                        <div class="col-sm-4 col-xs-6">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/02.jpg">
                                </li>
                                <li class="list-group-item">关注我们的微信</li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-xs-6">
                            <ul class="list-group">
                                <li class="list-group-item list-title"><img alt="" src="http://www.thsmedia.com/images/01.png">
                                </li>
                                <li class="list-group-item">关注我们的微博</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row row-link">
                        <div class="col-sm-4 col-xs-4 col-join"><a href="#">加入我们</a></div>
                        <div class="col-sm-4 col-xs-4"><a href="#">法律声明</a></div>
                        <div class="col-sm-4 col-xs-4"><a href="#">商务合作</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
<script type="text/javascript">
  window._bd_share_config = {
    'common': {
      'bdSnsKey': {},
      'bdText': '',
      'bdMini': '2',
      'bdMiniList': false,
      'bdPic': '',
      'bdStyle': '1',
      'bdSize': '16'
    }, 'slide': {'type': 'slide', 'bdImg': '3', 'bdPos': 'right', 'bdTop': '100'}
  }
  with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)]
</script>
@endpush