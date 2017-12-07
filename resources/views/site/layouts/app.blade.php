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
                @foreach($appRepository->getNavigation() as $navigation)
                    <li>
                        @if($navigation['url'])
                            <a href="{{$navigation['url']}}" class="dropdown-toggle" data-toggle="dropdown"
                               data-hover="dropdown"
                               role="button"
                               aria-haspopup="true" aria-expanded="false"><span>{{$navigation['title']}}</span></a>
                        @else
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                               role="button"
                               aria-haspopup="true" aria-expanded="false"><span>{{$navigation['title']}}</span></a>
                        @endif
                        <ul class="list-group dropdown-menu">
                            @if(!empty($navigation['items']))
                                @foreach($navigation['items'] as $son)
                                    <li class="list-group-item text-center"><a
                                                href="{{$son['url']}}">{{$son['title']}}</a></li>
                                @endforeach
                            @endif
                        </ul>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>
<!--nav End-->
@yield('content')
<!-- footers-->

<div class="footers">
    <div class="container">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <img src="{{asset('/home/img/footer-logo.png')}}" alt=""/>
            <div class="company-detail">
                <p>Good morning !It is really my honor to have this opportunity for an interview,I hope i can make a
                    good performance today. Im confident that I can succeed.</p>
                　　 <p> was graduated from qingdao university.my major is electronic.and i got my bachelor degree after
                    my graduation in the year of 20xx.</p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-3  col-sm-offset-2">
            <div class="footers-title">
                <span>联系我们</span>
            </div>
            <div class="footers-info">
                <p class="footers-info-item ">天津市南开区智慧山E座312</p>
                <p class="footers-info-item ">Phone:23869779</p>
                {{--<p class="footers-info-item ">Fax:</p>--}}
                <p class="footers-info-item ">E-mail:bright-tech@163.com</p>
            </div>
        </div>
        <div class=" col-sm-1 col-xs-12 back-to-top hidden-xs">
            <a href="#top"><img alt="" src="{{asset('/images/comeback.png')}}"></a>
        </div>
    </div>
</div>
{{--<div class="share-bar">--}}
    {{--<div class="container text-center">--}}
        {{--<div class="col-xs-12">--}}
            {{--<span>2016&copy;<span class="text-style">天津崇光科技有限公司.</span></span>--}}
        {{--</div>--}}
        {{--<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-right">--}}
            {{--<span><a href=""><img src="img/WeChat.png" alt=""/></a></span>--}}
            {{--<span><a href=""><img src="img/tecent.png" alt=""/></a></span>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}
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