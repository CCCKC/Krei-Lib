map_handler = {
	Setup: function( settings, filepath ) {
		debug.Out( "map_handler setup: " + filepath );
		
		this.isLoaded = false;
		
		// Load dat map
		$.getJSON( filepath, function( json ) { 
			map_handler.map = json;
			map_handler.isLoaded = true;
		} );
	},
		
	Draw: function( canvasWindow, settings, tileset ) {
		if ( this.isLoaded ) 
		{
			// tiled map tiles start at 1! offset!!
					
			var mapWidth = this.map["width"];
			var filmstripWidth = parseInt(this.map["tilesets"][0]["imagewidth"] / 32); 
			var tiles = this.map["layers"][0]["data"];
			var x = 0, y = 0;
				canvasWindow.drawImage( tileset,
					32, 0, 32, 32, 150, 150, 32, 32 );
			
			for ( var i = 0; i < tiles.length; i++ )
			{
				var tileX = ((tiles[i]-1) % filmstripWidth) * 32;
				var tileY = parseInt((tiles[i]-1) / filmstripWidth) * 32;
				
				canvasWindow.drawImage( tileset, 
					tileX, tileY, 32, 32,	// Filmstrip
					x*32, y*32, 32, 32 );	// Position
					
				x++;
				
				if ( x >= mapWidth ) 
				{
					x = 0;
					y++;
				}
			}
		}	
	},
	
	LoadLevel: function( settings, level ) {
	}
};
