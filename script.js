//$(document).ready(function(){
//	$(window).scroll(function(){
//		if(this.scrollY > 20){
//			$(".navbar").addClass("sticky");
//		}else{
//			$(".navbar").removeClass("sticky");
//		}
//	})
//});

$(window).scroll(function(){
	if($(this).scrollTop()>20){
		$('.navbar').addClass('fixed');
	}else{
		$('.navbar').removeClass('fixed');
	}
});

