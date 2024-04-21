
let url = window.location.href

$('.gnb > li > a').each(function(){
    let gnbHref = $(this).attr('href')

    if(url.indexOf(gnbHref) > -1){
        $(this).parent('li').addClass('on');
            
        let lnbHtml = $(this).siblings('.lnb').html()
        $('.lnb_box').html(lnbHtml);

        let gnbText = $(this).text();

        let gnbHtml = '<li><a href="'+gnbHref+'">'+gnbText+'</li>'
            gnbHtml += $('.gnb').html();
        
        $('.gnb_box').html(gnbHtml);
        $('.gnb_box .lnb').remove()
        

    };

})

$('.hamburger').click(function(){
    $(this).toggleClass('on')
    $('nav').fadeToggle();
})

if($(window).width() < 640){
    $('.gnb > li > a').attr('href','javascript:void(0)');
    $('.gnb > li').mouseenter(function(){
        $(this).find('.lnb').slideDown();
    })
    $('.gnb > li').mouseleave(function(){
        $(this).find('.lnb').slideUp();
    })
}

