"use strict";
var ConcreteCacheNumberArray = /** @class */ (function () {
    function ConcreteCacheNumberArray(data) {
        this.data = data;
        this.id = this.idGen();
    }
    ConcreteCacheNumberArray.prototype.idGen = function () {
        return Math.floor(Math.random() * 100);
    };
    ConcreteCacheNumberArray.prototype.isUpToDate = function (id) {
        return id === this.id;
    };
    ConcreteCacheNumberArray.prototype.getCache = function (id) {
        return this.isUpToDate(id) ? { data: this.data, id: this.id } : false;
    };
    ConcreteCacheNumberArray.prototype.setCache = function (data) {
        this.data = data;
        this.id = this.idGen();
        return this.id;
    };
    return ConcreteCacheNumberArray;
}());
var ConcreteCacheStringArray = /** @class */ (function () {
    function ConcreteCacheStringArray(data) {
        this.data = data;
        this.id = this.idGen();
    }
    ConcreteCacheStringArray.prototype.idGen = function () {
        return Math.floor(Math.random() * 100);
    };
    ConcreteCacheStringArray.prototype.isUpToDate = function (id) {
        return id === this.id;
    };
    ConcreteCacheStringArray.prototype.getCache = function (id) {
        return this.isUpToDate(id) ? { data: this.data, id: this.id } : false;
    };
    ConcreteCacheStringArray.prototype.setCache = function (data) {
        this.data = data;
        this.id = this.idGen();
        return this.id;
    };
    return ConcreteCacheStringArray;
}());
