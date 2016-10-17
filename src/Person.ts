class Person extends MachineState{
      private _person:Array<egret.Bitmap> ;
      public constructor() {
        super();
      }
      public Creat(){
          this._person.push(this.createBitmapByName("bg_jpg"));

      }
      public createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
      }

}
