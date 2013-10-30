state_game = {
	name : "state",
	
	Setup: function( settings ) {		
		this.nextState = "";
		this.keys = { up: 38, down: 40, left: 37, right: 39, space: 32 };
		this.drawChanges = true;
	},
	
	Name: function() { 
		return this.name; 
	},
	
	HandleKeyDown: function( ev ) {
	},
	
	HandleKeyUp: function( ev ) {
	},
	
	HandleMouseDown: function( ev ) {
	},
	
	Update: function( settings ) {
		return this.nextState;
	},
	
	Draw: function( canvasWindow, settings ) { 
		canvasWindow.fillStyle = "#333333";
		canvasWindow.fillRect( 0, 0, settings.width, settings.height );
	},
	
	// For menus using the UI lib, this should only
	// return true when a change is made. In-game, it can return true all the time.
	Redraw: function() {
		if ( this.drawChanges ) {
			this.drawChanges = false;
			return true;
		}
	}
};
