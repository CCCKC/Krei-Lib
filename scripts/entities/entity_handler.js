entity_handler = {
	Setup: function() {
		this.entities = Array();
	},
	
	Reset: function() {
		// Reset
		while ( this.entities.length > 0 ) 	{ this.entities.pop(); }
	},
	
	AddEntity: function( entity ) {
		this.entities.push( entity );
	},
	
	Update: function() {
		for ( var i = 0; i < this.entities.length; i++ )
		{
			this.entities[i].Update();
		}
	},
	
	Draw: function( canvasWindow ) {
		for ( var i = 0; i < this.entities.length; i++ )
		{
			this.entities[i].Draw( canvasWindow );
		}
	}
}
