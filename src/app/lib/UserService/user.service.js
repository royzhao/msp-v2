System.register(['angular2/core', '../CookieService/cookie.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cookie_service_1;
    var USER_TOKEN, UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }],
        execute: function() {
            /*
            constant var
            */
            USER_TOKEN = "token";
            UserService = (function () {
                function UserService(_storage) {
                    this._storage = _storage;
                }
                UserService.prototype.isLogin = function () {
                    if (this._storage.getCookie(USER_TOKEN)) {
                        console.log(this._storage.getCookie(USER_TOKEN));
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                UserService.prototype.logout = function () {
                    this._storage.deleteCookie(USER_TOKEN);
                };
                UserService.prototype.getUserToken = function () {
                    return this._storage.getCookie(USER_TOKEN);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [cookie_service_1.Cookie])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map