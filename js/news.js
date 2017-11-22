window.k = 0;
$(document).ready(function (){
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        };
				reader.readAsDataURL(input.files[0]);
    }
}
function readImage(fileInput, n) { //Загрузка изображения
          if ( fileInput.files && fileInput.files[0] ) {
            var FR= new FileReader();
            FR.onload = function(e) {
              localStorage.setItem('newsImage' + (n+1), e.target.result); 
            };       
            FR.readAsDataURL( fileInput.files[0] );
          }
        }
$("input[type=file]").change(function(){
    readURL(this);
});
function isOnline() {
    return window.navigator.onLine; 
}

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
			if(navigator.onLine){
				alert("Кидаю на сервер і читаю з сервера");}
				else {
					n =0;
					s = localStorage;
					for (var i = 0; i < s.length; i++) {
						key = s.key(i);
							if(~key.indexOf("newsTitle")){
								n++;
							}
					}
						readImage($("#image_file")[0], n);
						localStorage.setItem("newsTitle" + (n+1), $("#title").val());
						localStorage.setItem("newsDescr" + (n+1), $("#descr").val());
				}
				$('#img').attr('src', "img/camera.png");
				$("#descr").val("");
				$("#title").val("");
		}

		
	});
});
