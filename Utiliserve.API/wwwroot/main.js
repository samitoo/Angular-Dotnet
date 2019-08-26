(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You shall not pass!!');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes-guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes-guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you ant to continue? Changes will be lost');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/_resolvers/form-list-resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/_resolvers/form-list-resolver.ts ***!
  \**************************************************/
/*! exports provided: FormListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListResolver", function() { return FormListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/form.service */ "./src/app/_services/form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormListResolver = /** @class */ (function () {
    function FormListResolver(formService, router, alertify) {
        this.formService = formService;
        this.router = router;
        this.alertify = alertify;
    }
    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    FormListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.formService.getForms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retreiving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    FormListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], FormListResolver);
    return FormListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-detail-resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/member-detail-resolver.ts ***!
  \******************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retreiving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-edit-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-edit-resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retreiving your data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-list-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-list-resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retreiving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // wrapper class, so generic
        ,
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        // rxjs operators are what allow to store items from requests, ie the token
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                console.log(_this.decodedToken);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + 'register', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error.errors;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/form.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/form.service.ts ***!
  \*******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
        this.bareUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    FormService.prototype.getForms = function () {
        return this.http.get(this.bareUrl + 'forms');
    };
    FormService.prototype.getForm = function (id) {
        return this.http.get(this.bareUrl + 'forms/' + id);
    };
    FormService.prototype.updateForm = function (id, form) {
        return this.http.put(this.bareUrl + 'forms/' + id, form);
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.bareUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.bareUrl + 'users');
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.bareUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.bareUrl + 'users/' + id, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/api/api.component.css":
/*!***************************************!*\
  !*** ./src/app/api/api.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/api/api.component.html":
/*!****************************************!*\
  !*** ./src/app/api/api.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <img class=\"mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n  <div class=\"checkbox mb-3\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>"

/***/ }),

/***/ "./src/app/api/api.component.ts":
/*!**************************************!*\
  !*** ./src/app/api/api.component.ts ***!
  \**************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    ApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api',
            template: __webpack_require__(/*! ./api.component.html */ "./src/app/api/api.component.html"),
            styles: [__webpack_require__(/*! ./api.component.css */ "./src/app/api/api.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n  <app-nav></app-nav>\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Utiliserve';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_resolvers/member-detail-resolver */ "./src/app/_resolvers/member-detail-resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_resolvers/member-list-resolver */ "./src/app/_resolvers/member-list-resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_resolvers/member-edit-resolver */ "./src/app/_resolvers/member-edit-resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes-guard */ "./src/app/_guards/prevent-unsaved-changes-guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _resolvers_form_list_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_resolvers/form-list-resolver */ "./src/app/_resolvers/form-list-resolver.ts");
/* harmony import */ var _forms_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./forms/form-list/form-list.component */ "./src/app/forms/form-list/form-list.component.ts");
/* harmony import */ var _forms_form_card_form_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forms/form-card/form-card.component */ "./src/app/forms/form-card/form-card.component.ts");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./api/api.component */ "./src/app/api/api.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_15__["MemberListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_22__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__["MemberEditComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                _forms_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_30__["FormListComponent"],
                _forms_form_card_form_card_component__WEBPACK_IMPORTED_MODULE_31__["FormCardComponent"],
                _api_api_component__WEBPACK_IMPORTED_MODULE_32__["ApiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_18__["appRoutes"]),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_14__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_23__["MemberDetailResolver"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_24__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__["MemberEditResolver"],
                _resolvers_form_list_resolver__WEBPACK_IMPORTED_MODULE_29__["FormListResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__["PreventUnsavedChanges"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: .875rem;\r\n  }\r\n  \r\n  .feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  /*\r\n   * Sidebar\r\n   */\r\n  \r\n  .sidebar {\r\n    position: relative;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 48px 0 0; /* Height of navbar */\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sidebar-sticky {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n    }\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  /*\r\n   * Content\r\n   */\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 133px; /* Space for fixed navbar */\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    [role=\"main\"] {\r\n      padding-top: 48px; /* Space for fixed navbar */\r\n    }\r\n  }\r\n  \r\n  /*\r\n   * Navbar\r\n   */\r\n  \r\n  .navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar .form-control {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n<style>\n  .bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  @media (min-width: 768px) {\n    .bd-placeholder-img-lg {\n      font-size: 3.5rem;\n    }\n  }\n</style>\n<!-- Custom styles for this template -->\n\n</head>\n<div class=\"container mt-5\">\n<nav class=\"navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow mt-10 \">\n<a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"/home\">FormzEngine</a>\n</nav>\n\n<div class=\"container-fluid\">\n<div class=\"row\">\n<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"/dashboard\">\n          <span data-feather=\"home\"></span>\n          Dashboard <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\" le\"></span>\n          Orders\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"shopping-cart\"></span>\n          Products\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"users\"></span>\n          Customers\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"bar-chart-2\"></span>\n          Reports\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"layers\"></span>\n          Integrations\n        </a>\n      </li>\n    </ul>\n\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n      <span>Saved reports</span>\n      <a class=\"d-flex align-items-center text-muted\" href=\"/dashboard\">\n        <span data-feather=\"plus-circle\"></span>\n      </a>\n    </h6>\n    <ul class=\"nav flex-column mb-2\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"file-text\"></span>\n          Current month\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"file-text\"></span>\n          Last quarter\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"file-text\"></span>\n          Social engagement\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <span data-feather=\"file-text\"></span>\n          Year-end sale\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n    <h1 class=\"h2\">Dashboard</h1>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"btn-group mr-2\">\n        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Share</button>\n        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Export</button>\n      </div>\n      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n        <span data-feather=\"calendar\"></span>\n        This week\n      </button>\n    </div>\n  </div>\n\n  <!--<canvas class=\"my-4 w-100\" id=\"myChart\" width=\"900\" height=\"380\"></canvas>-->\n\n  <h2>Section title</h2>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-sm\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Header</th>\n          <th>Header</th>\n          <th>Header</th>\n          <th>Header</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1,001</td>\n          <td>Lorem</td>\n          <td>ipsum</td>\n          <td>dolor</td>\n          <td>sit</td>\n        </tr>\n        <tr>\n          <td>1,002</td>\n          <td>amet</td>\n          <td>consectetur</td>\n          <td>adipiscing</td>\n          <td>elit</td>\n        </tr>\n        <tr>\n          <td>1,003</td>\n          <td>Integer</td>\n          <td>nec</td>\n          <td>odio</td>\n          <td>Praesent</td>\n        </tr>\n        <tr>\n          <td>1,003</td>\n          <td>libero</td>\n          <td>Sed</td>\n          <td>cursus</td>\n          <td>ante</td>\n        </tr>\n        <tr>\n          <td>1,004</td>\n          <td>dapibus</td>\n          <td>diam</td>\n          <td>Sed</td>\n          <td>nisi</td>\n        </tr>\n        <tr>\n          <td>1,005</td>\n          <td>Nulla</td>\n          <td>quis</td>\n          <td>sem</td>\n          <td>at</td>\n        </tr>\n        <tr>\n          <td>1,006</td>\n          <td>nibh</td>\n          <td>elementum</td>\n          <td>imperdiet</td>\n          <td>Duis</td>\n        </tr>\n        <tr>\n          <td>1,007</td>\n          <td>sagittis</td>\n          <td>ipsum</td>\n          <td>Praesent</td>\n          <td>mauris</td>\n        </tr>\n        <tr>\n          <td>1,008</td>\n          <td>Fusce</td>\n          <td>nec</td>\n          <td>tellus</td>\n          <td>sed</td>\n        </tr>\n        <tr>\n          <td>1,009</td>\n          <td>augue</td>\n          <td>semper</td>\n          <td>porta</td>\n          <td>Mauris</td>\n        </tr>\n        <tr>\n          <td>1,010</td>\n          <td>massa</td>\n          <td>Vestibulum</td>\n          <td>lacinia</td>\n          <td>arcu</td>\n        </tr>\n        <tr>\n          <td>1,011</td>\n          <td>eget</td>\n          <td>nulla</td>\n          <td>Class</td>\n          <td>aptent</td>\n        </tr>\n        <tr>\n          <td>1,012</td>\n          <td>taciti</td>\n          <td>sociosqu</td>\n          <td>ad</td>\n          <td>litora</td>\n        </tr>\n        <tr>\n          <td>1,013</td>\n          <td>torquent</td>\n          <td>per</td>\n          <td>conubia</td>\n          <td>nostra</td>\n        </tr>\n        <tr>\n          <td>1,014</td>\n          <td>per</td>\n          <td>inceptos</td>\n          <td>himenaeos</td>\n          <td>Curabitur</td>\n        </tr>\n        <tr>\n          <td>1,015</td>\n          <td>sodales</td>\n          <td>ligula</td>\n          <td>in</td>\n          <td>libero</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</main>\n</div>\n</div>\n</div>\n\n<script>\n\n function Uncharted() {\n    // Graphs\n    var ctx = document.getElementById('myChart')\n    // eslint-disable-next-line no-unused-vars\n    var myChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        labels: [\n        'Sunday',\n        'Monday',\n        'Tuesday',\n        'Wednesday',\n        'Thursday',\n        'Friday',\n        'Saturday'\n        ],\n        datasets: [{\n        data: [\n            15339,\n            21345,\n            18483,\n            24003,\n            23489,\n            24092,\n            12034\n        ],\n        lineTension: 0,\n        backgroundColor: 'transparent',\n        borderColor: '#007bff',\n        borderWidth: 4,\n        pointBackgroundColor: '#007bff'\n        }]\n    },\n    options: {\n        scales: {\n        yAxes: [{\n            ticks: {\n            beginAtZero: false\n            }\n        }]\n        },\n        legend: {\n        display: false\n        }\n    }\n    })\n}\n</script>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-card/form-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forms/form-card/form-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img{\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card img{\r\n    -webkit-transform: scale(1.0, 1.0);\r\n            transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper{\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons{\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons{\r\n    bottom: 0; \r\n    opacity: 1;\r\n}\r\n\r\n.animate{\r\n    transition: all 0.3s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/forms/form-card/form-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/forms/form-card/form-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"/assets/list_640.png\" alt=\"\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-user\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-heart\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-envelope\"></i></button></li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>\n      {{form.formname}}, {{form.id}}\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{form.created}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/form-card/form-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/form-card/form-card.component.ts ***!
  \********************************************************/
/*! exports provided: FormCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCardComponent", function() { return FormCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormCardComponent = /** @class */ (function () {
    function FormCardComponent() {
    }
    FormCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormCardComponent.prototype, "form", void 0);
    FormCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-card',
            template: __webpack_require__(/*! ./form-card.component.html */ "./src/app/forms/form-card/form-card.component.html"),
            styles: [__webpack_require__(/*! ./form-card.component.css */ "./src/app/forms/form-card/form-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormCardComponent);
    return FormCardComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-list/form-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forms/form-list/form-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-list/form-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/forms/form-list/form-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div *ngFor=\"let form of forms\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-form-card [form]=\"form\"></app-form-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/form-list/form-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/form-list/form-list.component.ts ***!
  \********************************************************/
/*! exports provided: FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return FormListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormListComponent = /** @class */ (function () {
    function FormListComponent(alertify, route) {
        this.alertify = alertify;
        this.route = route;
    }
    FormListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.forms = data['forms'];
        });
    };
    FormListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-list',
            template: __webpack_require__(/*! ./form-list.component.html */ "./src/app/forms/form-list/form-list.component.html"),
            styles: [__webpack_require__(/*! ./form-list.component.css */ "./src/app/forms/form-list/form-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FormListComponent);
    return FormListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"old\" style=\"display:none;\">\n  <div class=\"container mt-5\">\n    <div *ngIf=\"!registerMode\" style=\"text-align: center\">\n      <h1>Find your match</h1>\n      <p class=\"lead\">Come on in to view your matches... All you need to do is sign up!</p>\n      <div class=\"text-center\">\n        <button class=\"btn btn-primary btn-lg mr-2\"(click)=\"registerToggle()\">Register</button>\n        <button class=\"btn btn-info btn-lg\">Learn more</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"registerMode\" class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-4\">\n            <!--[] is sending data down to child, () is sending data from child up to parent-->\n            <!--[valuesFromHome]=\"values\"-->\n            <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<main role=\"main\">\n<div *ngIf=\"!registerMode\" class=\"homeSplash\">\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Utiliserve FormzEngine</h1>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n      <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"registerToggle()\">Register Now &raquo;</a></p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <!-- Example row of columns -->\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n          Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        <p><a class=\"btn btn-secondary\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n          Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        <p><a class=\"btn btn-secondary\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, \n          tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        <p><a class=\"btn btn-secondary\" role=\"button\">View details &raquo;</a></p>\n      </div>\n    </div>\n\n    <hr>\n  </div>\n\n  </div> <!-- /container -->\n  <div class=\"container mt-5\">\n    <div *ngIf=\"registerMode\" class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-4\">\n              <!--[] is sending data down to child, () is sending data from child up to parent-->\n              <!--[valuesFromHome]=\"values\"-->\n              <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</main>\n\n<footer class=\"container\">\n  <p>&copy; HemingwayWest 2019</p>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        //values: any;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.getValues();
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    // getValues() {
    //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
    //     this.values = response;
    //   }, error => {
    //     console.log(error);
    //   });
    // }
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lists works!\n</p>\n"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img{\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card img{\r\n    -webkit-transform: scale(1.0, 1.0);\r\n            transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper{\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons{\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons{\r\n    bottom: 0; \r\n    opacity: 1;\r\n}\r\n\r\n.animate{\r\n    transition: all 0.3s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"{{user.photoUrl}}\" alt=\"{{user.knownAs}}\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/members', user.id]\" ><i class=\"fa fa-user\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-heart\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"><i class=\"fa fa-envelope\"></i></button></li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>\n      {{user.knownAs}}, {{user.age}}\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{user.city}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent() {
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body{\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer{\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <h1>{{user.knownAs}}'s Profile</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n        <div class=\"card\">\n          <img class=\"card-img-top img-thumbnail\" src=\"{{user.photoUrl}}\" alt=\"{{user.knownAs}}\">\n          <div class=\"card-body\">\n            <div>\n              <strong>Location:</strong>\n              <p>{{user.city}}, {{user.country}}</p>\n            </div>\n            <div>\n              <strong>Age:</strong>\n              <p>{{user.age}}</p>\n            </div>\n            <div>\n              <strong>Last Active:</strong>\n              <p>{{user?.lastActive}}</p>\n            </div>\n            <div>\n              <strong>Member Since:</strong>\n              <p>{{user.created}}</p>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"btn-group d-flex\">\n              <button class=\"btn btn-primary w-100\">Like</button>\n              <button class=\"btn btn-success w-100\">Message</button>\n            </div>\n          </div>\n        </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"about {{user?.knownAs}}\">\n            <h4>Description:</h4>\n            <p> {{user.introduction}}</p>\n            <h4>Looking for</h4>\n            <p>{{user.lookingFor}}</p>\n          </tab>\n          <tab heading=\"Interests\">\n            <h4>Interests</h4>\n            <p>{{user.interests}}</p>\n          </tab>\n          <tab heading=\"Photos\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n          </tab>\n          <tab heading=\"Messages\">\n            <p>Messages will go here</p>\n          </tab>\n        </tabset>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We subsribe to the resolver we created and use the name we gave the resolver in the routers.ts
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                large: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageUrls;
    };
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body{\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer{\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><h1>Your Profile</h1></div>\n    <div class=\"col-sm-8\">\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\n        <strong>Information:</strong>You have made changes, any unsaved changes will be lost!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n        <div class=\"card\">\n          <img class=\"card-img-top img-thumbnail\" src=\"{{user.photoUrl}}\" alt=\"{{user.knownAs}}\">\n          <div class=\"card-body\">\n            <div>\n              <strong>Location:</strong>\n              <p>{{user.city}}, {{user.country}}</p>\n            </div>\n            <div>\n              <strong>Age:</strong>\n              <p>{{user.age}}</p>\n            </div>\n            <div>\n              <strong>Last Active:</strong>\n              <p>{{user?.lastActive}}</p>\n            </div>\n            <div>\n              <strong>Member Since:</strong>\n              <p>{{user.created}}</p>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n              <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\n          </div>\n        </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n                <h4>Description:</h4>\n                <textarea name=\"introduction\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.introduction\"></textarea>\n                <h4>Looking for</h4>\n                <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.lookingFor\"></textarea>\n                <h4>Interests</h4>\n                <textarea name=\"interests\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.interests\"></textarea>\n                <h4>Location Details:</h4>\n                <div class=\"form-inline\">\n                  <label for=\"city\">City</label>\n                  <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\n                  <label for=\"country\">Country</label>\n                  <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.country\">\n                </div>\n            </form>\n            \n          </tab>\n          <tab heading=\"Edit Photos\">\n            <p>Photo edit will go here</p>\n          </tab>\n        </tabset>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user);
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated Successfully');
            // removes the forms dirty state to hide the alert
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(alertify, route) {
        this.alertify = alertify;
        this.route = route;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loadUsers();
        this.route.data.subscribe(function (data) {
            _this.users = data['users'];
        });
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\" >Utiliserve</a>\n\n      <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" >DashBoard</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" >\n          <a class=\"nav-link\" [routerLink]=\"['/forms']\">Forms</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/admin']\">API</a>\n        </li>\n      </ul>\n  \n      <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle text-light\" dropdownToggle>\n          Welcome {{authService.decodedToken?.unique_name | titlecase}}\n        </a>\n      \n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\"><i class=\"fa fa-user\"></i>Edit Profile</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n        </div>\n      </div>\n  \n  \n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\n        <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" requided [(ngModel)]=\"model.password\">\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n      </form>\n  </div>\n  \n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        // to store the username and pw
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('logged in successfully');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" requied name=\"username\" [(ngModel)]=\"model.username\" placeholder=\"Username\">\n  </div>\n\n  <!-- <div class=\"form-group\">\n    <label for=\"favoriteValue\">What is your favoirte value?</label>\n    <select class=\"form-control\" id=\"favoriteValue\">\n      <option *ngFor=\"let value of valuesFromHome\" [value]=\"value\">{{value.name}}</option>\n    </select>\n  </div> -->\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" required name=\"pssword\" [(ngModel)]=\"model.password\" placeholder=\"Password\">\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n  \n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        // @Input() valuesFromHome: any;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.authService.register(this.model).subscribe(function () {
            _this.alertify.success('registration successful');
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/member-detail-resolver */ "./src/app/_resolvers/member-detail-resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_resolvers/member-list-resolver */ "./src/app/_resolvers/member-list-resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_resolvers/member-edit-resolver */ "./src/app/_resolvers/member-edit-resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes-guard */ "./src/app/_guards/prevent-unsaved-changes-guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _resolvers_form_list_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/form-list-resolver */ "./src/app/_resolvers/form-list-resolver.ts");
/* harmony import */ var _forms_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/form-list/form-list.component */ "./src/app/forms/form-list/form-list.component.ts");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/api.component */ "./src/app/api/api.component.ts");















var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
            { path: 'forms', component: _forms_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_13__["FormListComponent"], resolve: { forms: _resolvers_form_list_resolver__WEBPACK_IMPORTED_MODULE_12__["FormListResolver"] } },
            { path: 'admin', component: _api_api_component__WEBPACK_IMPORTED_MODULE_14__["ApiComponent"] },
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"], resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"], resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["MemberDetailResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"], resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberEditResolver"] },
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__["PreventUnsavedChanges"]] },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"] },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"] },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\E-Documents\Projects\.net\dotnet-dating\Utiliserve-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map