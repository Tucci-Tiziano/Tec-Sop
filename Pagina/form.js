$(document).ready(function() {
	$("#myForm").submit(function(event) {
		event.preventDefault();
		var email = $("#email").val();
		if (email.endsWith(".com") && email.includes("@")) {
			$("#email").addClass("bien");
		} else {
			$("#email").addClass("mal");
		}
        var nomb = $("#name").val();
        if(nomb==""){
            $("#name").addClass("mal");
		} else {
			$("#name").addClass("bien");
		}
        var dni = $("#dni").val();
        if(dni.length==8){
            $("#dni").addClass("bien");
		} else {
			$("#dni").addClass("mal");
		}
	});
});
$(document).ready(function() {
	$("#backgroundCheckbox").click(function() {
		if ($(this).is(":checked")) {
			$("body").css("background-image", "url(cute.jpg)", "background-repeat", "no-repeat");
		} else {
			$("body").css("background-image", "url(1.jpg)");
		}
	});
});



