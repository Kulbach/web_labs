$(document).ready(function (){
	s = localStorage;
readReview();
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
			fetch('http://localhost:3000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: obj
            });
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
		if(navigator.onLine){
		 let xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:3000/reviews', false);
            xhr.send();
						if (xhr.status !== 200) {
                console.error( xhr.status + ': ' + xhr.statusText );
            } else {
            		$.each(JSON.parse(xhr.responseText), function(i,b){
            			var out = document.createElement('div');
									out.id = 'review';
									out.innerHTML = "<div class='container bod'><h2>Вася Пупкін  <time>" + 
									b.when + "</time></h2>"  + 
									b.message + "</div>";
						$("#comments").prepend(out);
            		});
}} else{
		if(useLocalStorage){
			rev.getFromLSComment();
			}
		else {
			rev.getFromDBComment();
		}
	}	
	}	
});