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
		$.getJSON( this.languagePath + code + ".json", function( json ) { 
			language.text = json;
			language.isLoaded = true;
		} );
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
		if ( this.text[key] == "undefined" ) 
		{
			return "";
		}
		
		return this.text[key];
	}
}
