webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-users/add-users.component.css":
/***/ (function(module, exports) {

module.exports = ".addBtn {\r\n    width : 100px;\r\n}\r\n.card-text {\r\n    margin-bottom: 5px;\r\n    font-size: 0.95rem;\r\n}\r\n.card-body{\r\n    padding : 1rem;\r\n    cursor : pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-users/add-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n\t<!-- Input Form -->\n\t<form #searchForm=\"ngForm\" (ngSubmit)=\"onClickAdd(searchForm)\" autocomplete=\"off\">\n\t\t<div class=\"row ml-1 mt-4\">\t\t\t\t\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<input type=\"text\" name=\"userName\" ngModel class=\"form-control\" #userName=\"ngModel\" required placeholder=\"Enter a Github user\">\n\t\t\t</div>\n\t\t\t<div class=\"col-1\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success form-control addBtn\" [disabled]=\"searchForm.form.invalid\"> Add</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n\t<!-- Alert message -->\n\t<div class=\"alert alert-danger alert-dismissible fade show mt-2\" role=\"alert\" *ngIf=\"!isExists\">\n\t\t<strong> {{errorMsg}} </strong> \n\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetFlag()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<hr>\n\n\t<!-- card Layout -->\n\t<div class=\"row mb-5\" *ngIf=\"usersList.length > 0\">\t\t\t\n\t\t<div class=\"col-3\" *ngFor=\"let usr of usersList\">\t\n\t\t\t<div class=\"card border-info m-1\">\n\t\t\t\t<div class=\"mt-2 ml-2 clearfix\">\n\t\t\t\t\t<img [src]=\"usr.avatar_url\" class=\"rounded-circle float-left\" width='36px' height='36px'>\n\t\t\t\t\t<h4> <a [href]=\"usr.html_url\" class=\"card-link ml-2\" target=\"_blank\"> {{usr.login}} </a> </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\"  [routerLink]=\"['/user', usr.login]\">\t\t\t\t\t\t\n\t\t\t\t\t<p class=\"card-text\"> <strong>Name \t\t: </strong> {{usr.name ? usr.name : 'NA'}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Company  \t: </strong> {{usr.company ? usr.company : 'NA'}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Location \t: </strong> {{usr.location ? usr.location : 'NA'}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Email \t: </strong> {{usr.email ? usr.email : 'NA'}} </p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Followers : </strong> {{usr.followers}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Following : </strong> {{usr.following}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Member Since : </strong> {{usr.created_at | date:'mediumDate'}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Public Repos : </strong> {{usr.public_repos}} </p>\n\t\t\t\t\t<p class=\"card-text\"> <strong>Public Gists : </strong> {{usr.public_gists}} </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\t\t\n\t</div> <!-- End of Card Layout-->\n\n</div>"

/***/ }),

/***/ "./src/app/add-users/add-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_info_service__ = __webpack_require__("./src/app/user-info.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddUsersComponent = /** @class */ (function () {
    function AddUsersComponent(_usrService) {
        this._usrService = _usrService;
        this.usersList = [];
        this.isExists = true;
    }
    AddUsersComponent.prototype.ngOnInit = function () {
        var lcl_storage = window.localStorage.getItem('gitUsers');
        if (lcl_storage != null) {
            var objArray = JSON.parse(lcl_storage);
            this.usersList = objArray.slice();
        }
    };
    AddUsersComponent.prototype.onClickAdd = function (request) {
        var _this = this;
        var form = request.form, usrName = request.value.userName;
        if (this.dupCheck(usrName)) {
            this._usrService.getUserDetails(usrName).subscribe(function (res) {
                _this.isExists = true;
                _this.user = __assign({}, res);
                _this.usersList.push(_this.user);
                window.localStorage.setItem('gitUsers', JSON.stringify(_this.usersList));
                form.reset();
            }, function (err) {
                if (err.status == 404) {
                    _this.isExists = false;
                    _this.errorMsg = "User is not found";
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            this.isExists = false;
            this.errorMsg = "User is already exists";
        }
    };
    AddUsersComponent.prototype.dupCheck = function (usrName) {
        var res = this.usersList.findIndex(function (user) { return user.login.toLowerCase() == usrName.toLowerCase(); });
        return res > -1 ? false : true;
    };
    AddUsersComponent.prototype.resetFlag = function () {
        this.isExists = true;
    };
    AddUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-users',
            template: __webpack_require__("./src/app/add-users/add-users.component.html"),
            styles: [__webpack_require__("./src/app/add-users/add-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_info_service__["a" /* UserInfoService */]])
    ], AddUsersComponent);
    return AddUsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_users_add_users_component__ = __webpack_require__("./src/app/add-users/add-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_details_user_details_component__ = __webpack_require__("./src/app/user-details/user-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__add_users_add_users_component__["a" /* AddUsersComponent */], pathMatch: 'full' },
    { path: 'user/:userID', component: __WEBPACK_IMPORTED_MODULE_3__user_details_user_details_component__["a" /* UserDetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    color :white;\r\n    text-align: center;\r\n    font-style: italic;    \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\"> Github Users Search </a>\t\t\n    </nav>\n\n    <router-outlet></router-outlet>\n\n    <footer class=\"fixed-bottom bg-primary container footer\">Developed by Arunprabu V</footer>\n    <!-- <footer class=\"footer bg-primary text-center row\">\n      <div class=\"font-italic text-white\">Developed by Arunprabu V</div>\n    </footer> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_users_add_users_component__ = __webpack_require__("./src/app/add-users/add-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__ = __webpack_require__("./src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_service__ = __webpack_require__("./src/app/user-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__add_users_add_users_component__["a" /* AddUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__["a" /* UserDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_info_service__["a" /* UserInfoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<!-- User layout -->\n\t<div class=\"mt-3 ml-2 clearfix\" *ngIf=\"userInfo\">\n\t\t<img [src]=\"userInfo.avatar_url\" class=\"rounded-circle float-left\" width=\"50px\" height=\"50px\">\n\t\t<h4 class=\"mt-2\"><a [href]=\"userInfo.html_url\" class=\"ml-4\" target=\"_blank\"> {{userInfo.login}} </a></h4>\n\t\t<a [routerLink]=\"['/']\" class=\"float-right\"> Go Back </a>\n\t</div>\t\n\n\t<hr>\n\n\t<div class=\"row mb-5\">\n\t\t<!-- Repositories Layout -->\n\t\t<div class=\"col-6 border-right\">\n\t\t\t<h5 class=\"text-center\">Repositories</h5>\n\t\t\t<div *ngIf=\"repoList?.length > 0\">\n\t\t\t\t<ul class=\"list-group list-group-flush\" *ngFor=\"let repo of repoList\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<h5><a [href]=\"repo.html_url\" target=\"_blank\"> {{repo.name}} </a></h5>\n\t\t\t\t\t\t<p> {{repo.description}} </p>\t\t\t\t\t\t\n\t\t\t\t\t\t<p *ngIf=\"repo.pushed_at\"><small> Updated on {{ repo.pushed_at | date:'mediumDate'}} </small></p>\n\t\t\t\t\t\t<p *ngIf=\"!repo.pushed_at\"><small> Created on {{ repo.created_at | date:'mediumDate'}} </small></p>\t\t\t\t\t\t\n\t\t\t\t\t</li>\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center mt-5\" *ngIf=\"repoList?.length == 0\">\n\t\t\t\t<p class=\"text-danger\">Doesn't have any public repositories yet...</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Followers Layout -->\n\t\t<div class=\"col-6\">\n\t\t\t<h5 class=\"text-center\">Followers</h5>\n\t\t\t<div *ngIf=\"followersList?.length > 0\">\n\t\t\t\t<ul class=\"list-group list-group-flush\" *ngFor=\"let follower of followersList\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<img [src]=\"follower.avatar_url\" class=\"img-thumbnail float-left\" width=\"50px\" height=\"50px\">\n\t\t\t\t\t\t<h5 class=\"mt-2\"><a [href]=\"follower.html_url\" class=\"ml-4\" target=\"_blank\"> {{follower.login}} </a></h5>\n\t\t\t\t\t</li>\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center mt-5\" *ngIf=\"followersList?.length == 0\">\n\t\t\t\t<p class=\"text-danger\">Doesn't have any followers yet...</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_service__ = __webpack_require__("./src/app/user-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(_actRoute, _usrService) {
        this._actRoute = _actRoute;
        this._usrService = _usrService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._actRoute.params.subscribe(function (params) {
            _this.userID = params.userID;
            _this.getUserInfo();
            _this.getRepo();
            _this.getFollowers();
        });
    };
    UserDetailsComponent.prototype.getRepo = function () {
        var _this = this;
        this._usrService.getRepositoryList(this.userID).subscribe(function (data) {
            _this.repoList = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailsComponent.prototype.getFollowers = function () {
        var _this = this;
        this._usrService.getFollowersList(this.userID).subscribe(function (data) {
            _this.followersList = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._usrService.getUserDetails(this.userID).subscribe(function (data) {
            _this.userInfo = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-details',
            template: __webpack_require__("./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__("./src/app/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__user_info_service__["a" /* UserInfoService */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoService = /** @class */ (function () {
    function UserInfoService(_http) {
        this._http = _http;
        this.usersApiURL = 'https://api.github.com/users/';
    }
    UserInfoService.prototype.getUserDetails = function (userName) {
        return this._http.get(this.usersApiURL + userName);
    };
    UserInfoService.prototype.getRepositoryList = function (userName) {
        return this._http.get(this.usersApiURL + userName + '/repos');
    };
    UserInfoService.prototype.getFollowersList = function (userName) {
        return this._http.get(this.usersApiURL + userName + '/followers');
    };
    UserInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map