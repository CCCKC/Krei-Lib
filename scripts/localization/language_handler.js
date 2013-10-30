language = {
	Setup: function( settings ) {		
		this.languagePath = CONFIG.languagePath;
		this.isLoaded = false;
		this.SetLanguage( CONFIG.language );
		this.text = {};
		this.refSettings = settings;
	},
	
	Ready: function() {
		return this.isLoaded;
	},
	
	LoadLanguageFile: function( code ) {
		debug.Out( "Load " + this.languagePath + code + ".json" );
		
		$.getJSON( this.languagePath + code + ".json", function( json ) { 
			language.text = json;
			language.isLoaded = true;
			
			debug.Out( "main-title: " + language.text["main-title"] );
		} );
		
		debug.Out( "End load language file" );
	},
	
	SetLanguage: function( code ) {		
		this.isLoaded = false;
		this.language = code;
		this.LoadLanguageFile( code );
	},
	
	GetLanguage: function() {
		return this.language;
	}, 
	
	Out: function( key ) {		
		debug.Out( "Language[" + key + "] = " + this.text[key] );
		if ( this.text[key] == "undefined" ) 
		{
			return "";
		}
		
		return this.text[key];
	}
}
