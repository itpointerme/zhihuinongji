// JavaScript Document
$(".nav_right").mouseenter(function(){
	var a = $(".nav");
	a.css("left");
	if(a.css("left") === '-250px'){
		a.css("left",0);
		$(".nav").addClass("nav_sha");
	}
});
$(".nav").mouseleave(function(){
	var a = $(this);
	a.css("left");
	if(a.css("left") === '0px'){
		a.css("left","-250px");
		a.removeClass("nav_sha");
	}
});