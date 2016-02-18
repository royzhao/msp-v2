System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LocalStorage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocalStorage = (function () {
                function LocalStorage() {
                    if (!localStorage) {
                        throw new Error('Current browser does not support Local Storage');
                    }
                    this.localStorage = localStorage;
                }
                LocalStorage.prototype.set = function (key, value) {
                    this.localStorage[key] = value;
                };
                LocalStorage.prototype.get = function (key) {
                    return this.localStorage[key] || false;
                };
                LocalStorage.prototype.setObject = function (key, value) {
                    this.localStorage[key] = JSON.stringify(value);
                };
                LocalStorage.prototype.getObject = function (key) {
                    return JSON.parse(this.localStorage[key] || '{}');
                };
                LocalStorage.prototype.remove = function (key) {
                    this.localStorage.removeItem(key);
                };
                LocalStorage = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStorage);
                return LocalStorage;
            })();
            exports_1("LocalStorage", LocalStorage);
        }
    }
});
//# sourceMappingURL=local-storage.service.js.map