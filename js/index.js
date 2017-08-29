	var i=0;
	$('.bin_left').click(function(){
		
		 if(0<i<=2){
			i=i-2
		}else{
			i=i
		}
//		console.log(i)
	})
	$('.bin_right').click(function(){
		i=i;
		
//		console.log(i)
	})
	timer;
	var timer=setInterval(function(){
		if(i>=$('.tab_img img').length){
			i=0
		}else if(i<0){
			i=$('.tab_img img').length-1
		}
		$('.tab_img img').eq(i).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		i++;
		
		
		console.log(i)
	},2000)

