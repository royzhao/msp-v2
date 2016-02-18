System.register(['../HttpIntercepter/http-intercepter.service', './open-api.service', '../UserService/user.service', '../CookieService/cookie.service', 'angular2/testing', 'angular2/http', 'angular2/http/testing', 'angular2/core'], function(exports_1) {
    var http_intercepter_service_1, open_api_service_1, user_service_1, cookie_service_1, testing_1, http_1, testing_2, core_1;
    return {
        setters:[
            function (http_intercepter_service_1_1) {
                http_intercepter_service_1 = http_intercepter_service_1_1;
            },
            function (open_api_service_1_1) {
                open_api_service_1 = open_api_service_1_1;
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
            testing_1.describe('open api test', function () {
                var connection; //this will be set when a new connection is emitted from the backend.
                var injector = core_1.Injector.resolveAndCreate([
                    testing_2.MockBackend,
                    user_service_1.UserService,
                    cookie_service_1.Cookie,
                    http_intercepter_service_1.HttpIntercepter,
                    open_api_service_1.OpenApi,
                    core_1.provide(http_1.Http, {
                        useFactory: function (backend) {
                            return new http_1.Http(backend, new http_1.BaseRequestOptions());
                        },
                        deps: [testing_2.MockBackend]
                    })
                ]);
                var backend = injector.get(testing_2.MockBackend);
                var openApi = injector.get(open_api_service_1.OpenApi);
                backend.connections.subscribe(function (c) { return connection = c; });
                testing_1.it('get code by user ', function () {
                    var convert2Object = function (source) {
                        if (source == undefined) {
                            return null;
                        }
                        console.log("convert ok");
                        return source;
                    };
                    var list;
                    openApi.getCodesByUser(6, 1, 4).subscribe(function (res) {
                        list = res;
                    }, function (err) {
                        console.log(err);
                    });
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                        body: { "list": [{ "id": 61, "create_date": "2015-09-21 10:00:04", "name": "排序", "description": "排序算法", "user_id": 6, "star": 1 }, { "id": 62, "create_date": "2015-09-29 16:33:46", "name": "杂项", "description": "记录一些看到的好算法", "user_id": 6, "star": 1 }, { "id": 60, "create_date": "2015-09-13 11:00:29", "name": "js学习", "description": "这里是js的学习", "user_id": 6, "star": 0 }, { "id": 64, "create_date": "2016-01-27 17:28:19", "name": "开放测试", "description": "不要点开", "user_id": 6, "star": 0 }], "total": 4, "page": 1, "num": 5 },
                        status: 200
                    })));
                    testing_1.expect(list.num).toBe(5);
                });
            });
        }
    }
});
//# sourceMappingURL=open-api.spec.js.map