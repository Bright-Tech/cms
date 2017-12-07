<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>INSPINIA | 503 Error</title>

    <link href="{{asset('/css/app.css')}}" rel="stylesheet">

</head>

<body class="gray-bg">


<div class="middle-box text-center animated fadeInDown" style="max-width: 600px">
    <h1>Coming Soon</h1>
    <h3 class="font-bold red">网站维护中，请稍后再试</h3>

    <div class="error-desc">
        {{ $exception->getMessage() }}
    </div>
</div>

<!-- Mainly scripts -->
<script src="{{asset('/js/manifest.js')}}"></script>
<script src="{{asset('/js/vendor.js')}}"></script>
<script src="{{asset('/js/app.js')}}"></script>

</body>

</html>
