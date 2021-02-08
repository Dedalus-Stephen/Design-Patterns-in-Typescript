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
;
;
var TargetConcrete = /** @class */ (function () {
    function TargetConcrete() {
    }
    TargetConcrete.prototype.methodAOld = function () { };
    ;
    return TargetConcrete;
}());
var AdapteeConcrete = /** @class */ (function () {
    function AdapteeConcrete() {
    }
    AdapteeConcrete.prototype.methodANew = function () { };
    ;
    return AdapteeConcrete;
}());
var AdapterConcrete = /** @class */ (function (_super) {
    __extends(AdapterConcrete, _super);
    function AdapterConcrete(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    AdapterConcrete.prototype.methodAOld = function () {
        this.adaptee.methodANew();
    };
    return AdapterConcrete;
}(TargetConcrete));
new AdapterConcrete(new AdapteeConcrete()).methodAOld();