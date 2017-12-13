$(document).ready(function (){
	s = localStorage;

rev = new CN(); 

window.addEventListener('online', function(e) {
				alert("Відправляю дані с LS на север");
				readReview();
			
});	

$(document).on("click", "#add_comment", function (){
		if($("#comment").val()!=""){
			var date = new Date();
			var comment = $("#comment").val();
			var time = date.getDate() + "." + (date.getMonth()+1) +"." + date.getFullYear();
			var out = document.createElement('div');
			out.id = 'review';
			var review = {
				message: comment,
				when: time
			};
			out.innerHTML = "<div class='container bod'><h2>Вася Пупкін  <time>" + 
			review.when + "</time></h2>"  + 
			review.message + "</div>";
			var obj= JSON.stringify(review);
		if(navigator.onLine){
			$("#comments").prepend(out);
		}
		else{
			if(useLocalStorage){
			rev.addToLSComment(obj);}
			else
			{
				rev.addToDBComment(review);
			}
		}
				$("#comment").val("");

	}
});

	function readReview (){
		if(useLocalStorage){
			rev.getFromLSComment();
			}
		else {
			rev.getFromDBComment();
		}
	}		
});