$(document).ready(function(){
		var flag=true;
		var n=0;
		var next=0;
		// var width=$('.slide-tp').width();
		function tu(){
			if(!flag){
				return false;
			}
			flag=false;
			next=n+1;
			if(next>=$('.slide-tp .tp').length){
				next=0;
			};
			$('.slide-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")

			$('.slide-tp .tp').eq(next).css("opacity",0).end().eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
				flag=true;
			});
			n=next;
		}
		var t=setInterval(tu,2000);
		$('.slide-tp').mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			t=setInterval(tu,2000);
		});
	    $('.slide-tp .bannerRight').click(function(){
	    	next=n-1;
	    	if(!flag){
				return false;
			}
			flag=false;
			if(next>=$('.slide-tp .tp').length){
				next=0;
			};
	    	$('.slide-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")
			$('.slide-tp .tp').eq(next).css("opacity",0).end().eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
				flag=true;
			});
			n=next;
	    })
	    $('.slide-tp .bannerLeft').click(function(){
	    	tu();
	    })
	   var index=$(".slide-tp .uls .lis").index();
	     $(".slide-tp .uls .lis").hover(function(){
	     	 var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".slide-tp .tp").eq(index).css("opacity",1)
			 $(".slide-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".slide-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
         		$(".slide-tp .tp").eq(index).css("opacity",1)
			 $(".slide-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".slide-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
         	 };
         	$(".slide-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
	    },function(){
	    	var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".slide-tp .tp").eq(index).css("opacity",1)
			 $(".slide-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".slide-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
         		$(".slide-tp .tp").eq(index).css("opacity",1)
			 $(".slide-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".slide-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
         	 };
         	$(".slide-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
	    })
})
jQuery.extend({
		lunbo:function(obj,img){
			obj.hover(function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			},function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			})
		}
})
$(document).ready(function(){
	$.lunbo($(".lis:nth-child(1) .nth div"),$(".slide-tp .tp:nth-child(1) img"))
	$.lunbo($(".lis:nth-child(2) .nth div"),$(".slide-tp .tp:nth-child(2) img"))
	$.lunbo($(".lis:nth-child(3) .nth div"),$(".slide-tp .tp:nth-child(3) img"))
	$.lunbo($(".lis:nth-child(4) .nth div"),$(".slide-tp .tp:nth-child(4) img"))
	$.lunbo($(".lis:nth-child(5) .nth div"),$(".slide-tp .tp:nth-child(5) img"))
	$.lunbo($(".lis:nth-child(6) .nth div"),$(".slide-tp .tp:nth-child(6) img"))
	$.lunbo($(".lis:nth-child(7) .nth div"),$(".slide-tp .tp:nth-child(7) img"))
	$.lunbo($(".lis:nth-child(8) .nth div"),$(".slide-tp .tp:nth-child(8) img"))
	$.lunbo($(".lis:nth-child(9) .nth div"),$(".slide-tp .tp:nth-child(9) img"))
	$.lunbo($(".lis:nth-child(10) .nth div"),$(".slide-tp .tp:nth-child(10) img"))
})
// 1f
$(document).ready(function(){
	var flag=true;
			var n=0;
			var next=0;
			var width=$(".f1 .block0").width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=$(".f1 .lunbotu").length){
					next=0;
				};
				$(".f1 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f1 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			$(".f1 .block0").mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2500);
			});
		    $(".f1 .phone-left").click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=o$(".f1 .lunbotu").length){
					next=0;
				};
		    	$(".f1 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f1 .lunbotu").eq(next).css("opacity",0).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    $(".f1 .phone-right").click(function(){
		    	tu();
		    })
		     var index=$(".f1 .fangkuai").index();
		     $(".f1 .fangkuai").click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 $(".f1 .lunbotu").eq(index).css("opacity",0)
				 $(".f1 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f1 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         	 $(".f1 .lunbotu").eq(index).css("opacity",0)
				 $(".f1 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f1 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	$(".f1 .fangkuai").removeClass("fangkuai-first").eq(index).addClass("fangkuai-first")
	         n=index;
	         next=index;
		     })
})
$(document).ready(function(){
	var flag=true;
			var n=0;
			var next=0;
			var width=$(".f2 .block0").width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=$(".f2 .lunbotu").length){
					next=0;
				};
				$(".f2 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f2 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			$(".f2 .block0").mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2500);
			});
		    $(".f2 .phone-left").click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=$(".f2 .lunbotu").length){
					next=0;
				};
		    	$(".f2 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f2 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    $(".f2 .phone-right").click(function(){
		    	tu();
		    })
		     var index=$(".f2 .fangkuai").index();
		     $(".f2 .fangkuai").click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 $(".f2 .lunbotu").eq(index).css("opacity",1)
				 $(".f2 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f2 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         	 $(".f2 .lunbotu").eq(index).css("opacity",1)
				 $(".f2 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f2 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	$(".f2 .fangkuai").removeClass("fangkuai-first").eq(index).addClass("fangkuai-first")
	         n=index;
	         next=index;
		     })
})	
$(document).ready(function(){
	var flag=true;
			var n=0;
			var next=0;
			var width=$(".f3 .block0").width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=$(".f3 .lunbotu").length){
					next=0;
				};
				$(".f3 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f3 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			$(".f3 .block0").mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2500);
			});
		    $(".f3 .phone-left").click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=$(".f3 .lunbotu").length){
					next=0;
				};
		    	$(".f3 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f3 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    $(".f3 .phone-right").click(function(){
		    	tu();
		    })
		     var index=$(".f3 .fangkuai").index();
		     $(".f3 .fangkuai").click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 $(".f3 .lunbotu").eq(index).css("opacity",1)
				 $(".f3 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f3 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         	 $(".f3 .lunbotu").eq(index).css("opacity",1)
				 $(".f3 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f3 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	$(".f3 .fangkuai").removeClass("fangkuai-first").eq(index).addClass("fangkuai-first")
	         n=index;
	         next=index;
		     })
})
$(document).ready(function(){
	var flag=true;
			var n=0;
			var next=0;
			var width=$(".f4 .block0").width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=$(".f4 .lunbotu").length){
					next=0;
				};
				$(".f4 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f4 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			$(".f4 .block0").mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2500);
			});
		    $(".f4 .phone-left").click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=$(".f4 .lunbotu").length){
					next=0;
				};
		    	$(".f4 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f4 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    $(".f4 .phone-right").click(function(){
		    	tu();
		    })
		     var index=$(".f4 .fangkuai").index();
		     $(".f4 .fangkuai").click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 $(".f4 .lunbotu").eq(index).css("opacity",1)
				 $(".f4 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f4 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         	 $(".f4 .lunbotu").eq(index).css("opacity",1)
				 $(".f4 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f4 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	$(".f4 .fangkuai").removeClass("fangkuai-first").eq(index).addClass("fangkuai-first")
	         n=index;
	         next=index;
		     })
})	
		//	5f	 
		$(document).ready(function(){
	var flag=true;
			var n=0;
			var next=0;
			var width=$(".f5 .block0").width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=$(".f5 .lunbotu").length){
					next=0;
				};
				$(".f5 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f5 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			$(".f5 .block0").mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2500);
			});
		    $(".f5 .phone-left").click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=$(".f5 .lunbotu").length){
					next=0;
				};
		    	$(".f5 .fangkuai").removeClass("fangkuai-first").eq(next).addClass("fangkuai-first")
				$(".f5 .lunbotu").eq(next).css("opacity",1).end().eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    $(".f5 .phone-right").click(function(){
		    	tu();
		    })
		     var index=$(".f5 .fangkuai").index();
		     $(".f5 .fangkuai").click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 $(".f5 .lunbotu").eq(index).css("opacity",1)
				 $(".f5 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f5 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         	 $(".f5 .lunbotu").eq(index).css("opacity",1)
				 $(".f5 .lunbotu").eq(n).animate({opacity:0},1000);
				 $(".f5 .lunbotu").eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	$(".f5 .fangkuai").removeClass("fangkuai-first").eq(index).addClass("fangkuai-first")
	         n=index;
	         next=index;
		     })
})		
// 楼层选项卡
$(document).ready(function(){
	$(".f1 .tab .tab-item").mouseover(function(){
		var index=$(this).index();
		$(".f1 .main .p-list").css("display","none").eq(index).css("display","block");
		$(".f1 .tab .tab-item a").css({"background":"#fff","color":"#000"}).eq(index).css({"background":"#535353","color":"#fff"})
	})
	var n1=0;
	var next1=0;
	$("#floor-right-btn",".f1").click(function(){
		next1=n1+1;
		if(next1>=$(".p-list",".f1").length){
			next1=0;
		}
		$(".p-list",".f1").eq(n1).hide().end().eq(next1).show();
		$(".f1 .tab-item a").eq(n1).css({"background":"#fff","color":"#000"}).end().eq(next1).css({"background":"#535353","color":"#fff"})
		n1=next1;
	})
})
$(document).ready(function(){
	$(".f2 .tab .tab-item").mouseover(function(){
		var index=$(this).index();
		$(".f2 .main .p-list").css("display","none").eq(index).css("display","block");
		$(".f2 .tab .tab-item a").css({"background":"#fff","color":"#000"}).eq(index).css({"background":"#535353","color":"#fff"})
	})
	var n2=0;
	var next2=0;
	$("#floor-right-btn",".f2").click(function(){
		next2=n2+1;
		if(next2>=$(".p-list",".f2").length){
			next2=0;
		}
		$(".p-list",".f2").eq(n2).hide().end().eq(next2).show();
		$(".f2 .tab-item a").eq(n2).css({"background":"#fff","color":"#000"}).end().eq(next2).css({"background":"#535353","color":"#fff"})
		n2=next2;
	})
})
$(document).ready(function(){
	$(".f3 .tab .tab-item").mouseover(function(){
		var index=$(this).index();
		$(".f3 .main .p-list").css("display","none").eq(index).css("display","block");
		$(".f3 .tab .tab-item a").css({"background":"#fff","color":"#000"}).eq(index).css({"background":"#535353","color":"#fff"})
	})
	var n3=0;
	var next3=0;
	$("#floor-right-btn",".f3").click(function(){
		next3=n3+1;
		if(next3>=$(".p-list",".f3").length){
			next3=0;
		}
		$(".p-list",".f3").eq(n3).hide().end().eq(next3).show();
		$(".f3 .tab-item a").eq(n3).css({"background":"#fff","color":"#000"}).end().eq(next3).css({"background":"#535353","color":"#fff"})
		n3=next3;
	})
})
$(document).ready(function(){
	$(".f4 .tab .tab-item").mouseover(function(){
		var index=$(this).index();
		$(".f4 .main .p-list").css("display","none").eq(index).css("display","block");
		$(".f4 .tab .tab-item a").css({"background":"#fff","color":"#000"}).eq(index).css({"background":"#535353","color":"#fff"})
	})
	var n4=0;
	var next4=0;
	$("#floor-right-btn",".f4").click(function(){
		next4=n4+1;
		if(next4>=$(".p-list",".f4").length){
			next4=0;
		}
		$(".p-list",".f4").eq(n4).hide().end().eq(next4).show();
		$(".f4 .tab-item a").eq(n4).css({"background":"#fff","color":"#000"}).end().eq(next4).css({"background":"#535353","color":"#fff"})
		n2=next2;
	})
})
$(document).ready(function(){
	$(".f5 .tab .tab-item").mouseover(function(){
		var index=$(this).index();
		$(".f5 .main .p-list").css("display","none").eq(index).css("display","block");
		$(".f5 .tab .tab-item a").css({"background":"#fff","color":"#000"}).eq(index).css({"background":"#535353","color":"#fff"})
	})
	var n5=0;
	var next5=0;
	$("#floor-right-btn",".f5").click(function(){
		next5=n5+1;
		if(next5>=$(".p-list",".f5").length){
			next5=0;
		}
		$(".p-list",".f5").eq(n5).hide().end().eq(next5).show();
		$(".f5 .tab-item a").eq(n5).css({"background":"#fff","color":"#000"}).end().eq(next5).css({"background":"#535353","color":"#fff"})
		n2=next2;
	})
})
	


// 国美会员
$(document).ready(function(){
	var n=0;
	var next=0;
	var width=$(".icon-content").width();
	$(".user-icon-next").click(function(){
		next=n+1;
		if(next>=$(".icon-content").length){
			next=0;
		}
		$(".icon-content").eq(next).css("left",width).end().eq(n).animate({left:-width},500).end().eq(next).animate({left:0},500);
		  n=next;
	})
	$(".user-icon-prev").click(function(){
		next=n-1;
		if(next<0){
			next=$(".icon-content").length-1;
		}
		$(".icon-content ").eq(next).css("left",-width).end().eq(n).animate({left:width},500).end().eq(next).animate({left:0},500);
		 n=next;
	})
})
// 特价区
$(document).ready(function(){
	var n=0;
	var next=0;
	var height=$(".hd-clickscroll").height();
	var t1=setInterval(movers,1500);
	function movers(){
		next=n-1;
		if(next<0){
			next=$(".hd-clickscroll").length-1;
		}
		$(".hd-clickscroll").eq(next).css("top",-height).end().eq(n).animate({top:height},500).end().eq(next).animate({top:0},500);
		 n=next;
	}
	$(".j-hdrbtn-down").click(function(){
		next=n+1;
		if(next>=$(".hd-clickscroll").length){
			next=0;
		}
		$(".hd-clickscroll").eq(next).css("top",height).end().eq(n).animate({top:-height},500).end().eq(next).animate({top:0},500);
		  n=next;
	})
	$(".j-hdrbtn-up").click(function(){
		next=n-1;
		if(next<0){
			next=$(".hd-clickscroll").length-1;
		}
		$(".hd-clickscroll").eq(next).css("top",-height).end().eq(n).animate({top:height},500).end().eq(next).animate({top:0},500);
		 n=next;
	})
})
$(document).ready(function(){
	
	//导航出现消失
	$(window).scroll(function(){
		if($(window).scrollTop()>=$('.f1').offset().top-380){
			$('.elevator').show()
		}else{
			$('.elevator').hide()
		}
		if($(window).scrollTop()>=$('.floor-one').last().offset().top+200){
			$('.elevator').hide()
		}	
		//出现对应的效果
		$('.floor-one').each(function(z){
			if($(window).scrollTop()>=$('.floor-one').eq(z).offset().top-200){
				$('.handler').each(function(x){
					$('.handler span').eq(x).css("color","#777")
					$('.handler p').eq(x).css("color","#777")
				})
				$('.handler span').eq(z).css("color","red")
				$('.handler p').eq(z).css("color","red")
			}
		})
		//点击回到对应的楼层
		$('.handler').each(function(){	
			$('.handler').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.floor-one').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.floor-one').eq(index).offset().top})
			})
		})
		
	})	
	//back
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.message-4').css("display","block")
		}else{
			$('.message-4').css("display","none")
		}
	})
	$('.message-4').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.back-top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.back-bottom').click(function(){
		$('body,html').animate({scrollTop:6000},1000);
	})
	//close
	$('.close').click(function(){
		$('.dh-gg').hide()
	})
	
})
//	猜你喜欢
$(document).ready(function(){
	var next3=0;
	var n3=0;
	jQuery(".change-btn").on("click",function(){
		next3=n3+1;
			if(next3>=jQuery(".like").length){
				next3=0;
			}
			jQuery(".like").eq(n3).css("display","block");
			jQuery(".like").eq(next3).css("display","none");
		n3=next3;
	})
})
	