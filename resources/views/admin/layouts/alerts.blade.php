<div class="row">
    <div class="col-lg-12 error-alert-list">
        @if (count($errors->all()) > 0)
            <div class="alert alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4>错误</h4>
                请检查下面的错误
                @foreach ($errors->all() as $m)
                    <p>{{ $m }}</p>
                @endforeach
            </div>
        @endif
        @if ($message = Session::get('success'))
            <div class="alert alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4>成功</h4>
                @if(is_array($message))
                    @foreach ($message as $m)
                        <p>{{ $m }}</p>
                    @endforeach
                @else
                    {{ $message }}
                @endif
            </div>
        @endif

        @if ($message = Session::get('error'))
            <div class="alert alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4>错误</h4>
                @if(is_array($message))
                    @foreach ($message as $m)
                        <p>{{ $m }}</p>
                    @endforeach
                @else
                    {{ $message }}
                @endif
            </div>
        @endif

        @if ($message = Session::get('warning'))
            <div class="alert alert-warning alert-block">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4>注意</h4>
                @if(is_array($message))
                    @foreach ($message as $m)
                        <p>{{ $m }}</p>
                    @endforeach
                @else
                    {{ $message }}
                @endif
            </div>
        @endif

        @if ($message = Session::get('info'))
            <div class="alert alert-info alert-block">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4>提示</h4>
                @if(is_array($message))
                    @foreach ($message as $m)
                        <p>{{ $m }}</p>
                    @endforeach
                @else
                    {{ $message }}
                @endif
            </div>
        @endif
    </div>
</div>