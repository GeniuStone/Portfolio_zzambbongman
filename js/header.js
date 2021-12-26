$(window).on('scroll',function(){ 
    if($(window).scrollTop()){ 
        $('#header').addClass('active');
        $('.main_logo').attr('src','images/real_logo.png')
        $(header).on('mouseleave',function(){
            $('.main_logo').attr('src','images/real_logo.png')
        });
    }else{ 
        $('#header').removeClass('active'); 
        $('.main_logo').attr('src','images/real_logo_white.png')
        $(header).on('mouseleave',function(){
            $('.main_logo').attr('src','images/real_logo_white.png')
        });
    } 
});
// 스크롤 반응 메인메뉴 제어

$(header).on('mouseover',function()
{
    $('.main_logo').attr('src','images/real_logo.png')
});
$(header).on('mouseleave',function()
{
    $('.main_logo').attr('src','images/real_logo_white.png')
});
// 마우스 올라갈 시 로고 제어

$('.mm_list').on('mouseover',function(){
    $(this).children('ul').stop().slideDown(250);
});
$('.mm_list').on('mouseleave',function(){
    $(this).children('ul').stop().slideUp(100);
});
// 서브메뉴 제어

$('.admin_mm_list').on('mouseover',function(){
    $(this).children('ul').stop().slideDown(250);
});
$('.admin_mm_list').on('mouseleave',function(){
    $(this).children('ul').stop().slideUp(100);
});
// 서브메뉴 제어 (관리자 페이지)