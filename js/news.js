window.k = 0;
$(document).ready(function (){
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var file;
        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        };
				reader.readAsDataURL(input.files[0]);
    }
}
function readImage(src, target) { //Загрузка изображения
            var FR= new FileReader();
            FR.onload = function(e) {
             target.src = this.result;
            };       
            FR.readAsDataURL( src.files[0] );
            return target.src;
          }
       
$("input[type=file]").change(function(){
    readURL(this);
});
function isOnline() {
    return window.navigator.onLine; 
}

rev = new CN(); 

$(document).on("click", "#send_news", function (){

			var title = $("#title").val();
			var descr = $("#descr").val();
			var error = false;
			if(title.length >100){
				document.getElementById("title").style.borderColor = "red";
				$("#title").notify("Не більше 100 символів");
				error = true;
			}
			if(title.length < 10){
				document.getElementById("title").style.borderColor = "red";
				$("#title").notify("Не менше 10 символів");
				error = true;
			}
			if(title.length==0){
				document.getElementById("title").style.borderColor = "red";
				$("#title").notify("Це поле має бути заповнене");
				error = true;
			}
			if(descr.length >1000){
				document.getElementById("descr").style.borderColor = "red";
				$("#descr").notify("Не більше 1000 символів");
				error = true;
			}
			if(descr.length ==0){
				document.getElementById("descr").style.borderColor = "red";
				$("#descr").notify("Це поле має бути заповнене");
				error = true;
			}
			if(error!=true){
				document.getElementById("descr").style.borderColor="grey";
				document.getElementById("title").style.borderColor = "grey";
				title = $("#title").val();
				descr = $("#descr").val();
				target = document.getElementById('img');
				src = document.getElementById('image_file');
				imgData = readImage(src, target);
				var news = {
						title: title,
						descr: descr,
						image: imgData
					};
				var obj= JSON.stringify(news);
			if(navigator.onLine){
				alert("Кидаю на сервер і читаю з сервера");
			}
				else {
						if(useLocalStorage){
							rev.addToLSNews(obj);
						}
						else {
							rev.addToDBNews(news);
						}
				}
				readURL('img/camera.png")');
				$("#descr").val("");
				$("#title").val("");
		}

		
	});
});
