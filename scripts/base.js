$(function(){
	/* show Menu */
	$("#function-menu").click(function(){
		$(document).ready(showMenuApp);
		$("#search").focus();
		return false;
	});	

	/* hide Menu */	
	$('.show-menu').click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$('#desktop-wrapper > .show-menu')
			$(document).ready(hideAll);
   	    	return false;
	});
	/* detected key ESC=27 and hide menu */
	$(document).keyup(function(key){
   		if (key.keyCode == 27) { 
   	    	$(document).ready(hideAll);
   	    	$("#search").blur();
   	    	return false;
   		}
	});

	/* search - key bakescape=8 */
	$("#search").focus(function(){
		$(document).keyup(function(key){
	    	if($("#search").val().length != 0) {
	    		$("#clear-search").addClass("active");
	    	}
			if($("#search").val().length == 0) {
    			$("#clear-search").removeClass("active");
	    	}
		});
	});
	/* clear-search */
	$("#clear-search").click(function(){
		$("#search").val("");
		$("#search").focus();
		$("#clear-search").removeClass("active");
		return false;
	});

	/* launcher */
	$(".launcher").click(function(e){
		$(document).ready(hideAll);
		var thread = Math.floor(Math.random() * (9999 - 99 + 1)) + 99;
		var rel = $(this).attr("rel");
		var name = $(this).attr("name");
		var jsURL = '<script type="text/javascript" src="scripts/thread.js"></script>';
		var jIcon = '<a id="'+thread+'" rel="'+rel+'" class="launcher-bar" href="#">'+name+'</a>';
		var jWindow = '<div id="'+thread+'" rel="'+rel+'" class="window w'+thread+'"><header><p class="title">'+name+'</p><div class="option"><a class="min" href="#">_</a><a class="max" href="#">O</a><a class="close" href="#">x</a></div></header><div class="content"></div></div>';
		$("#launcher-bar").append(jIcon);
		$("#desktop").append(jWindow);
		$("#desktop").append(jsURL);
		return false;
	});

	/* get date time */
	$.fn.clock = function(o) {
    	var d = {x:'time-capa',ma:new Date(),i:0};
	    var o = $.extend(d, o);
	    o.ma = new Date(o.ma);
	    
	    var mHF = function (){
	      var ma = new Date(o.ma.getTime() + o.i * 1000);
	      
	      year = ma.getFullYear();
	      month = (ma.getMonth()+1);
	      day = ma.getDate();
	      h = ma.getHours();
	      m = ma.getMinutes();
	      s = ma.getSeconds();
	      me = '';
	      
	      if (h<12) me = 'am';
	      if (h>=12) me = 'pm';

	      if (month<=9) month = '0'+month;
	      if (day<=9) day = '0'+day;
	      if (h<=9) h = '0'+h;
	      if (m<=9) m = '0'+m;
	      if (s<=9) s = '0'+s;

	      hi = day+"/"+month+"/"+year+" "+h+":"+m+" "+me;

	      $('#'+o.x).html(hi); 
	      o.i += 1;   
	    }
	    return this.each(function(){
	      o.x = $(this).attr('id');
	      setInterval(mHF,1000);     
	    });
	};
	
	/* Menu Context */
	$(document).ready(function(){
		$(document).bind("contextmenu",function(e){
			return false;
		});
	});

});

function showMenuApp(){
    $(".menu-app").show("blind", { direction: "horizontal" }, 250);
}
function hideAll(){
    $(".show-menu").hide("blind", { direction: "horizontal" }, 250);
}