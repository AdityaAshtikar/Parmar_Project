function start(){

	$(".reset").css("visibility", "show");
	$(".start").css("visibility", "hidden");

	var timer;
	var backgroundColor;
	var count = 5;

	$("#counter").text(count);
	//update display

	timer = setTimeout(update, 1000);
	//this allows for 'clearTimeout' if needed

	function update()
	{
	    if (count > 0)
	    {
	    	$(".start").css("visibility", "hidden");
	    	$("#counter").text(--count);
	       	timer = setTimeout(update, 1000);
	    }
	    else
	    {
	    	$(".reset").css("visibility", "show");
	        $("#finished").text("Time Over Sir!");

	    }
	}

	//changing background-color after every 2 seconds
	var color = {
		red: "#FF0000",
		green: "#008000",
		blue: "#0000FF"
	};

	backgroundColor = setInterval(changeColor, 1000);

	function changeColor(){
		if(count !== 0)
			$("body").css("background-color", randomColor());
		else
			$("body").css("background-color", "lightgrey");
	}

	function randomColor(){
		var second = Math.floor(Math.random() * 3 + 1);

		if(second == 1)
			return color.red;
		if(second == 2)
			return color.green;
		if(second == 3)
			return color.blue;
	}
}

$(document).ready(function () {


    function repeat() {
        $(".first").animate({left:'400px'},100);

        $(".second").delay(200).animate({left:'800px'},200);

        $(".third").delay(300).animate({left:'1200px'},300);


        $('.slidein').delay(3500).fadeOut(500)({

            },500 ,function() {
            repeat();
        });
    }
repeat();
});
