class Person extends MachineState{
      public constructor() {
        super();
      }
      public Creat(){
          this._person=egret.

      }
      public createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
      }

}
