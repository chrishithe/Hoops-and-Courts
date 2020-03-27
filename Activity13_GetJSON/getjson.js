$(document).ready(function(){
	$.getJSON("team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					"<img src='" + value.image +"'>" +
					"<h3>" + value.full_name + "</h3>" + 
					"<h3>" + value.title + "</h3>" + 
					"<p>" + value.tag_line + "</p>"
				);
			});
		}); 
	});
});