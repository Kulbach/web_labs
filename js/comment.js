$(document).ready(function (){
	$(document).on("click", "#add_comment", function (){
		if($("#comment").val()!=""){
			var comment = $("#comment").val();
			var date = new Date();
			$("#comments").prepend("<div class='container bod'><h2>Вася Пупкін  <time>" + date.getDate() + "." + (date.getMonth()+1) +"." + date.getFullYear() + "</time></h2>"  + comment + "</div>")
			$("#comment").val("");}}
	});
	
});