<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>DMS-@yield('title')</title>

    <link href="{{asset('/css/admin-vendor.css')}}" rel="stylesheet">
    <link href="{{asset('/css/admin.css')}}" rel="stylesheet">


</head>
<body class="fixed-sidebar fixed-nav fixed-nav-basic">
<div id="wrapper">
    @include('admin.layouts.sidebar')

    <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
            <nav class="navbar navbar-fixed-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i>
                    </a>

                </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <a href="{{ url('/admin/logout') }}"
                           onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>

                        <form id="logout-form" action="{{ url('/admin/logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>
                </ul>

            </nav>
        </div>

        @include('admin.layouts.breadcrumb')

        <div class="wrapper wrapper-content animated fadeInRight">
            @include('admin.layouts.alerts')
            @yield('content')
        </div>

        <script>
            window.Laravel = {
                csrfToken: "{{ csrf_token() }}",
                baseUrl: "{{ url('/')}}",
                apiToken: "{{ auth()->user()->api_token }}"
            };
        </script>
        <script src="{{asset('/js/manifest.js')}}"></script>
        <script src="{{asset('/js/vendor.js')}}"></script>
        <script src="{{asset('/js/app.js')}}"></script>

        @stack('script')


        <div class="footer fixed">
            <div>
                <strong>Copyright</strong> 天津崇光科技有限公司 &copy; 2014-2017
            </div>
        </div>

    </div>
</div>


</body>

</html>
