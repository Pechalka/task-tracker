
var $ = require('jquery');



var get = function(url){
	return $.ajax({
		url : url,
		type : 'GET',
		dataType : 'json',
		cache : false,
		contentType:"application/json"
	})
}

var post = function(url, data){
//	return $.post(url, data);
	return $.ajax({
				url : url,
				type : 'POST',
				contentType:"application/json",
				data : JSON.stringify(data)
			})
}

var remove = function(url){
	return $.ajax({
		url : url,
		type : 'DELETE'
	})
}


module.exports = {
	get : get,
	post : post,
	remove : remove
}