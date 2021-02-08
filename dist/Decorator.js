"use strict";
;
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.n = function () { return 0; };
    ;
    return ConcreteComponent;
}());
var ConcreteDecorator = /** @class */ (function () {
    function ConcreteDecorator(comp) {
        this.comp = comp;
    }
    ConcreteDecorator.prototype.n = function () { return this.comp.n() + 1; };
    ;
    return ConcreteDecorator;
}());
console.log(new ConcreteDecorator(new ConcreteComponent()).n()); // 2
