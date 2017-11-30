var useLocalStorage = true;
s = localStorage;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
IDBTransaction  = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

var request = indexedDB.open('db', 3);

request.onerror = function (e) {
    console.log('error');
};

request.onsuccess = function(e){
    useLocalStorage = false;
    db = e.target.result;
};

request.onupgradeneeded = function(e){
    var db = e.target.result;
    var news = db.createObjectStore("news", {autoIncrement: true});
    var reviews = db.createObjectStore("reviews", {autoIncrement: true});
};

var CN =  function (){};

CN.prototype.addToLSComment = function (obj){
	var cn = new CN();
	var n = cn.count("comment");
	s.setItem("comment" + (n+1), obj);
};

CN.prototype.addToLSNews = function (obj){
	var cn = new CN();
	var n = cn.count("news");
	s.setItem("news" + (n+1), obj);
};

CN.prototype.getFromLSComment = function () {
	if (s.getItem('comment1')) {
			if(rev.check("comment")){
							id = key.substr(7);
							var comment = JSON.parse(s.getItem("comment" +id));
							var out = document.createElement('div');
							out.id = 'review';
							out.innerHTML = "<div class='container bod'><h2>Вася Пупкін  <time>" + 
							comment.when+ "</time></h2>"  + 
							comment.message + "</div>";
							$("#comments").prepend(out);
		}	}
}

CN.prototype.getFromLSNews = function () {
	if (s.getItem('news1')) {
			if(rev.check("news")){
							id = key.substr(7);
							var news = JSON.parse(s.getItem("news" +id));
							var out = document.createElement('div');
							out.id = 'news';
							out.innerHTML = "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 bd'><img src='"+ 
							news.image +"' class='img-responsive st'><h4>"+
							news.title+"</h4>"+news.descr+"</div";
							$("#cln").prepend(out);
		}	}
}

CN.prototype.addToDBComment = function(obj){
	var transaction = db.transaction(["reviews"], "readwrite");
            var store = transaction.objectStore("reviews");
            store.add(obj);
}

CN.prototype.addToDBNews = function(obj){
	var transaction = db.transaction(["news"], "readwrite");
            var store = transaction.objectStore("news");
            store.add(obj);
}

CN.prototype.getFromDBComment = function(){
	var transaction = db.transaction(["reviews"], "readonly");
       var store = transaction.objectStore("reviews");
      	store.openCursor().onsuccess = function (e) {
				var cursor = e.target.result;
				if(cursor){
						var parentElem = document.getElementById('comments');
						var out = document.createElement('div');
						out.id = 'review';
						out.innerHTML = "<div class='container bod'><h2>Вася Пупкін  <time>" + 
						cursor.value.when + "</time></h2>"  + 
						cursor.value.message + "</div>";
						$("#comments").prepend(out);
						cursor.continue();
}}
}

CN.prototype.getFromDBNews = function(){
	var transaction = db.transaction(["news"], "readonly");
       var store = transaction.objectStore("news");
      	store.openCursor().onsuccess = function (e) {
				var cursor = e.target.result;
				if(cursor){
							var out = document.createElement('div');
							out.id = 'news';
							out.innerHTML = "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 bd'><img src='"+ 
							cursor.value.image +"' class='img-responsive st'><h4>"+
							cursor.value.title+"</h4>"+cursor.value.descr+"</div";
						$("#cln").append(out);
						cursor.continue();
}}
}

CN.prototype.count = function(name){
	n = 0;
	for (var i = 0; i < s.length; i++) {
				key = s.key(i);
				if(~key.indexOf(name))
					n++;}
	return n;
};
