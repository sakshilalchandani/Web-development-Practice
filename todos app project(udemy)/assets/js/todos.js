/*---------------checking for connection-------------------------
alert("connected!!")-------------*/


// check off  todos by clicking
// way 1
/*$('li').on('click', function(){
	console.log($(this).css("color"))
	// if li is black, turn it gray
	if ($(this).css("color")=== "rgb(0, 0, 0)"){
		$(this).css({
		textDecoration:"line-through",
		color:"rgb(128, 128, 128"});
	}
	// else turn it black
	else{
		$(this).css({
		textDecoration:"none",
		color:"rgb(0, 0, 0)"});
	}
	
});


// way 2
$('li').on('click', function(){
	console.log($(this).css("color"))
	// if li is gray, turn it black
	if ($(this).css("color")=== "rgb(128, 128, 128)"){
		$(this).css({
		textDecoration:"none",
		color:"black"});
	}
	// else turn it gray
	else{
		$(this).css({
		textDecoration:"line-through",
		color:"gray"});
	}
	
});*/


// way 3
$('ul').on('click','li', function(){
	$(this).toggleClass("connected");});


// delete specific todos

$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,  function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		console.log("you hit enter! ")
		console.log($(this).val());
		var text = $(this).val();
		//empty the input box
		$(this).val("");
		// add this text to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + text +"</li>");
	};
});

/*
$('button[type="submit"]').click(function(){
	console.log("we're here!!!");
	console.log($('input').val());
	var text = $('input').val();
	$('input').val("");
	$('ul').append("<li><span>X</span> " + text +"</li>");
});*/


/*
//--------------------trash button  hide and show
$('li').on('mouseenter', function(){
	$('span').addClass("trash");
	console.log("hiiii");
});

$('li').on('mouseleave', function(){
	$('span').removeClass("trash");
});
*/

$(".fa-plus").on('click',function(){
	//console.log("you hit add button");
	$('input').fadeToggle();
});