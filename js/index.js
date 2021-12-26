// 슬라이드 페이징할 때 사용할 변수
var $slideNum = 1;

// 슬라이드 실행
function slide()
{
    var $this = $(this);
    var $btnSlide = $this.closest('.btn-slide');
    var NowAnimating = $btnSlide.attr('data-now-animating');
    var $btnLeft = $this.index() == 0;
    var $slider = $this.closest('.slider');
    var $slides = $slider.find('> .slides > div');
    var $activeSlide = $slider.find('> .slides > div.active');
    var $activePost;
    var $slideNum = 0;

    if (NowAnimating == 'Y') 
    {
        return;
    }

    $slides.removeClass('rm-active');

    if ($btnLeft) 
    {
        slide_left($slides,$activeSlide);
    }
    else
    {   
        slide_right($slides,$activeSlide);s
    }

    $btnSlide.attr('data-now-animating','Y');
    setTimeout(function()
    {
        $btnSlide.attr('data-now-animating','N');
    }, 1000);
}

// 3초마다 슬라이드 실행 시 사용할 함수
function slide_2()
{
    var $this = $('.btn-slide > div:last-child');
    var $btnSlide = $this.closest('.btn-slide');
    var NowAnimating = $btnSlide.attr('data-now-animating');
    var $btnLeft = $this.index() == 0;
    var $slider = $this.closest('.slider');
    var $slides = $slider.find('> .slides > div');
    var $activeSlide = $slider.find('> .slides > div.active');
    var $activePost;

    if (NowAnimating == 'Y') 
    {
        return;
    }

    $slides.removeClass('rm-active');

    if ($btnLeft) 
    {
        slide_left($slides,$activeSlide);
    }
    else
    {
        slide_right($slides,$activeSlide);
    }

    $btnSlide.attr('data-now-animating','Y');
    setTimeout(function()
    {
        $btnSlide.attr('data-now-animating','N');
    }, 1000);
}

// 이전 버튼 클릭 시
function slide_left($slides,$activeSlide)
{
    $slides.removeClass('right-set');
    $activePost = $activeSlide.prev();
    
    if ($activePost.length == 0) 
    {
        $activePost = $('.slider > .slides > div:last-child');
    }
    
    $slides.not('active').addClass('left-set');

    $activeSlide.addClass('rm-active');
    $activeSlide.removeClass('left-set');
    $activeSlide.addClass('right-set');
    $activeSlide.removeClass('active');
    $activePost.addClass('active');
    $activePost.removeClass('left-set');

    // 슬라이드 페이징
    $slideNum --;
    if ($slideNum < 1)
    {
        $slideNum = 3;
    }
    $('.slide_page').removeClass('fas');
    $('.slide_page').removeClass('far').addClass('far');
    $('.slide_page').eq($slideNum).removeClass('far').stop().addClass('fas');
}

// 다음 버튼 클릭 시
function slide_right($slides,$activeSlide)
{
    $slides.removeClass('left-set');
    $activePost = $activeSlide.next();
    if ($activePost.length == 0)
    {
        $activePost = $('.slider > .slides > div:first-child');
    }
    $slides.not('active').addClass('right-set');
    
    $activeSlide.addClass('rm-active');
    $activeSlide.removeClass('right-set');
    $activeSlide.addClass('left-set');
    $activeSlide.removeClass('active');
    $activePost.addClass('active');
    $activePost.removeClass('right-set');

    // 슬라이드 페이징
    $slideNum ++;
    if ($slideNum > 3)
    {
        $slideNum = 1;
    }
    $('.slide_page').removeClass('fas');
    $('.slide_page').removeClass('far').addClass('far');
    $('.slide_page').eq($slideNum).removeClass('far').stop().addClass('fas');
}


function slide_init()
{
    $('.slider > .btn-slide > div').click(slide);

    setInterval(function()
    {
        slide_2();
    },4500);
}

// 문서 로딩 다 되면 실행
$(function()
{
    slide_init();
    AOS.init({easing: 'ease-out-back'});
});



