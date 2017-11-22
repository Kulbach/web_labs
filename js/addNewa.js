$(document).ready(function (){
	s = localStorage;
	if (s.getItem('newsTitle1')) {
		for (var i = 0; i < s.length; i++) {
				key = s.key(i);
				if(~key.indexOf("newsTitle")){
							id = key.substr(9);
							image = localStorage.getItem('newsImage'+id);
							title = localStorage.getItem('newsTitle'+id);
							descr = localStorage.getItem('newsDescr'+id);
							$("#cln").append("<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 bd'><img src='"+ image +"' class='img-responsive st'><h4>"+title+"</h4>"+descr+"</div");
	}
}}

window.addEventListener('online', function(e) {
	k = false;
	for (var i = 0; i < s.length; i++) {
				key = s.key(i);
				if(~key.indexOf("newsTitle")){
					k = true;
				}
				if (k){
					alert("Відправляю дані з LC на сервер")
				}
}
});
});