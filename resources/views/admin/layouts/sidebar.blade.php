<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <div class="pull-left" style="margin-right: 10%">
                            <img src="{{asset('images/portrait.png')}}" class="img-circle"
                                 style="max-width: 45px; height: auto;"
                                 alt="User Image">
                        </div>
                        <span class="clear"> <span class="block m-t-xs"> <strong
                                        class="font-bold">{{ Auth::user()->name }}</strong>
                             </span> <small class="text-muted text-xs block"><i class="fa fa-circle text-success"></i> Online</small> </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li>
                            <a href="{{ url('/logout') }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                <i class="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                        <li>
                            <a href="{{ url('/admin/personal/update',['id'=>Auth::user()->id]) }}"
                               onclick="document.getElementById('logout-form').submit();">
                                <span class="glyphicon glyphicon-user" aria-hidden="true"></span> 个人中心
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="logo-element">
                    <div class="dropdown ">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            Bright
                        </a>
                        <ul class="dropdown-menu animated fadeInRight">
                            <li class="text-danger">
                                <a href="{{ url('/logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form-web').submit();">
                                    <i class="fa fa-sign-out"></i> Log out
                                </a>

                                <form id="logout-form-web" action="{{ url('/logout') }}" method="POST"
                                      style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>

            </li>

            <li class="{{ Request::is('/') ? 'active' : '' }}">
                <a href="{{ url('/') }}">
                    <i class="fa fa-dashboard"></i>
                    <span class="nav-label"> 控制台 </span>
                </a>
            </li>
            <li class="{{ Request::is('/') ? 'active' : '' }}">
                <a href="{{ url('/admin/navigation') }}">
                    <i class="fa fa-th-large"></i>
                    <span class="nav-label"> 导航 </span>
                </a>
            </li>
            <li>
                <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">内容</span> <span
                            class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li class="{{ Request::is('staff') ? 'active' : '' }}">
                        <a href="{{ url('/admin/content-blog/') }}">
                            <i class="fa fa-group"></i>
                            <span class="nav-label"> 文章 </span>
                        </a>
                    </li>
                    <li class="{{ Request::is('department') ? 'active' : '' }}">
                        <a href="{{ url('/admin/content-picture') }}">
                            <i class="fa fa-home"></i>
                            <span class="nav-label"> 图片 </span>
                        </a>
                    </li>


                </ul>
            </li>
            <li class="{{ Request::is('/') ? 'active' : '' }}">
                <a href="{{ url('admin/assets/') }}">
                    <i class="fa fa-th-large"></i>
                    <span class="nav-label"> 素材 </span>
                </a>
            </li>
            @if(Auth::user()->can('edit-user'))
                <li>
                    <a href="index.html"><i class="fa fa-cogs"></i> <span class="nav-label">设置</span> <span
                                class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li class="{{ Request::is('user') ? 'active' : '' }}">
                            <a href="{{ url('/admin/category') }}">
                                <i class="fa fa-bars"></i>
                                <span class="nav-label"> 分类 </span>
                            </a>
                        </li>

                        <li class="{{ Request::is('user') ? 'active' : '' }}">
                            <a href="{{ url('/admin/options') }}">
                                <i class="fa fa-cog"></i>
                                <span class="nav-label"> 网站设置 </span>
                            </a>
                        </li>

                        <li class="{{ Request::is('user') ? 'active' : '' }}">
                            <a href="{{ url('/admin/property') }}">
                                <i class="fa fa-archive"></i>
                                <span class="nav-label"> 系统参数 </span>
                            </a>
                        </li>

                        <li class="{{ Request::is('user') ? 'active' : '' }}">
                            <a href="{{ url('/admin/admin') }}">
                                <i class="fa fa-users"></i>
                                <span class="nav-label"> 管理员 </span>
                            </a>
                        </li>

                    </ul>
                </li>
            @endif
        </ul>

    </div>
</nav>

