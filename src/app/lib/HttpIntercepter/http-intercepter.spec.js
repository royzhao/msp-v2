System.register(['./http-intercepter.service', '../UserService/user.service', '../CookieService/cookie.service', 'angular2/testing', 'angular2/http', 'angular2/http/testing', 'angular2/core'], function(exports_1) {
    var http_intercepter_service_1, user_service_1, cookie_service_1, testing_1, http_1, testing_2, core_1;
    return {
        setters:[
            function (http_intercepter_service_1_1) {
                http_intercepter_service_1 = http_intercepter_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            testing_1.describe('HttpIntercepter', function () {
                testing_1.it('should get a right response', function () {
                    var connection; //this will be set when a new connection is emitted from the backend.
                    var text; //this will be set from mock response
                    var injector = core_1.Injector.resolveAndCreate([
                        testing_2.MockBackend,
                        user_service_1.UserService,
                        cookie_service_1.Cookie,
                        http_intercepter_service_1.HttpIntercepter,
                        core_1.provide(http_1.Http, {
                            useFactory: function (backend) {
                                return new http_1.Http(backend, new http_1.BaseRequestOptions());
                            },
                            deps: [testing_2.MockBackend]
                        })
                    ]);
                    var backend = injector.get(testing_2.MockBackend);
                    var http = injector.get(http_1.Http);
                    backend.connections.subscribe(function (c) { return connection = c; });
                    var httpIntercepter = injector.get(http_intercepter_service_1.HttpIntercepter);
                    var convert2Object = function (source) {
                        if (source == undefined) {
                            return null;
                        }
                        console.log("convert ok");
                        return source;
                    };
                    httpIntercepter.callApi('test.json', 'GET', convert2Object).subscribe(function (res) {
                        text = res;
                    }, function (err) {
                        text = err.message;
                    });
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                        body: { data: 'Something' },
                        status: 401
                    })));
                    testing_1.expect(text.data).toBe('Something');
                });
            });
        }
    }
});
//# sourceMappingURL=http-intercepter.spec.js.map