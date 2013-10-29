debug = {
	Err: function( message ) {
		$( "#debug" ).html( $("#debug").html() + "*** " + message + "\n" );
	},
	
	Out: function( message ) { 
		$( "#debug" ).html( $("#debug").html() + message + "\n" );
	}
}
