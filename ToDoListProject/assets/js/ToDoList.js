$("ul").on("click","li",function(){
	$(this).toggleClass("strike")
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();	
})
$("input[type=text]").keypress(function(event){
	if(event.which===13)
	{
		var txt=$(this).val();
	$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> "+txt+" </li>");
	}
})
$(".fas").on("click",function(){
    $("input").fadeToggle(400,function(){})
})