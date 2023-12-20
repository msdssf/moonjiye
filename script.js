$(".btns>li").click(function(){
 $(this).addClass("active");
 $(this).siblings().removeClass("active")
/*필터기능 */
let a=$(this).attr('data-filter')
$(".contents").isotope({filter:a})
})

const grid=new Isotope(".contents",{
 itemSelector:'.conbox',
 columnWidth:'.conbox',
 transition:'0.5s'

})

setTimeout(function(){$(".contents").Isotope('layout')},100)


$(".fancybox").fancybox();