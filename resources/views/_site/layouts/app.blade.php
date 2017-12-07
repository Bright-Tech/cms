@inject('appRepository', 'App\Repositories\AppRepository')
        <!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8" name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no "/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9"/>

    <meta name="keywords" content="{{$appRepository->getProperty()['keywords']}}">
    <meta name="description" content="{{$appRepository->getProperty()['description']}}">
    <title>{{$appRepository->getProperty()['title']}}-@yield('title')</title>
    <link rel="stylesheet" href="{{asset('/home/css/bootstrap.css')}}"/>
    <link rel="stylesheet" href="{{asset('/home/css/index.css')}}"/>
    <link rel="stylesheet" href="{{asset('/css/front_app.css')}}"/>
    <link rel="stylesheet" href="{{asset('/home/css/owl.carousel.min.css')}}">
    <script src="{{asset('/home/js/jquery.min.js')}}"></script>
    <script src="{{asset('/home/js/bootstrap.js')}}"></script>
    <script src="{{asset('/home/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('/home/js/bootstrap-hover-dropdown.min.js')}}"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <!--<script src="js/html5shiv.js"></script>-->
    <script src="{{asset('/home/js/html5shiv.js')}}"></script>
    {{--<script src="js/respond.js"></script>--}}
    <script src="{{asset('/home/js/respond.js')}}"></script>

</head>
<body>
<!--nav Start-->

<div  class="navbar-wrapper {{ $isHome?'navbar-light':'navbar-dark' }}" role="navigation" id="top">
    <div class="nav-container container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{url('/')}}">
                <img class="brand-img" src="{{$isHome?asset('/images/home-logo.png'):asset('/images/logo-dark.png')}}" alt="logo">
            </a>

        </div>
        <div id="navbar" class="navbar-collapse collapse" style="height: 0px;">
            <ul class="nav navbar-nav  pull-right">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="//en.thsmedia.com">English</a></li>
                </ul>
                <form class="navbar-form navbar-right hidden-xs " role="search">
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="">
                        <button type="submit" class="button-feedback" style="top: 0;">
                            <img alt="" src="http://www.thsmedia.com/images/search2.png" height="16px">
                        </button>
                    </div>
                </form>
                @foreach($appRepository->getNavigation() as $navigation)
                    <li>
                        {{--@if($navigation['url'])--}}
                            {{----}}
                        {{--@else--}}
                            {{--<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover=""--}}
                               {{--role="button"--}}
                               {{--aria-haspopup="false" aria-expanded="false"><span>{{$navigation['title']}}</span></a>--}}
                        {{--@endif--}}
                            @if(!empty($navigation['items']))
                                <a href="{{url('/'.$navigation['url'])}}" class="dropdown-toggle" data-toggle="dropdown"
                                   data-hover=""
                                   role="button"
                                   aria-haspopup="true" aria-expanded="false"><span>{{$navigation['title']}}</span></a>
                        <ul class="list-group dropdown-menu">

                                @foreach($navigation['items'] as $son)
                                    <li class="list-group-item text-center"><a
                                                href="{{url('/'.$son['url'])}}">{{$son['title']}}</a></li>
                                @endforeach

                        </ul>
                                @else
                                <a href="{{url('/'.$navigation['url'])}}" class="dropdown-toggle"
                                   data-hover=""
                                   role="button"
                                   aria-haspopup="true" aria-expanded="false"><span>{{$navigation['title']}}</span></a>

                        @endif
                    </li>
                @endforeach
            </ul>

        </div>
    </div>
</div>

<!--nav End-->
@yield('content')
<!-- footers-->
@if( !$isHome )
    {{--<div class="container-fluid container-footer-messages">--}}
        {{--<div class="container">--}}
            {{--<div class="row">--}}
                {{--<div class="col-xs-12 col-md-6  col-md-offset-3">--}}
                    {{--<div class="row row-logo">--}}
                        {{--<div class="col-sm-4 col-xs-12 ">--}}
                            {{--<ul class="list-group">--}}
                                {{--<li class="list-group-item list-title"><img alt="" src="{{asset('/images/01.png')}}">--}}
                                {{--</li>--}}

                            {{--</ul>--}}
                        {{--</div>--}}
                        {{--<div class="col-sm-4 col-xs-6">--}}
                            {{--<ul class="list-group">--}}
                                {{--<li class="list-group-item list-title"><img alt="" src="{{asset('/images/02.jpg')}}">--}}
                                {{--</li>--}}
                                {{--<li class="list-group-item">关注我们的微信</li>--}}
                            {{--</ul>--}}
                        {{--</div>--}}
                        {{--<div class="col-sm-4 col-xs-6">--}}
                            {{--<ul class="list-group">--}}
                                {{--<li class="list-group-item list-title"><img alt="" src="{{asset('/images/03.png')}}">--}}
                                {{--</li>--}}
                                {{--<li class="list-group-item">关注我们的微博</li>--}}
                            {{--</ul>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="row row-link">--}}
                        {{--<div class="col-sm-4 col-xs-4 col-join"><a href="#">加入我们</a></div>--}}
                        {{--<div class="col-sm-4 col-xs-4"><a href="#">法律声明</a></div>--}}
                        {{--<div class="col-sm-4 col-xs-4"><a href="#">商务合作</a></div>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
@endif
{{--<div class="container-fluid container-footer">--}}
    {{--<div class="container">--}}
        {{--<div class="row">--}}
            {{--<div class="col-sm-3 col-xs-12 footer-logo">--}}
                {{--<img alt="" src="./images/logo3.png"--}}
                     {{--class="img-responsive center-block hidden-xs">--}}
                {{--<img alt="" src="../images/logo3.png"--}}
                     {{--class="img-responsive center-block visible-xs">--}}
            {{--</div>--}}
            {{--<div class="col-sm-5 col-sm-offset-4 col-xs-12 footer-text">--}}
                {{--<span>@2016太行盛国际文化传媒 版权所有</span><br> <span class="bottom-img-right">京ICP备--}}
						{{--1021503X号</span>--}}
            {{--</div>--}}
            {{--<div class=" col-sm-1 col-xs-12 back-to-top hidden-xs">--}}
                {{--<a href="#top"><img alt="" src="{{asset('/images/comeback.png')}}"></a>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}
<div class="container-fluid container-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-3 col-xs-12 footer-logo">
                <img alt="" src="../images/logo3.png" class="img-responsive center-block hidden-xs">
                <img alt="" src="../images/logo3.png" class="img-responsive center-block visible-xs">
            </div>
            <div class="col-sm-5 col-sm-offset-4 col-xs-12 footer-text">
                <span>@2016太行盛国际文化传媒 版权所有</span><br> <span class="bottom-img-right">京ICP备
						1021503X号</span>
            </div>
            <div class=" col-sm-1 col-xs-12 back-to-top hidden-xs">
                <a href="#top"><img alt="" src="http://www.thsmedia.com/images/comeback.png"></a>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
  var leftArrowOwl = '<img src="./images/left.png" width="40" height="40" alt="">'
  var rightArrowOwl = '<img src="./images/right.png" width="40" height="40" alt="">'

  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      margin: 10,
      loop: true,
      dots: false,
      nav: true,
      navText: [leftArrowOwl, rightArrowOwl],
      responsive: {
        '0': {
          items: 2,
          nav: false,
          loop: false
        },
        '992': {
          items: 4,
        }
      }
    })
  })

  $(function () {
    $('[data-toggle=\'popover\']').popover({
      content: function () {
        return '<img alt="" src="//ths.cdn.daxuefun.cn/images/wechat.jpg" class="img-thumbnail" width="90px" height="90px" >'
      }
    })
  })

</script>
@stack('scripts')
</body>