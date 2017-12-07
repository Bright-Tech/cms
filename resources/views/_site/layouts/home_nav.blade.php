@inject('appRepository', 'App\Repositories\AppRepository')
<div class="navbar navbar-default navbar-ths-dark" role="navigation" id="top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{url('/')}}">
                @if($isHome)
                    <img alt="" src="{{asset('/images/logo.png')}}" class="img-responsive hidden-xs">
                @else
                    <img alt="" src="{{asset('/images/logo-dark.png')}}" class="img-responsive hidden-xs">
                @endif
            </a>

        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {{--<ul class="nav nav-pills pull-right">--}}
            <ul class="nav navbar-nav navbar-right">
                <li><a href="//en.thsmedia.com">English</a></li>
            </ul>
            <form class="navbar-form navbar-right hidden-xs " role="search">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="">
                    <button type="submit" class="button-feedback" style="top: 0;">
                        <img alt="" src="{{asset('/images/search2.png')}}" height="16px">
                    </button>
                </div>
            </form>
            <ul class="nav navbar-nav navbar-right" id="navl">
                @foreach($appRepository->getNavigation() as $navigation)
                    <li class="dropdown">
                        @if( empty($navigation['items']))
                            <a href="{{isset($navigation['url']) ? url($navigation['url']):'#'}}">
                                {{$navigation['label']}}
                            </a>
                        @else
                            <a href="{{$navigation['url']}}" class="dropdown-toggle" data-toggle="dropdown">
                                {{$navigation['label']}}
                                <ul class="dropdown-menu">
                                    @foreach($navigation['items'] as $item)
                                        <li>
                                            <a href="{{ url($item['url']) }}"
                                               tabindex="-1">{{$item['label']}}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </a>
                        @endif


                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>