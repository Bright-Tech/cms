/**
 * Created by Brigth-Tech-PC-001 on 2017/4/27.
 */

// console.log(window.location.pathname);
var path = window.location.pathname;
$(document).ready(function(){
    if(path=='/bright-cms/public/'){
        // console.log('1')
        $('.container-footer-messages').css('display','none');
        $('#top').addClass("navbar navbar-default navbar-ths-dark").removeClass("navbar-ths-light");
    }else{
        // console.log('2')
        $('.visible-xs').removeClass("visible-xs");
        $('.hidden-xs').addClass("visible-xs");
        $('#top').addClass("navbar navbar-default navbar-ths-light").removeClass("navbar-ths-dark");
    }
    if($('#navl>.dropdown')){

    }
})
// alert(1);
// $('#accordion').on('click','.panel-heading',function(){
//     console.log(this);
// })
// $('.panel-heading').on('click',function(){
//     console.log(this);
// })
console.log();