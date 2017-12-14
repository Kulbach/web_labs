$(document).ready(function (){
	s = localStorage;
	rev = new CN(); 
	readNews();
	function readNews() {
	if(navigator.onLine){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:3000/articles', false);
            xhr.send();
						if (xhr.status !== 200) {
                console.error( xhr.status + ': ' + xhr.statusText );
            } else {
            		$.each(JSON.parse(xhr.responseText), function(i,b){
            			var out = document.createElement('div');
									out.id = 'article';
									out.innerHTML = "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 bd'><img src='"+ 
								b.image +"' class='img-responsive st'><h4>"+
							b.title+"</h4>"+b.descr+"</div";
						$("#cln").append(out);
            		});
}
	}
		else
	{if(useLocalStorage){
			rev.getFromLSNews();
			}
		else {
			rev.getFromDBNews();
		}
		}
	}

window.addEventListener('online', function(e) {
					alert("Відправляю дані з LC на сервер");
					readNews();
});
});