image_handler = {
	Setup: function() {
		this.images = {};
		// Setup
		this.images.pathbase = CONFIG.imagePath;
	},
	
	Reset: function() {
		// Reset
		while ( this.images.length > 0 ) 	{ this.images.pop(); }
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
