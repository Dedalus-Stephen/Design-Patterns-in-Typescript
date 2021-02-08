"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    ;
    Singleton.get = function () {
        if (!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    };
    return Singleton;
}());
