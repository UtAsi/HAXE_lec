(function () { "use strict";
var Main = function() {
	window.onload = $bind(this,this.init);
};
Main.main = function() {
	new Main();
};
Main.prototype = {
	init: function(_) {
		this.canvas = window.document.getElementById("canvas");
		this.stage = new createjs.Stage(this.canvas);
		this.background();
		createjs.Ticker.setFPS(30);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.addEventListener("tick",$bind(this,this.update));
	}
	,update: function(event) {
		this.stage.update();
	}
	,background: function() {
		var sky = new createjs.Shape();
		this.stage.addChild(sky);
		sky.graphics.beginLinearGradientFill(["#0069A0","#00AAE4"],[0,1],0,0,0,150);
		sky.graphics.drawRect(0,0,600,150);
		var ground = new createjs.Shape();
		this.stage.addChild(ground);
		ground.graphics.beginLinearGradientFill(["#99CC33","#7EB133"],[0,1],0,150,0,200);
		ground.graphics.drawRect(0,150,600,50);
		var title = new createjs.Text("CreateJS","24px Myriad Pro","#ffffff");
		title.textAlign = "center";
		title.textBaseline = "bottom";
		title.x = this.canvas.width / 2;
		title.y = 65;
		title.alpha = 0.5;
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})();
