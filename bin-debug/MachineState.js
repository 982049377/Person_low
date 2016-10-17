var MachineState = (function () {
    function MachineState() {
    }
    var d = __define,c=MachineState,p=c.prototype;
    p.SetState = function (e) {
        if (this._State) {
            this._State.onExit();
        }
        e = this._State;
        this._State.onEnter();
    };
    return MachineState;
}());
egret.registerClass(MachineState,'MachineState');
var Walk = (function () {
    function Walk() {
    }
    var d = __define,c=Walk,p=c.prototype;
    p.onEnter = function () {
    };
    p.onExit = function () {
    };
    return Walk;
}());
egret.registerClass(Walk,'Walk',["State"]);
var Idle = (function () {
    function Idle() {
    }
    var d = __define,c=Idle,p=c.prototype;
    p.onEnter = function () {
    };
    p.onExit = function () {
    };
    return Idle;
}());
egret.registerClass(Idle,'Idle',["State"]);
//# sourceMappingURL=MachineState.js.map