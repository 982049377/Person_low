var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
    }
    var d = __define,c=Person,p=c.prototype;
    p.Creat = function () {
        this._person.push(this.createBitmapByName("bg_jpg"));
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Person;
}(MachineState));
egret.registerClass(Person,'Person');
//# sourceMappingURL=Person.js.map