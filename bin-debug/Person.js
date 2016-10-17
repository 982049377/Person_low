var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
    }
    var d = __define,c=Person,p=c.prototype;
    p.Creat = function () {
        this._person = this.createBitmapByName("10000_png");
        this.stage.$touchEnabled = true;
        this._person.x = 0;
        this._person.y = 0;
        this.setAnchor(this._person);
        this.parent.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, setposition, this);
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
        function setposition(evt) {
            egret.Tween.get(this._person).to({ x: evt.stageX, y: evt.stageY }, 2000, egret.Ease.sineIn);
        }
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.setAnchor = function (e) {
        e.$setAnchorOffsetX(e.width / 2);
        e.$setAnchorOffsetY(e.height / 2);
    };
    return Person;
}(egret.DisplayObjectContainer));
egret.registerClass(Person,'Person');
//# sourceMappingURL=Person.js.map