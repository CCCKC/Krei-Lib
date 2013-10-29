main = {
	
	Setup: function( settings )
	{	
		this.currentState = state_title;
		this.currentState.Setup( settings );
		this.drawChanges = true; // using this because drawing the UI is intensive
	},

	HandleKeyDown: function( ev )
	{
		// Can't use "this" on callbacks
		main.currentState.HandleKeyDown( ev );
		main.drawChanges = true;
	},

	HandleKeyUp: function( ev )
	{
		main.currentState.HandleKeyUp( ev );
		main.drawChanges = true;
	},

	HandleMouseDown: function( ev )
	{
		main.currentState.HandleMouseDown( ev );
		main.drawChanges = true;
	},

	Update: function( settings )
	{
		var nextState = this.currentState.Update( settings );
		
		if ( nextState != "" || this.currentState.Redraw() )
		{
			this.drawChanges = true;
		}
		
		if ( nextState == "game" ) { 
			this.currentState = state_game;
			this.currentState.Setup( settings );
		}
	},

	Draw: function( canvasWindow, settings )
	{
		if ( this.drawChanges )
		{
			this.currentState.Draw( canvasWindow, settings );
			this.drawChanges = false;
		}
	}

	
}
