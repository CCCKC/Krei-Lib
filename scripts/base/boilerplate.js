$( document ).ready( function() 
{
	var settings = { width: 640, height: 480, fps: 30 };
	
	$( "canvas" ).attr( "width", settings.width );
	$( "canvas" ).attr( "height", settings.height );
	
	var canvasWindow = $( "canvas" )[0].getContext( "2d" );
	
	// Loading Screen
	canvasWindow.fillStyle = "#398eed";
	canvasWindow.fillRect( 0, 0, settings.width, settings.height );
	canvasWindow.fillStyle = "#ffffff";
	canvasWindow.fillText( "Loading...", 10, 10 );

	debug.Out( "Setup Languages" );

	language.Setup( settings );
	
	setTimeout( FinishSetup, 100 );

	function FinishSetup() 
	{
		// Is the language done being loaded?
		if ( language.Ready() )
		{
			debug.Out( "Setup Image Handler" );
			image_handler.Setup();
			debug.Out( "Setup Audio Handler" );
			audio_handler.Setup();
			debug.Out( "Setup Entity Handler" );
			entity_handler.Setup();
			
			debug.Out( "Setup UI" );
			ui.Setup( canvasWindow, settings.width, settings.height );
			
			debug.Out( "Setup main" );
			main.Setup( settings );
			
			debug.Out( "Setup Input Listeners" );
			window.addEventListener( "keydown", 	main.HandleKeyDown, 	false );
			window.addEventListener( "keyup", 		main.HandleKeyUp, 		false );
			window.addEventListener( "mousedown", 	main.HandleMouseDown, 	false );
			
			setInterval( function() {
				main.Update( settings );
				main.Draw( canvasWindow, settings );
			}, 1000 / settings.fps );
		}
		else
		{
			//debug.Out( "Still loading..." );
			setTimeout( FinishSetup, 100 );
		}
	}
} 
);
