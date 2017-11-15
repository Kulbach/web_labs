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
$("input[type=file]").change(function(){
    readURL(this);
});

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
				alert("Новина успішно опублікована!");
				$('#img').attr('src', "img/camera.png");
				$("#descr").val("");
				$("#title").val("");
		}

		
	});
});
