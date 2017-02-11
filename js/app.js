
$(document).ready(function(){
	
	$.ajax({
		url: "example.md",

		success: function(mdText){

			var converter = new showdown.Converter();
			var htmlText = converter.makeHtml(mdText);
			console.log(htmlText)
			$("#app").append(htmlText); 
		}
	});
	$(".blog").click(function(){
		$.ajax({
			datatype:"json",
			url:"/menu.json",
			success:function(json){
				console.log(coucou);
				
			}
		});

	});
});
