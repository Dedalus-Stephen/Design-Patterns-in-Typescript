"use strict";
;
;
var ProductOne = /** @class */ (function () {
    function ProductOne() {
    }
    return ProductOne;
}());
;
;
var ProductTwo = /** @class */ (function () {
    function ProductTwo() {
    }
    return ProductTwo;
}());
;
var ProductOneFactoryConcrete = /** @class */ (function () {
    function ProductOneFactoryConcrete() {
    }
    ProductOneFactoryConcrete.prototype.create = function () { return new ProductOne(); };
    ;
    return ProductOneFactoryConcrete;
}());
var ProductTwoFactoryConcrete = /** @class */ (function () {
    function ProductTwoFactoryConcrete() {
    }
    ProductTwoFactoryConcrete.prototype.create = function () { return new ProductTwo(); };
    ;
    return ProductTwoFactoryConcrete;
}());
console.log(new ProductOneFactoryConcrete().create());
