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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/module */ "./src/store/module.ts");
/* harmony import */ var _store_epics_login_epic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/epics/login.epic */ "./src/store/epics/login.epic.ts");
/* harmony import */ var _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/login.actions */ "./src/store/actions/login.actions.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_services_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/token.interceptor */ "./src/services/token.interceptor.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// store







var APP_COMMON_MODULES = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
    _store_module__WEBPACK_IMPORTED_MODULE_4__["StoreModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]],
            imports: APP_COMMON_MODULES.slice(),
            providers: [
                _store_epics_login_epic__WEBPACK_IMPORTED_MODULE_5__["LoginEpics"],
                _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_6__["LoginActions"],
                src_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: src_services_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
                    multi: true
                },
            ],
            bootstrap: [_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.title = 'product list!';
    }
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.template.html */ "./src/app/products/products.template.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.template.html":
/*!*************************************************!*\
  !*** ./src/app/products/products.template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    {{title}}\n</div>"

/***/ }),

/***/ "./src/config.file.ts":
/*!****************************!*\
  !*** ./src/config.file.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Example config file,
 * replace with your own
 * url configuration json object.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    "protocol": "https",
    "scheme": "Bearer",
    "urlConfig": {
        "version": "v1",
        "baseUrl": "fluyo.ngrok.io/api",
        "loginEndpoint": "auth/token",
        "logoutEndpoint": "auth/logout",
        "refreshTokenEndpoint": "auth/refresh"
    }
});


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: DEFAULT_PROTOCOL, DEFAULT_AUTH_SCHEME, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PROTOCOL", function() { return DEFAULT_PROTOCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_AUTH_SCHEME", function() { return DEFAULT_AUTH_SCHEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var DEFAULT_PROTOCOL = 'https';
var DEFAULT_AUTH_SCHEME = 'Bearer';
var config = function (configFile) {
    return {
        protocol: configFile.protocol ? configFile.protocol : DEFAULT_PROTOCOL,
        scheme: configFile.scheme ? configFile.scheme : DEFAULT_AUTH_SCHEME,
        urlConfig: {
            baseUrl: configFile.urlConfig.baseUrl,
            version: configFile.urlConfig.version,
            loginEndpoint: configFile.urlConfig.loginEndpoint,
            logoutEndpoint: configFile.urlConfig.logoutEndpoint,
            refreshTokenEndpoint: configFile.urlConfig.refreshTokenEndpoint
        }
    };
};


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
    production: false
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

/***/ "./src/models/login.model.ts":
/*!***********************************!*\
  !*** ./src/models/login.model.ts ***!
  \***********************************/
/*! exports provided: InitalState, LogInModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitalState", function() { return InitalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInModel", function() { return LogInModel; });
var InitalState = {
    username: '',
    password: ''
};
var LogInModel = /** @class */ (function () {
    function LogInModel(model) {
        if (model === void 0) { model = InitalState; }
        this.username = model.username;
        this.password = model.password;
    }
    return LogInModel;
}());



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm5/add/observable/from.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var src_config_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/config.file */ "./src/config.file.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    }
    AuthService.prototype.login = function (loginModel) {
        var _a = Object(src_config__WEBPACK_IMPORTED_MODULE_5__["config"])(src_config_file__WEBPACK_IMPORTED_MODULE_6__["default"]), protocol = _a.protocol, _b = _a.urlConfig, baseUrl = _b.baseUrl, version = _b.version, loginEndpoint = _b.loginEndpoint;
        var loginUrl = protocol + "://" + baseUrl + "/" + version + "/" + loginEndpoint;
        return this.http.post(loginUrl, loginModel)
            .catch(function (err) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(err);
        })
            .map(function (response) {
            // add your own jwt decode implementation
            // and/or error mapping/handling here
            return response;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/token.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/services/token.interceptor.ts ***!
  \*******************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_config_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config.file */ "./src/config.file.ts");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.loginStore.subscribe(function (jwtInfo) {
            var token = jwtInfo.token;
            var authConfig = Object(src_config__WEBPACK_IMPORTED_MODULE_4__["config"])(src_config_file__WEBPACK_IMPORTED_MODULE_3__["default"]);
            request = request.clone({
                setHeaders: {
                    Authorization: authConfig.scheme + " " + token
                }
            });
        });
        return next.handle(request);
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('login'),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TokenInterceptor.prototype, "loginStore", void 0);
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/store/actions/login.actions.ts":
/*!********************************************!*\
  !*** ./src/store/actions/login.actions.ts ***!
  \********************************************/
/*! exports provided: LoginActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function() { return LoginActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/login.model */ "./src/models/login.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginActions = /** @class */ (function () {
    function LoginActions() {
    }
    LoginActions_1 = LoginActions;
    LoginActions.login = function (model) {
        return {
            type: LoginActions_1.LOGIN,
            payload: model
        };
    };
    LoginActions.success = function (jwtInfo) {
        return {
            type: LoginActions_1.LOGIN_SUCCESS,
            payload: jwtInfo
        };
    };
    LoginActions.failed = function (error) {
        return {
            type: LoginActions_1.LOGIN_FAIL,
            payload: new src_models_login_model__WEBPACK_IMPORTED_MODULE_1__["LogInModel"]()
        };
    };
    LoginActions.LOGIN = 'LOGIN/LOGIN';
    LoginActions.LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';
    LoginActions.LOGIN_FAIL = 'LOGIN/LOGIN_FAIL';
    LoginActions.LOGOUT = 'LOGIN/LOGOUT';
    LoginActions = LoginActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoginActions);
    return LoginActions;
    var LoginActions_1;
}());



/***/ }),

/***/ "./src/store/epics.ts":
/*!****************************!*\
  !*** ./src/store/epics.ts ***!
  \****************************/
/*! exports provided: Epics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Epics", function() { return Epics; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _epics_login_epic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epics/login.epic */ "./src/store/epics/login.epic.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Epics = /** @class */ (function () {
    function Epics(loginEpics) {
        this.loginEpics = loginEpics;
    }
    Epics.prototype.createEpics = function () {
        var epics = [];
        epics = this.loginEpics.createEpics().concat(epics);
        return epics;
    };
    Epics = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_epics_login_epic__WEBPACK_IMPORTED_MODULE_1__["LoginEpics"]])
    ], Epics);
    return Epics;
}());



/***/ }),

/***/ "./src/store/epics/login.epic.ts":
/*!***************************************!*\
  !*** ./src/store/epics/login.epic.ts ***!
  \***************************************/
/*! exports provided: LoginEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEpics", function() { return LoginEpics; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/concat */ "./node_modules/rxjs-compat/_esm5/add/operator/concat.js");
/* harmony import */ var rxjs_add_operator_concatMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/concatMap */ "./node_modules/rxjs-compat/_esm5/add/operator/concatMap.js");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/login.actions */ "./src/store/actions/login.actions.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// angular








// app


var LoginEpics = /** @class */ (function () {
    function LoginEpics(authService) {
        var _this = this;
        this.authService = authService;
        this.login = function (action$, store) {
            return action$.ofType(_actions_login_actions__WEBPACK_IMPORTED_MODULE_8__["LoginActions"].LOGIN)
                .concatMap(function (result) {
                var payload = result.payload;
                return _this.authService.login(payload)
                    .map(function (response) {
                    if (response.error) {
                        return _actions_login_actions__WEBPACK_IMPORTED_MODULE_8__["LoginActions"].failed(response.error);
                    }
                    return _actions_login_actions__WEBPACK_IMPORTED_MODULE_8__["LoginActions"].success(response);
                });
            });
        };
    }
    LoginEpics.prototype.createEpics = function () {
        return [Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["createEpicMiddleware"])(this.login)];
    };
    LoginEpics = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], LoginEpics);
    return LoginEpics;
}());



/***/ }),

/***/ "./src/store/model.ts":
/*!****************************!*\
  !*** ./src/store/model.ts ***!
  \****************************/
/*! exports provided: InitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony import */ var _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/login.reducer */ "./src/store/reducers/login.reducer.ts");

var InitialState = {
    login: {
        jwtInfo: _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_0__["JWT_INITIAL_STATE"],
        authenticated: _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_0__["AUTH_INITIAL_STATE"].authenticated
    }
};


/***/ }),

/***/ "./src/store/module.ts":
/*!*****************************!*\
  !*** ./src/store/module.ts ***!
  \*****************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/store/model.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.ts");
/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./epics */ "./src/store/epics.ts");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// The top-level reducers and epics that make up our app's logic.



// redux persist


var STORE_VERSION = 1;
var StoreModule = /** @class */ (function () {
    function StoreModule(ngRedux, devTools, epics) {
        var config = { key: 'jwt-auth-sdk', storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default.a, blacklist: [], version: STORE_VERSION };
        var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistCombineReducers"])(config, _reducers__WEBPACK_IMPORTED_MODULE_3__["rootReducer"]);
        ngRedux.configureStore(persistedReducer, _model__WEBPACK_IMPORTED_MODULE_2__["InitialState"], epics.createEpics().slice());
        Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistStore"])(ngRedux, function () { return ngRedux.getState(); });
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgReduxModule"]],
            exports: [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgReduxModule"]],
            providers: [_epics__WEBPACK_IMPORTED_MODULE_4__["Epics"]]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["DevToolsExtension"], _epics__WEBPACK_IMPORTED_MODULE_4__["Epics"]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/store/reducers.ts":
/*!*******************************!*\
  !*** ./src/store/reducers.ts ***!
  \*******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/login.reducer */ "./src/store/reducers/login.reducer.ts");

var rootReducer = {
    login: _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_0__["loginReducer"]
};


/***/ }),

/***/ "./src/store/reducers/login.reducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/login.reducer.ts ***!
  \*********************************************/
/*! exports provided: AUTH_INITIAL_STATE, JWT_INITIAL_STATE, loginReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_INITIAL_STATE", function() { return AUTH_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_INITIAL_STATE", function() { return JWT_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/login.actions */ "./src/store/actions/login.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var AUTH_INITIAL_STATE = {
    authenticated: false
};
var JWT_INITIAL_STATE = {
    token: '',
    username: '',
    expired: null,
    expires: 0
};
var loginReducer = function (state, action) {
    if (state === void 0) { state = { jwtInfo: JWT_INITIAL_STATE, authenticated: AUTH_INITIAL_STATE.authenticated }; }
    switch (action.type) {
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LoginActions"].LOGIN:
            return __assign({}, state, { authenticated: false });
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LoginActions"].LOGIN_SUCCESS:
            return __assign({}, state, { authenticated: true, jwtInfo: action.payload });
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LoginActions"].LOGIN_FAIL:
            return __assign({}, state, { authenticated: false, jwtInfo: JWT_INITIAL_STATE });
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LoginActions"].LOGOUT:
            return __assign({}, state, { authenticated: false, jwtInfo: JWT_INITIAL_STATE });
        default:
            return state;
    }
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oscardiaz/Documents/usportsnutrition-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map