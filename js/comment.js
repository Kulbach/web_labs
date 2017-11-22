$(document).ready(function (){
	s = localStorage;
	if (s.getItem('comment1')) {
		for (var i = 0; i < s.length; i++) {
				key = s.key(i);
				if(~key.indexOf("comment")){
							id = key.substr(7);
							comment = s.getItem("comment" +id);
							var date = new Date();
							$("#comments").prepend("<div class='container bod'><h2>Вася Пупкін  <time>" + date.getDate() + "." + (date.getMonth()+1) +"." + date.getFullYear() + "</time></h2>"  + comment + "</div>");
	}
}}

window.addEventListener('online', function(e) {
	k = false; 
	for (var i = 0; i < s.length; i++) {
				key = s.key(i);
				if(~key.indexOf("comment")){
					k = true;
				}
			}
				if(k){
					alert("Відправляю дані с LS на север");}
				
});

	$(document).on("click", "#add_comment", function (){
		if($("#comment").val()!=""){
			var comment = $("#comment").val();
			var date = new Date();
		if(navigator.onLine){
			alert("Відправляю на сервер і читаю з сервера");
			$("#comments").prepend("<div class='container bod'><h2>Вася Пупкін  <time>" + date.getDate() + "." + (date.getMonth()+1) +"." + date.getFullYear() + "</time></h2>"  + comment + "</div>");
		}
		else{
			n =0;
					for (var i = 0; i < s.length; i++) {
						key = s.key(i);
							if(~key.indexOf("comment")){
								n++;
							}
					}
				localStorage.setItem("comment"+(n+1), comment);
				$("#comments").prepend("<div class='container bod'><h2>Вася Пупкін  <time>" + date.getDate() + "." + (date.getMonth()+1) +"." + date.getFullYear() + "</time></h2>"  + comment + "</div>");
		}
		$("#comment").val("");
		}
	});
	
});