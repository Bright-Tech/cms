<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
    <title>崇光科技</title>
    <link href="{{asset('/css/vendor.css')}}" rel="stylesheet">
    <link href="{{asset('/css/app.css')}}" rel="stylesheet">
    <style>
        html, body, #app {
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="app"></div>
    <script>
      window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        baseUrl: "{{ url('/')}}",
        imgBaseUrl: "{{$imgBaseUrl}}"
      };
    </script>
    <script src="{{asset('/js/manifest.js')}}"></script>
    <script src="{{asset('/js/vendor.js')}}"></script>
    <script src="{{asset('/js/app.js')}}"></script>
</body>

</html>