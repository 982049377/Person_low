class Person extends egret.DisplayObjectContainer{
      private _person:egret.Bitmap;
      public constructor() {
        super();
      }
      public Creat(){
        this._person=this.createBitmapByName("10000_png");
        this.stage.$touchEnabled=true;
        this._person.x=0;
        this._person.y=0;
        this.setAnchor(this._person);
        
        this.parent.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,setposition,this);
        this.addChild(this._person);
        //this.container.addchild(i);
/*
        {
            this._personStay.push(this.createBitmapByName("10001_png"));
            this._personStay.push(this.createBitmapByName("10002_png"));
            this._personStay.push(this.createBitmapByName("10003_png"));
            this._personStay.push(this.createBitmapByName("10004_png"));
            this._personStay.push(this.createBitmapByName("10005_png"));
            this._personStay.push(this.createBitmapByName("10006_png"));
            this._personStay.push(this.createBitmapByName("10007_png"));
        }*/

        function setposition(evt:egret.TouchEvent){
            egret.Tween.get(this._person).to({x:evt.stageX,y:evt.stageY},2000, egret.Ease.sineIn );
        }

      }
      public createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
      }
      private setAnchor(e:egret.Bitmap)
      {
         e.$setAnchorOffsetX(e.width/2);
         e.$setAnchorOffsetY(e.height/2);
      }

}
