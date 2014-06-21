package;

import js.Browser;
import js.html.CanvasElement;
import createjs.easeljs.Stage;
import createjs.easeljs.Ticker;
import createjs.easeljs.Event;
import createjs.easeljs.Shape;
import createjs.easeljs.Text;

class Main{
    private var canvas:CanvasElement;
    private var stage:Stage;

    public static function main(){
        new Main();
    }

    public function new(){
        Browser.window.onload = init;
    }

    private function init(_):Void{
        canvas = cast Browser.document.getElementById("canvas");
        stage = new Stage(canvas);

        background();

        Ticker.setFPS(30);
        Ticker.timingMode = Ticker.RAF_SYNCHED;
        Ticker.addEventListener("tick",update);
    }

    private function update(event:Event):Void{
        stage.update();
    }

    private function background():Void{
        var sky:Shape = new Shape();
        stage.addChild(sky);
        sky.graphics.beginLinearGradientFill(["#0069A0","#00AAE4"],[0,1],0,0,0,150);
        sky.graphics.drawRect(0,0,600,150);

        var ground:Shape = new Shape();
        stage.addChild(ground);
        ground.graphics.beginLinearGradientFill(["#99CC33", "#7EB133"], [0, 1], 0, 150, 0, 200);
        ground.graphics.drawRect(0,150,600,50);

        var title:Text = new Text("CreateJS","24px Myriad Pro","#ffffff");
        stage.addChild(title);
        title.textAlign = "center";
        title.textBaseline = "bottom";
        title.x = canvas.width/2;
        title.y = 65;
        title.alpha = 0.5;

    }
}