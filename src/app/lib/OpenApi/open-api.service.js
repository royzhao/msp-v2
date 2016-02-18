System.register(['angular2/core', '../HttpIntercepter/http-intercepter.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_intercepter_service_1;
    var baseUrl, OpenApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_intercepter_service_1_1) {
                http_intercepter_service_1 = http_intercepter_service_1_1;
            }],
        execute: function() {
            baseUrl = ' ';
            OpenApi = (function () {
                function OpenApi(_service) {
                    this._service = _service;
                }
                //code api
                OpenApi.prototype.getCodesByUser = function (userid, page, num, key) {
                    return this._service.callApi(baseUrl + "/user/code/" + userid + "?page=" + page + "&num=" + num + "&key=" + key, "GET", null);
                };
                ;
                OpenApi.prototype.getCodeById = function (id) {
                    return this._service.callApi(baseUrl + "/code/" + id, "GET", null);
                };
                ;
                OpenApi.prototype.addCode2User = function (userid, codeinfo) {
                    return this._service.callApi(baseUrl + "/user/code/" + userid, "POST", null, codeinfo);
                };
                ;
                OpenApi.prototype.updateCode = function (userid, codeinfo) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeinfo.id, "PUT", null, codeinfo);
                };
                ;
                OpenApi.prototype.deleteCode = function (userid, codeid) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid, "DELETE");
                };
                ;
                OpenApi.prototype.getCodeSteps = function (codeid) {
                    return this._service.callApi(baseUrl + "/code/" + codeid + "/step", "GET");
                };
                ;
                OpenApi.prototype.getCodeStepById = function (codeid, stepid) {
                    return this._service.callApi(baseUrl + "/code/" + codeid + "/step/" + stepid, "GET");
                };
                ;
                OpenApi.prototype.addCodeStep = function (userid, codeid, codestep) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/step", "POST", null, codestep);
                };
                ;
                OpenApi.prototype.updateCodeStepCmd = function (userid, codeid, stepid, data) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/step/" + stepid + "/cmd", "PUT", null, data);
                };
                ;
                OpenApi.prototype.updateCodeStep = function (userid, codeid, stepid, codestep) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/step/" + stepid, "PUT", null, codestep);
                };
                ;
                OpenApi.prototype.deleteCodeStep = function (userid, codeid, stepid) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/step/" + stepid, "DELETE");
                };
                ;
                OpenApi.prototype.getCodeStepDetail = function (codeid, stepid) {
                    return this._service.callApi(baseUrl + "/code/" + codeid + "/step/" + stepid + "/detail", "GET");
                };
                ;
                OpenApi.prototype.updateCodeStepDetail = function (userid, codeid, stepid, codestepdetail) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/step/" + stepid + "/detail", "PUT", codestepdetail);
                };
                ;
                OpenApi.prototype.coderun = function (imageid, runinfo) {
                    return this._service.callApi(baseUrl + "/coderun/" + imageid, "PUT", runinfo);
                };
                ;
                OpenApi.prototype.coderunRes = function (runid) {
                    return this._service.callApi(baseUrl + "/coderun/" + runid, "GET");
                };
                ;
                OpenApi.prototype.updateCodeStar = function (userid, codeid) {
                    return this._service.callApi(baseUrl + "/code/star/" + userid + "/" + codeid, "PUT", { userid: userid, codeid: codeid });
                };
                ;
                OpenApi.prototype.getHotCodes = function (page, num, key) {
                    if (page == undefined || page == null) {
                        page = 1;
                    }
                    if (num == undefined || num == null) {
                        num = 5;
                    }
                    if (key == undefined || key == null) {
                        key = "";
                    }
                    return this._service.callApi(baseUrl + "/code?page=" + page + "&num=" + num + "&key=" + key, "GET");
                };
                ;
                OpenApi.prototype.getCodeIssues = function (codeid, page, num, key) {
                    if (page == undefined || page == null) {
                        page = 1;
                    }
                    if (num == undefined || num == null) {
                        num = 5;
                    }
                    if (key == undefined || key == null) {
                        key = "";
                    }
                    return this._service.callApi(baseUrl + "/code/" + codeid + "/issues?page=" + page + "&num=" + num + "&key=" + key, "GET");
                };
                ;
                OpenApi.prototype.addCodeIssue = function (userid, codeid, obj) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/issue", "POST", obj);
                };
                ;
                OpenApi.prototype.updateCodeIssue = function (userid, codeid, issueid, obj) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/issue/" + issueid, "PUT", obj);
                };
                ;
                OpenApi.prototype.deleteCodeIssue = function (userid, codeid, issueid) {
                    return this._service.callApi(baseUrl + "/code/" + userid + "/" + codeid + "/issue/" + issueid, "DELETE");
                };
                ;
                OpenApi.prototype.getIssuesComments = function (issueid, page, num, key) {
                    if (page == undefined || page == null) {
                        page = 1;
                    }
                    if (num == undefined || num == null) {
                        num = 5;
                    }
                    if (key == undefined || key == null) {
                        key = "";
                    }
                    return this._service.callApi(baseUrl + "/issue/" + issueid + "/comments?page=" + page + "&num=" + num + "&key=" + key, "GET");
                };
                ;
                OpenApi.prototype.addCodeIssueComment = function (userid, issueid, obj) {
                    return this._service.callApi(baseUrl + "/issue/" + userid + "/" + issueid + "/comment", "POST", obj);
                };
                ;
                OpenApi.prototype.updateCodeIssueComment = function (userid, issueid, commentid, obj) {
                    return this._service.callApi(baseUrl + "/issue/" + userid + "/" + issueid + "/comment/" + commentid, "PUT", obj);
                };
                ;
                OpenApi.prototype.deleteCodeIssueComment = function (userid, issueid, commentid) {
                    return this._service.callApi(baseUrl + "/issue/" + userid + "/" + issueid + "/comment/" + commentid, "DELETE");
                };
                ;
                OpenApi.prototype.getImageIssues = function (imageid, page, num, key) {
                    if (page == undefined || page == null) {
                        page = 1;
                    }
                    if (num == undefined || num == null) {
                        num = 5;
                    }
                    if (key == undefined || key == null) {
                        key = "";
                    }
                    return this._service.callApi(baseUrl + "/image/" + imageid + "/issues?page=" + page + "&num=" + num + "&key=" + key, "GET");
                };
                ;
                OpenApi.prototype.addImageIssue = function (userid, imageid, obj) {
                    return this._service.callApi(baseUrl + "/image/" + userid + "/" + imageid + "/issue", "POST", obj);
                };
                ;
                OpenApi.prototype.updateImageIssue = function (userid, imageid, issueid, obj) {
                    return this._service.callApi(baseUrl + "/image/" + userid + "/" + imageid + "/issue/" + issueid, "PUT", obj);
                };
                ;
                OpenApi.prototype.deleteImageIssue = function (userid, imageid, issueid) {
                    return this._service.callApi(baseUrl + "/image/" + userid + "/" + imageid + "/issue/" + issueid, "DELETE");
                };
                ;
                OpenApi.prototype.getImageIssuesComments = function (issueid, page, num, key) {
                    if (page == undefined || page == null) {
                        page = 1;
                    }
                    if (num == undefined || num == null) {
                        num = 5;
                    }
                    if (key == undefined || key == null) {
                        key = "";
                    }
                    return this._service.callApi(baseUrl + "/image/issue/" + issueid + "/comments?page=" + page + "&num=" + num + "&key=" + key, "GET");
                };
                ;
                OpenApi.prototype.addImageIssueComment = function (userid, issueid, obj) {
                    return this._service.callApi(baseUrl + "/image/issue/" + userid + "/" + issueid + "/comment", "POST", obj);
                };
                ;
                OpenApi.prototype.updateImageIssueComment = function (userid, issueid, commentid, obj) {
                    return this._service.callApi(baseUrl + "/image/issue/" + userid + "/" + issueid + "/comment/" + commentid, "PUT", obj);
                };
                ;
                OpenApi.prototype.deleteImageIssueComment = function (userid, issueid, commentid) {
                    return this._service.callApi(baseUrl + "/image/issue/" + userid + "/" + issueid + "/comment/" + commentid, "DELETE");
                };
                ;
                OpenApi.prototype.getUserInfoById = function (userid) {
                    return this._service.callApi(baseUrl + "/user/info/get/" + userid, "GET");
                };
                OpenApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_intercepter_service_1.HttpIntercepter])
                ], OpenApi);
                return OpenApi;
            })();
            exports_1("OpenApi", OpenApi);
        }
    }
});
//# sourceMappingURL=open-api.service.js.map