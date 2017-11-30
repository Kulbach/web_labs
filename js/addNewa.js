$(document).ready(function (){
	s = localStorage;
	rev = new CN(); 

	function readNews() {
	if(useLocalStorage){
			rev.getFromLSNews();
			}
		else {
			rev.getFromDBNews();
		}
	}

window.addEventListener('online', function(e) {
					alert("Відправляю дані з LC на сервер");
					readNews();
});
});