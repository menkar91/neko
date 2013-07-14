$(function(){
	/* close */
    $('.close').click(function(){
    	var id = $(this).parent().parent().parent().attr('id');
		$(this).parent().parent().parent().remove();
		$('#launcher-bar > #'+id).remove();
	});
    /* min */
    $('.min').click(function(){
    	$(this).parent().parent().parent().hide();
    	return false;
	});
    /* max-launcher */
    $('.launcher-bar').click(function(){
    	var thread = ".w"+$(this).attr('id');
    	$(thread).show();
    	return false;
	});

	/* draggable */
	$(".window > .content").resizable({
		handles: 'e, s, se',
		minHeight: 100,
		minWidth: 400
	});
	$(".window").draggable({
		handle: "header",
		containment: "parent",
		cursor: "move",
		opacity: 0.7,
		zIndex: 100,
		stack: ".window"
	});
	
});