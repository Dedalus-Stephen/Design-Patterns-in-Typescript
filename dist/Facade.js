"use strict";
var LibraryPackage;
(function (LibraryPackage) {
    ;
    var FeatureOne = /** @class */ (function () {
        function FeatureOne() {
        }
        FeatureOne.prototype.doSomething = function () { };
        return FeatureOne;
    }());
    LibraryPackage.FeatureOne = FeatureOne;
    ;
    var FeatureTwo = /** @class */ (function () {
        function FeatureTwo() {
        }
        FeatureTwo.prototype.doSomething = function () { };
        return FeatureTwo;
    }());
    LibraryPackage.FeatureTwo = FeatureTwo;
    ;
    var FeatureThree = /** @class */ (function () {
        function FeatureThree() {
        }
        FeatureThree.prototype.doSomething = function () { };
        return FeatureThree;
    }());
    LibraryPackage.FeatureThree = FeatureThree;
    ;
})(LibraryPackage || (LibraryPackage = {}));
var FacadeFeatureOne = /** @class */ (function () {
    function FacadeFeatureOne() {
    }
    FacadeFeatureOne.prototype.doFeatureOne = function () {
        new LibraryPackage.FeatureOne().doSomething();
    };
    return FacadeFeatureOne;
}());
new FacadeFeatureOne().doFeatureOne();
