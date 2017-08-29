$(function(){
		function cot(){
		var oLi = $(".doctor li");
		var oImg = $(".docimg li");
		oLi.mouseenter(function(){
			var i=$(this).index();
			console.log(i)
			$(this).addClass('ac').siblings().removeClass('ac')			
			oImg.eq(i).show().siblings().hide();	
		})
	};
	
	cot();
		
})
	

	

