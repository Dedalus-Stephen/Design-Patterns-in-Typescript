"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Faux = /** @class */ (function () {
    function Faux() {
    }
    Faux.prototype.doSomething = function () { };
    ;
    return Faux;
}());
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.doSomething = function () { return 1; };
    ;
    return RealSubject;
}());
var Proxy = /** @class */ (function (_super) {
    __extends(Proxy, _super);
    function Proxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rSubject = new RealSubject();
        return _this;
    }
    // @Override
    Proxy.prototype.doSomething = function () {
        this.rSubject.doSomething();
    };
    return Proxy;
}(Faux));
