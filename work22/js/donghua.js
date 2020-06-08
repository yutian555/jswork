	$(window).scroll(function(){
					var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
					var backTop = $(".bg_center").offset().top - $(window).height();
					var backbottom = $(".float-left").offset().top - $(window).height();
					if(scrollT > backTop){
						$(".zhong").addClass("animate__animated animate__backInRight on").removeClass("off");
						$(".jijie").addClass("animate__animated animate__backInRight on").removeClass("off");
					}
						
					if(scrollT > backbottom){
						$(".float-left").addClass("animate__animated animate__backInRight on").removeClass("off");
					}
				});
