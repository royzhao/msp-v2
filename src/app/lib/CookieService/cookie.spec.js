System.register(['./cookie.service'], function(exports_1) {
    var cookie_service_1;
    return {
        setters:[
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }],
        execute: function() {
            describe('Cookie', function () {
                it('get cookie in learn4me.com', function () {
                    var cookie = new cookie_service_1.Cookie();
                    expect(cookie.getCookie('u_id')).toEqual('6');
                });
            });
        }
    }
});
//# sourceMappingURL=cookie.spec.js.map