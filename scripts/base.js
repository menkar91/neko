$(function(){
	/* show Menu */
	$("#function-menu").click(function(){
		$(document).ready(showMenuApp);
		return false;
	});	

	/* hide Menu */	
	$(".hide").click(function(){
		$(document).ready(hideAll);
		return false;
	});
	$('.show-menu').click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$('#desktop > .show-menu')
			$(document).ready(hideAll);
   	    	return false;
	});
	/* detected key ESC=27 and hide menu */
	$(document).keydown(function(tecla){
   		if (tecla.keyCode == 27) { 
   	    	$(document).ready(hideAll);
   	    	return false;
   		}
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

});

function showMenuApp(){
    $(".menu-app").show("blind", { direction: "horizontal" }, 250);
}
function hideAll(){
    $(".show-menu").hide("blind", { direction: "horizontal" }, 250);
}