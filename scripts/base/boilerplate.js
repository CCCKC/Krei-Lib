$( document ).ready( function() 
{
	var settings = { width: 640, height: 480, fps: 30 };
	var images = {};
	var sounds = {};
	
	$( "canvas" ).attr( "width", settings.width );
	$( "canvas" ).attr( "height", settings.height );
	
	var canvasWindow = $( "canvas" )[0].getContext( "2d" );
	
	// Loading Screen
	canvasWindow.fillStyle = "#398eed";
	canvasWindow.fillRect( 0, 0, settings.width, settings.height );
	canvasWindow.fillStyle = "#ffffff";
	canvasWindow.fillText( "Loading...", 10, 10 );
	
	window.addEventListener( "keydown", 	main.HandleKeyDown, false );
	window.addEventListener( "keyup", 		main.HandleKeyUp, false );
	window.addEventListener( "mousedown", 	main.HandleMouseDown, false );
	
	main.Setup( settings );
	
	setInterval( function() {
		main.Update( settings );
		main.Draw( canvasWindow, settings );
	}, 1000 / settings.fps );
} );
