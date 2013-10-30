audio_handler = {
	Setup: function() {
		this.audio = {};
		// Setup
		this.audio.pathbase = CONFIG.audioPath;
	},
	
	Reset: function() {
		// Reset
		this.StopAllAudio();
		while ( this.audio.length > 0 ) 	{ this.audio.pop(); }
	},
	
	LoadAudio: function( filename, fileextention, isMusic ) {
		if ( this.audio[filename] == undefined ) {
			this.audio[filename] = new Audio( this.audio.pathbase + filename + "." + fileextention );
			
			this.audio[filename].volume = 0.30;
			
			if ( isMusic ) {
				this.audio[filename].volume = 0.10;
				this.audio[filename].loop = true;
				this.audio[filename].isPlaying = false;
			}
			
			this.audio[filename].isMusic = isMusic;
		}
	},

	GetSound: function( key ) {
		if ( this.audio[key] == null ) 
		{
			debug.Err( "Unable to find sound '" + key + "'." );
		}
		else
		{
			return this.audio[key];
		}
	},
	
	StopAllAudio: function() {
		for ( var key in this.audio ) {
			// Stop it if this is an Audio item
			if ( toString.call( this.audio[key] ) === "[object HTMLAudioElement]" )
			{
				this.audio[key].pause();
				this.audio[key].isPlaying = false;
			}
		}
	},
	
	PlaySound: function( key ) {			
		var sound = this.GetSound( key );		
		if ( sound.isMusic && sound.isPlaying == false ) {		
			this.StopAllAudio();
			sound.isPlaying = true;
			sound.play();
		}
		else if ( !sound.isMusic ) {
			sound.play();
		}
	},
	
	StopSound: function( key ) {
		var sound = this.GetSound( key );		
		if ( sound.isPlaying == true ) {
			sound.isPlaying = false;
			sound.pause();
		}
	}
}
