ui = {
	Setup: function( canvas, screenWidth, screenHeight ) {
		this.refCanvas 		= canvas;
		this.screenWidth	= screenWidth;
		this.screenHeight	= screenHeight;
		this.simpleButtons 	= new Array();
		this.graphicButtons = new Array();
		this.images			= new Array();
		this.labels 		= new Array();
	},
	
	Reset: function() {
		while ( this.simpleButtons.length > 0 ) 	{ this.simpleButtons.pop(); }
		while ( this.graphicButtons.length > 0 ) 	{ this.graphicButtons.pop(); }
		while ( this.images.length > 0 ) 			{ this.images.pop(); }
		while ( this.labels.length > 0 ) 			{ this.labels.pop(); }
	},
	
	ResetGraphicButtons: function() {
		while ( this.graphicButtons.length > 0 ) 	{ this.graphicButtons.pop(); }
	},
	
	ResetLabels: function() {
		while ( this.labels.length > 0 ) 			{ this.labels.pop(); }
	},
	
	Draw: function() {
		for ( var i = 0; i < this.simpleButtons.length; i++ )
		{
			this.simpleButtons[i].Draw();
		}		
		
		for ( var i = 0; i < this.graphicButtons.length; i++ )
		{
			this.graphicButtons[i].Draw();
		}		
		
		for ( var i = 0; i < this.images.length; i++ )
		{
			this.images[i].Draw();
		}			
		
		for ( var i = 0; i < this.labels.length; i++ )
		{
			this.labels[i].Draw();
		}		
	},
	
	Click: function( ev ) { 
		var mouseX = ev.clientX - $( "#cnvWindow" ).position().left;
		var mouseY = ev.clientY - $( "#cnvWindow" ).position().top;
		
		
		for ( var i = 0; i < this.simpleButtons.length; i++ )
		{			
			if ( this.simpleButtons[i].IsClicked( mouseX, mouseY ) )
			{
				this.simpleButtons[i].OnClick();
			}
		}	
		
		for ( var i = 0; i < this.graphicButtons.length; i++ )
		{			
			if ( this.graphicButtons[i].IsClicked( mouseX, mouseY ) )
			{
				this.graphicButtons[i].OnClick();
			}
		}	
	},
	
	NewLabel: function( x, y, text, color, size ) {
		
		this.labels[ this.labels.length ] = {
			posX: x,
			posY: y,
			caption: text,
			fontSize: size,
			fgColor: color,
			
			Draw: function() {
				ui.refCanvas.fillStyle = this.fgColor;
				ui.refCanvas.font = this.fontSize + "px Arial";
				ui.refCanvas.fillText( this.caption, this.posX, this.posY );
			}
		}
		
	},
	
	NewSimpleButton: function( x, y, w, h, text, background, foreground, size, callback ) {
				
		this.simpleButtons[ this.simpleButtons.length ] = {
			
			posX: x,
			posY: y,
			width: w,
			height: h,
			bgColor: background,
			fgColor: foreground,
			fontSize: size,
			caption: text,
			
			OnClick: callback,
			Draw: function() {
				ui.refCanvas.fillStyle = this.bgColor;
				ui.refCanvas.fillRect( this.posX, this.posY, this.width, this.height )
					
				ui.refCanvas.strokeStyle = this.fgColor;
				ui.refCanvas.rect( this.posX, this.posY, this.width, this.height )
				ui.refCanvas.stroke();
				
				var centerX = this.posX + this.width / 2 - (this.caption.length * this.fontSize * 0.5 / 2);
				var centerY = this.posY + this.height / 1.6;
				
				ui.refCanvas.fillStyle = this.fgColor;
				ui.refCanvas.font = this.fontSize + "px Arial";
				ui.refCanvas.fillText( this.caption, centerX, centerY );
			},
			IsClicked: function( mouseX, mouseY ) {
				return ( this.posX <= mouseX 
						&& this.posX + this.width >= mouseX 
						&& this.posY <= mouseY 
						&& this.posY + this.height >= mouseY );
			}
			
		}
		
	},
	
	NewImage: function( x, y, w, h, fx, fy, fw, fh, img ) {
		
		this.images[ this.images.length ] = {
			posX: x,
			posY: y,
			width: w,
			height: h,
			filmstripX: fx,
			filmstripY: fy,
			frameWidth: fw,
			frameHeight: fh,
			image: img,
			
			Draw: function() {
				ui.refCanvas.drawImage( this.image, 
				this.filmstripX, this.filmstripY, this.frameWidth, this.frameHeight,
				this.posX, this.posY, this.width, this.height );
			}
		};
		
	},
	
	NewGraphicButton: function( x, y, w, h, fx, fy, fw, fh, img, k, hasBorder, callback ) {
		
		this.graphicButtons[ this.graphicButtons.length ] = {
			
			posX: x,
			posY: y,
			width: w,
			height: h,
			filmstripX: fx,
			filmstripY: fy,
			frameWidth: fw,
			frameHeight: fh,
			image: img,
			key: k,
			border: hasBorder,
			
			OnClick: callback,			
			Draw: function() {				
				ui.refCanvas.drawImage( this.image,
					this.filmstripX, this.filmstripY, this.frameWidth, this.frameHeight,
					this.posX, this.posY, this.width, this.height );
				if ( this.border ) 
				{
					ui.refCanvas.strokeStyle = "#000000";
					ui.refCanvas.rect( this.posX, this.posY, this.width, this.height )
					ui.refCanvas.stroke();
				}
			},
			IsClicked: function( mouseX, mouseY ) {
				return ( this.posX <= mouseX 
						&& this.posX + this.width >= mouseX 
						&& this.posY <= mouseY 
						&& this.posY + this.height >= mouseY );
			}
			
		}
		
	}
}
