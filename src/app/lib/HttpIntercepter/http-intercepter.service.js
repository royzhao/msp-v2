System.register(['angular2/core', 'angular2/http', "rxjs/Rx", '../UserService/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, user_service_1;
    var apiServiceUrlRoot, HttpIntercepter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            apiServiceUrlRoot = '/';
            HttpIntercepter = (function () {
                function HttpIntercepter(_http, _userService) {
                    this._http = _http;
                    this._userService = _userService;
                }
                HttpIntercepter.prototype.constructHeader = function () {
                    var headers = new http_1.Headers();
                    headers.append("x-session-token", this._userService.getUserToken());
                    headers.append('Content-Type', 'application/json');
                    return headers;
                };
                HttpIntercepter.prototype.constructRequestData = function (method, data) {
                    var args = new http_1.RequestOptions({
                        headers: this.constructHeader(),
                        method: method,
                        body: (data == undefined ? null : JSON.stringify(data))
                    });
                    return args;
                };
                HttpIntercepter.prototype.isNeedCheckAuth = function (method) {
                    if (method == "POST" ||
                        method == "PUT" ||
                        method == "DELETE") {
                        return true;
                    }
                    return false;
                };
                HttpIntercepter.prototype.callApi = function (url, method, convertF, data) {
                    if (this.isNeedCheckAuth(method)) {
                        //is login?
                        if (this._userService.isLogin() == false) {
                        }
                    }
                    return this._http.request(url, this.constructRequestData(method, data))
                        .map(function (res) {
                        //TODO check is status  200
                        switch (res.status) {
                            case 200:
                                return res.json();
                            case 401:
                                //TODO to login
                                // window.alert("need login");
                                return Rx_1.Observable.throw(new Error('you don`t have the authorization! please login first '));
                            // return Observable.throw('you don`t have the authorization! please login first ');
                            default:
                                return Rx_1.Observable.throw('somthing wrong ');
                        }
                    })
                        .map(function (res) {
                        //TODO do something object convert 
                        if (convertF == undefined) {
                            return res;
                        }
                        var dest = convertF(res);
                        if (dest != undefined &&
                            dest != null) {
                            return dest;
                        }
                        else {
                            return Rx_1.Observable.throw({ err: 'can`t convert to object' });
                        }
                    })
                        .catch(function (err) {
                        //TODO handler exception
                        console.log(err.json());
                        return Rx_1.Observable.throw(err);
                    });
                };
                HttpIntercepter = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
                ], HttpIntercepter);
                return HttpIntercepter;
            })();
            exports_1("HttpIntercepter", HttpIntercepter);
        }
    }
});
//# sourceMappingURL=http-intercepter.service.js.map