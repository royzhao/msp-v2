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
    var Cookie;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Cookie = (function () {
                function Cookie() {
                }
                /**
                 * Retrieves a single cookie by it's name
                 *
                 * @param  {string} name Identification of the Cookie
                 * @returns The Cookie's value
                 */
                Cookie.getCookie = function (name) {
                    var myWindow = window;
                    name = myWindow.escape(name);
                    var regexp = new RegExp('(?:^' + name + '|;\s*' + name + ')=(.*?)(?:;|$)', 'g');
                    var result = regexp.exec(document.cookie);
                    return (result === null) ? null : myWindow.unescape(result[1]);
                };
                /**
                 * Save the Cookie
                 *
                 * @param  {string} name Cookie's identification
                 * @param  {string} value Cookie's value
                 * @param  {number} expires Cookie's expiration date in days from now. If it's undefined the cookie is a session Cookie
                 * @param  {string} path Path relative to the domain where the cookie should be avaiable. Default /
                 * @param  {string} domain Domain where the cookie should be avaiable. Default current domain
                 */
                Cookie.setCookie = function (name, value, expires, path, domain) {
                    var myWindow = window;
                    var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
                    if (expires) {
                        var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                        cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
                    }
                    if (path) {
                        cookieStr += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieStr += 'domain=' + domain + ';';
                    }
                    // console.log(cookieStr);
                    document.cookie = cookieStr;
                };
                /**
                 * Removes specified Cookie
                 *
                 * @param  {string} name Cookie's identification
                 * @param  {string} path Path relative to the domain where the cookie should be avaiable. Default /
                 * @param  {string} domain Domain where the cookie should be avaiable. Default current domain
                 */
                Cookie.deleteCookie = function (name, path, domain) {
                    // If the cookie exists
                    if (Cookie.getCookie(name)) {
                        Cookie.setCookie(name, '', -1, path, domain);
                    }
                };
                Cookie = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Cookie);
                return Cookie;
            })();
            exports_1("Cookie", Cookie);
        }
    }
});
//# sourceMappingURL=local-storage.service.js.map