image_handler = {
	Setup: function( pathbase ) {
		this.images = {};

		// Reset
		while ( this.images.length > 0 ) 	{ this.images.pop(); }
		
		// Setup
		this.images.pathbase = pathbase;
	},
	
	LoadImage: function( filename, fileextention ) {
		this.images[filename] = new Image();
		this.images[filename].src = this.images.pathbase + filename + "." + fileextention;
	},

	GetImage: function( key ) {
		if ( this.images[key] == null ) 
		{
			debug.Err( "Unable to find image '" + key + "'." );
		}
		else
		{
			return this.images[key];
		}
	}
}
