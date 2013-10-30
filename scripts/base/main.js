main = {
	
	Setup: function( settings )
	{	
		this.currentState = state_title;
		this.currentState.Setup( settings );
	},

	HandleKeyDown: function( ev )
	{
		// Can't use "this" on callbacks
		main.currentState.HandleKeyDown( ev );
	},

	HandleKeyUp: function( ev )
	{
		main.currentState.HandleKeyUp( ev );
	},

	HandleMouseDown: function( ev )
	{
		main.currentState.HandleMouseDown( ev );
	},

	Update: function( settings )
	{
		var nextState = this.currentState.Update( settings );
		
		if ( nextState == "game" ) { 
			this.currentState = state_game;
			this.currentState.Setup( settings );
		}
	},

	Draw: function( canvasWindow, settings )
	{
		if ( this.currentState.Redraw() )
		{
			this.currentState.Draw( canvasWindow, settings );
		}
	}

	
}
