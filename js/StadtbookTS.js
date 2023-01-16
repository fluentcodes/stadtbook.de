/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Cite.ts":
/*!*********************!*\
  !*** ./src/Cite.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cite = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var Cite = /** @class */ (function (_super) {
    __extends(Cite, _super);
    function Cite(query) {
        var _this = _super.call(this, query) || this;
        _super.prototype.setUrl.call(_this, "../data/Cites.json");
        _super.prototype.setTargetHTML.call(_this, "info-cite");
        return _this;
    }
    Cite.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, length, selected, cite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasUrl()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch(_super.prototype.getUrl.call(this))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json == undefined) {
                            return [2 /*return*/];
                        }
                        length = json.length;
                        selected = Math.floor(Math.random() * length);
                        cite = json[selected];
                        _super.prototype.setContent.call(this, cite.cite + ' <strong>(' + cite.author + ')</strong>');
                        _super.prototype.view.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Cite;
}(Loader_1.Loader));
exports.Cite = Cite;


/***/ }),

/***/ "./src/DayInfo.ts":
/*!************************!*\
  !*** ./src/DayInfo.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DayInfo = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var DayInfo = /** @class */ (function (_super) {
    __extends(DayInfo, _super);
    function DayInfo(query) {
        var _this = _super.call(this, query) || this;
        _this.latitude = 48.1372;
        _this.longitude = 11.5755;
        _this.sunDown = 24.0;
        _this.sunRise = 0.0;
        _super.prototype.setTargetHTML.call(_this, "info-day");
        var location = document.location.href;
        var result = location.match("[0-9]{4}\-[0-9]{2}\-[0-9]{2}");
        if (result != null) {
            _this.actual = new Date("" + result);
        }
        else {
            _this.actual = new Date();
        }
        return _this;
    }
    DayInfo.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.compute();
                _super.prototype.setContent.call(this, 'Sonnenaufgang: <strong>' + this.displaySunRise() +
                    '</strong> - Sonnenuntergang: <strong>' + this.displaySunDown() +
                    '</strong> - Tagesdauer: <strong>' + this.displayDayDuration() + '</strong>');
                _super.prototype.view.call(this);
                return [2 /*return*/];
            });
        });
    };
    DayInfo.prototype.computeTimeDifference = function (daysOfYear) {
        var declination = 0.40954 * Math.sin(0.0172 * (daysOfYear - 79.35));
        var h = -(50 / 60) * Math.PI / 180;
        var hSin = Math.sin(h);
        var latitudeDegree = this.latitude * Math.PI / 180;
        return 12.0 * Math.acos((hSin - Math.sin(latitudeDegree) * Math.sin(declination)) / (Math.cos(latitudeDegree) * Math.cos(declination))) / Math.PI;
    };
    DayInfo.prototype.zeitgleichung = function (T) {
        return -0.1752 * Math.sin(0.033430 * T + 0.5474) - 0.1340 * Math.sin(0.018234 * T - 0.1939);
    };
    DayInfo.prototype.displaySunRise = function () {
        return this.printTime(this.sunRise);
    };
    DayInfo.prototype.computeDays = function () {
        var start = new Date(this.actual.getFullYear(), 0, 0);
        var diff = this.actual.getTime() - start.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24)) - 4;
    };
    DayInfo.prototype.displaySunDown = function () {
        return this.printTime(this.sunDown);
    };
    DayInfo.prototype.displayDayDuration = function () {
        return this.printTime(this.sunDown - this.sunRise);
    };
    DayInfo.prototype.displayNightDuration = function () {
        return this.printTime(24 + this.sunRise - this.sunDown);
    };
    DayInfo.prototype.leadingZero = function (intValue) {
        return intValue > 9 ? "" + intValue : "0" + intValue;
    };
    DayInfo.prototype.printTime = function (decimalTime) {
        var hour = Math.floor(decimalTime);
        var minutes = Math.floor((decimalTime - hour) * 60);
        return "" + this.leadingZero(hour) + ":" + this.leadingZero(minutes);
    };
    DayInfo.prototype.compute = function () {
        var daysOfYear = this.computeDays();
        var timeDifference = this.computeTimeDifference(daysOfYear);
        var zeit1 = this.zeitgleichung(daysOfYear);
        var timeZone = 2;
        if (this.actual > new Date('2022-10-29')) {
            timeZone = 1;
        }
        var correctionLongitude = timeZone - this.longitude / 15.0;
        this.sunDown = 12 + timeDifference - zeit1 + correctionLongitude;
        this.sunRise = 12 - timeDifference - zeit1 + correctionLongitude;
    };
    return DayInfo;
}(Loader_1.Loader));
exports.DayInfo = DayInfo;


/***/ }),

/***/ "./src/DayNav.ts":
/*!***********************!*\
  !*** ./src/DayNav.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DayNav = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var DayNav = /** @class */ (function (_super) {
    __extends(DayNav, _super);
    function DayNav(actual) {
        var _this = _super.call(this, actual) || this;
        _this.setTargetHTML('day-link-box');
        var location = document.location.href;
        var result = location.match("[0-9]{4}\-[0-9]{2}\-[0-9]{2}");
        if (result != null) {
            _this.actual = new Date("" + result);
        }
        else {
            _this.actual = new Date();
        }
        _this.screenWidth = window.innerWidth;
        _this.actualMonthString = _this.actual.toLocaleString('de', { month: 'short' }).toUpperCase();
        if (_this.screenWidth > 900) {
            var actualMonth = _this.actual.getMonth();
            var actualYear = _this.actual.getFullYear();
            _this.start = new Date(Date.UTC(actualYear, actualMonth, 1));
            var previousDay = _this.addDays(_this.start, -1);
            var prevMonth = previousDay.getMonth();
            var prevYear = previousDay.getFullYear();
            _this.prev = new Date(Date.UTC(prevYear, prevMonth, 1));
            _this.next = new Date(Date.UTC(actualYear, actualMonth + 1, 1));
        }
        else if (_this.screenWidth > 599) {
            _this.start = new Date(_this.actual);
            _this.prev = _this.addDays(_this.start, -15);
            _this.next = _this.addDays(_this.start, 15);
        }
        else {
            _this.start = new Date(_this.actual);
            _this.prev = _this.addDays(_this.start, -8);
            _this.next = _this.addDays(_this.start, 8);
        }
        return _this;
    }
    DayNav.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.setContent.call(this, this.createHTML());
                _super.prototype.view.call(this);
                return [2 /*return*/];
            });
        });
    };
    DayNav.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    DayNav.prototype.deriveClass = function (startDate) {
        if (startDate.getDate() == this.actual.getDate()) {
            return 'sb-day-actual';
        }
        else if (startDate.getDay() == 0 || startDate.getDay() == 6) {
            return 'sb-day-link-weekend';
        }
        return 'sb-day-link';
    };
    DayNav.prototype.createHTML = function () {
        var html = this.createPrevHTML();
        var actual = new Date(this.start);
        while (actual < this.next) {
            html += '<a ' +
                this.createPageLink(actual) +
                ' class="' +
                this.deriveClass(actual) +
                '" >' +
                actual.getDate() +
                '</a>';
            if (actual.getDay() == 0) {
                html += ' ';
            }
            else {
                html += '&nbsp;';
            }
            actual = this.addDays(actual, 1);
        }
        html += this.createNextHTML();
        return html;
    };
    DayNav.prototype.createPrevHTML = function () {
        var html = this.actualMonthString + ' &nbsp;  &nbsp; ';
        if (this.prev < new Date('2022-06-01')) {
            return html;
        }
        return html + '<a ' +
            this.createPageLink(this.prev) +
            ' class="sb-day-link" ><i class="fa-solid fa-angles-left"></i></a>&nbsp;&nbsp;&nbsp;';
    };
    DayNav.prototype.createNextHTML = function () {
        return '&nbsp;&nbsp;&nbsp;<a ' +
            this.createPageLink(this.next) +
            ' class="sb-day-link" ><i class="fa-solid fa-angles-right"></i></a>';
    };
    DayNav.prototype.createPageLink = function (date) {
        return 'href="../days/munich-' +
            date.toISOString().split('T')[0] +
            '.html"';
    };
    return DayNav;
}(Loader_1.Loader));
exports.DayNav = DayNav;


/***/ }),

/***/ "./src/Loader.ts":
/*!***********************!*\
  !*** ./src/Loader.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Loader = void 0;
var Loader = /** @class */ (function () {
    function Loader(query) {
        this.url = "";
        this.content = "";
        this.targetHTML = "";
        this.version = "";
        this.versionKey = "";
        this.query = query;
    }
    Loader.prototype.setVersionKey = function (versionKey) {
        this.versionKey = versionKey;
        return this;
    };
    Loader.prototype.hasVersionKey = function () {
        return !(this.versionKey == "");
    };
    Loader.prototype.storeVersionKey = function () {
        if (!this.hasVersionKey() || !this.hasVersion()) {
            return;
        }
        localStorage.setItem(this.versionKey, this.version);
        this.hide();
    };
    Loader.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    Loader.prototype.hasVersion = function () {
        return !(this.version == "");
    };
    Loader.prototype.checkVersionAndKey = function () {
        if (!this.hasVersionKey()) {
            return true;
        }
        if (!this.hasVersion()) {
            return true;
        }
        if (this.query.match(".*clear.*")) {
            localStorage.setItem(this.versionKey, "");
        }
        var stored = localStorage.getItem(this.versionKey);
        return (stored != this.version);
    };
    Loader.prototype.setTargetHTML = function (targetHTML) {
        this.targetHTML = targetHTML;
        return this;
    };
    Loader.prototype.hasTargetHTML = function () {
        return !(this.targetHTML == "");
    };
    Loader.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    Loader.prototype.hasUrl = function () {
        return !(this.url == "");
    };
    Loader.prototype.getUrl = function () {
        return this.url;
    };
    Loader.prototype.getContent = function () {
        return this.content;
    };
    Loader.prototype.setContent = function (content) {
        this.content = content;
    };
    Loader.prototype.hasContent = function () {
        return !(this.url == "");
    };
    Loader.prototype.view = function () {
        if (!this.hasTargetHTML()) {
            console.log("CONTENT: " + this.content);
            return;
        }
        this.show();
    };
    Loader.prototype.loadElement = function () {
        if (!this.hasTargetHTML()) {
            return undefined;
        }
        var html = document.getElementById(this.targetHTML);
        if (html == null) {
            console.log("Element " + this.targetHTML + " not found: ");
            return undefined;
        }
        return html;
    };
    Loader.prototype.hide = function () {
        this.content = "";
        var html = this.loadElement();
        if (html == undefined) {
            return;
        }
        html.innerHTML = this.content;
        html.style.display = 'none';
    };
    Loader.prototype.move = function (x, y) {
        var html = this.loadElement();
        if (html == undefined) {
            return;
        }
        html.style.left = x;
        html.style.top = y;
        html.innerHTML = this.content;
        html.style.display = 'block';
    };
    Loader.prototype.show = function () {
        var html = this.loadElement();
        if (html == undefined) {
            return;
        }
        html.innerHTML = this.content;
        html.style.display = 'block';
    };
    Loader.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.hasUrl()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch(this.url)];
                    case 1:
                        response = _b.sent();
                        _a = this;
                        return [4 /*yield*/, response.text()];
                    case 2:
                        _a.content = _b.sent();
                        if (this.checkVersionAndKey()) {
                            this.view();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Loader.QUERY = "clear";
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./src/Menue.ts":
/*!**********************!*\
  !*** ./src/Menue.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menue = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var Menue = /** @class */ (function (_super) {
    __extends(Menue, _super);
    function Menue(query) {
        var _this = _super.call(this, query) || this;
        _this.toggle = false;
        _super.prototype.setUrl.call(_this, "../pages/Menue.html");
        _super.prototype.setTargetHTML.call(_this, "menue-box");
        return _this;
    }
    Menue.prototype.showOrHide = function () {
        if (this.toggle) {
            _super.prototype.hide.call(this);
            this.toggle = false;
        }
        else {
            _super.prototype.show.call(this);
            this.toggle = true;
        }
    };
    return Menue;
}(Loader_1.Loader));
exports.Menue = Menue;


/***/ }),

/***/ "./src/Recommendations.ts":
/*!********************************!*\
  !*** ./src/Recommendations.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Recommendations = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var Recommendations = /** @class */ (function (_super) {
    __extends(Recommendations, _super);
    function Recommendations(query) {
        var _this = _super.call(this, query) || this;
        _this.recommendations = new Array();
        _super.prototype.setUrl.call(_this, "../data/Recommendations.json");
        _super.prototype.setTargetHTML.call(_this, "target-Recommendation");
        return _this;
    }
    Recommendations.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, counter, recommendation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasUrl()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch(_super.prototype.getUrl.call(this))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json == undefined) {
                            return [2 /*return*/];
                        }
                        for (counter in json) {
                            recommendation = new Recommendation(json[counter]);
                            if (recommendation.isValid()) {
                                this.recommendations.push(recommendation);
                            }
                        }
                        _super.prototype.setContent.call(this, this.render(3));
                        _super.prototype.view.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    Recommendations.prototype.render = function (maxDisplay) {
        var html = '';
        var recommendationCount = this.recommendations.length;
        if (recommendationCount < maxDisplay) {
            for (var i = 0; i < recommendationCount; i++) {
                var recommendation = this.recommendations[i];
                html += recommendation.createHTML();
            }
        }
        else {
            var foundCounter = 0;
            var view = ',';
            while (foundCounter < maxDisplay) {
                var i = Math.floor(Math.random() * recommendationCount);
                if (view.includes(',' + i + ',')) {
                    continue;
                }
                var recommendation = this.recommendations[i];
                view += i + ',';
                html += recommendation.createHTML();
                foundCounter++;
            }
        }
        //html += '</div>'
        return html;
    };
    return Recommendations;
}(Loader_1.Loader));
exports.Recommendations = Recommendations;
var Recommendation = /** @class */ (function () {
    function Recommendation(json) {
        this.type = json.type;
        this.actualDate = new Date();
        if (json.startDate) {
            this.startDate = new Date(json.startDate);
        }
        if (json.stopDate) {
            this.stopDate = new Date(json.stopDate);
        }
        if (json.eventDate) {
            this.eventDate = new Date(json.eventDate);
        }
        this.location = json.location;
        this.locationPage = json.locationPage;
        this.title = json.title;
        this.href = json.href;
        this.img = json.img;
        this.showFlag = false;
    }
    Recommendation.prototype.isValid = function () {
        if (this.hasEventDate() && this.eventDate < this.actualDate) {
            return false;
        }
        if (this.hasStopDate() && this.stopDate < this.actualDate) {
            return false;
        }
        if (this.hasStartDate() && this.startDate > this.actualDate) {
            return false;
        }
        return true;
    };
    Recommendation.prototype.hasStartDate = function () {
        return this.startDate != null && this.startDate != undefined;
    };
    Recommendation.prototype.hasStopDate = function () {
        return this.stopDate != null && this.stopDate != undefined;
    };
    Recommendation.prototype.hasEventDate = function () {
        return this.eventDate != null && this.eventDate != undefined;
    };
    Recommendation.prototype.displayYear = function (myDate) {
        return myDate.getFullYear() - 2000;
    };
    Recommendation.prototype.displayMonth = function (myDate) {
        var value = myDate.getMonth() + 1;
        if (value > 9) {
            return value;
        }
        return '0' + value;
    };
    Recommendation.prototype.displayMin = function (myDate) {
        var value = myDate.getMinutes();
        if (value > 10) {
            return value;
        }
        return '0' + value;
    };
    Recommendation.prototype.displayHour = function (myDate) {
        if (myDate.getHours() == 0) {
            return '00';
        }
        var value = myDate.getHours() - 1;
        if (value > 10) {
            return value;
        }
        return '0' + value;
    };
    Recommendation.prototype.displayTime = function (myDate) {
        var value = myDate.getUTCHours() - 1;
        if (value == 0) {
            return '';
        }
    };
    Recommendation.prototype.displayDay = function (myDate) {
        var value = myDate.getDate();
        if (value > 9) {
            return value;
        }
        return '0' + value;
    };
    Recommendation.prototype.displayDate = function (myDate) {
        var date = this.displayDay(myDate) + "." + this.displayMonth(myDate) + "." + this.displayYear(myDate);
        var utcHours = myDate.getUTCHours();
        if (utcHours === 0) {
            return date;
        }
        return date + " " + this.displayHour(myDate) + ":" + this.displayMin(myDate);
    };
    Recommendation.prototype.showStartDate = function () {
        if (this.startDate === undefined) {
            return "";
        }
        return "von " + this.displayDate(this.startDate);
    };
    Recommendation.prototype.showStopDate = function () {
        if (this.stopDate === undefined) {
            return "";
        }
        return " bis " + this.displayDate(this.stopDate);
    };
    Recommendation.prototype.showEventDate = function () {
        if (this.eventDate === undefined) {
            return "";
        }
        return " " + this.displayDate(this.eventDate);
    };
    Recommendation.prototype.showDate = function () {
        return this.showStartDate() + this.showStopDate() + this.showEventDate();
    };
    Recommendation.prototype.createHTML = function () {
        var html = '<div class="sb-event">';
        html += '<div class="sb-event-specpage-box">';
        html += '<a href="../types/' + this.type + '.html" class="sb-event-specpage-link">' + this.type + '</a>: ';
        if (this.locationPage) {
            html += '<a href="../locations/' + this.locationPage + '.html" class="sb-event-specpage-link">' + this.location + '</a>';
        }
        else {
            html += this.location;
        }
        html += '</div><div></div><div></div>';
        html += '<div class="sb-event-startdate">' + this.showDate() + '</div>';
        html += '<div></div>';
        html += '<a href="' + this.href + '" target="extern">';
        html += '<h4 class="sb-event-h4" >' + this.title + '</h4></a>';
        html += '</div>';
        return html;
    };
    return Recommendation;
}());


/***/ }),

/***/ "./src/Teaser.ts":
/*!***********************!*\
  !*** ./src/Teaser.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Teaser = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var Teaser = /** @class */ (function (_super) {
    __extends(Teaser, _super);
    function Teaser(query) {
        var _this = _super.call(this, query) || this;
        _super.prototype.setUrl.call(_this, "../data/TeaserList.json");
        _super.prototype.setTargetHTML.call(_this, "info-teaser");
        return _this;
    }
    Teaser.prototype.loadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, length, selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasUrl()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch(_super.prototype.getUrl.call(this))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json == undefined) {
                            return [2 /*return*/];
                        }
                        length = json.length;
                        selected = Math.floor(Math.random() * length);
                        _super.prototype.setContent.call(this, json[selected]);
                        _super.prototype.view.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Teaser;
}(Loader_1.Loader));
exports.Teaser = Teaser;


/***/ }),

/***/ "./src/ToolTip.ts":
/*!************************!*\
  !*** ./src/ToolTip.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolTip = void 0;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./src/Loader.ts");
var ToolTip = /** @class */ (function (_super) {
    __extends(ToolTip, _super);
    function ToolTip(query) {
        var _this = _super.call(this, query) || this;
        _this.toggle = false;
        _this.id = '';
        _super.prototype.setTargetHTML.call(_this, "tool-tip");
        return _this;
    }
    ToolTip.prototype.showOrHide = function (element, artistTitle, type, locationUrl, location, locality, ticketUrl, artistUrl, youtubeUrl) {
        var elementId = element.getAttribute('id');
        if (this.toggle) {
            if (this.id == elementId) {
                _super.prototype.hide.call(this);
                this.toggle = false;
                return;
            }
        }
        this.id = elementId;
        var content = '';
        var x = element.offsetLeft + 38;
        var y = element.offsetTop + 21;
        var posx = "" + x + "px";
        var posy = "" + y + "px";
        content += '';
        if (artistUrl != '') {
            content += '<a class="sb-tooltip-link" target="extern" href="' + artistUrl + '"><div class="sb-tooltip-box">Künstler</div></a>';
        }
        if (youtubeUrl != '') {
            content += '<a class="sb-tooltip-link" target="extern" href="' + youtubeUrl + '"><divclass="sb-tooltip-box">Youtube</div></a>';
        }
        else if (type == 'Kabarett' || type == 'Musikkonzert') {
            content += '<a class="sb-tooltip-link" target="extern" href="https://www.youtube.com/results?search_query=' + type + '+' + artistTitle + '"><div class="sb-tooltip-box">Youtube Suche</div></a>';
        }
        if (locationUrl != '') {
            content += '<a class="sb-tooltip-link" target="extern" href="' + locationUrl + '" target="extern"><div class="sb-tooltip-box">Programm ' + location + '</div></a>';
        }
        content += '<a class="sb-tooltip-link" target="extern" href="https://www.google.com/search?q=' + locality + '+' + location + '"><div class="sb-tooltip-box">Google Suche</div></a>';
        if (ticketUrl != '') {
            content += '<a class="sb-tooltip-link" target="extern" href="' + ticketUrl + '"><div class="sb-tooltip-box">Ticket</div></a>';
        }
        content += '';
        _super.prototype.setContent.call(this, content);
        _super.prototype.move.call(this, posx, posy);
        this.toggle = true;
    };
    ToolTip.prototype.hide = function () {
        this.toggle = false;
        this.id = '';
        _super.prototype.hide.call(this);
    };
    return ToolTip;
}(Loader_1.Loader));
exports.ToolTip = ToolTip;


/***/ }),

/***/ "./src/TypeAnchors.ts":
/*!****************************!*\
  !*** ./src/TypeAnchors.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeAnchors = void 0;
var TypeAnchors = /** @class */ (function () {
    function TypeAnchors() {
        this.statusMapKey = 'typeAnchorsTS';
        this.statusMap = new Map();
        this.toggleMap = new Map();
        var search = window.location.search;
        if (search.match('.*clear.*')) {
            this.initStatusMap();
        }
        else {
            this.readStatusMap();
        }
    }
    TypeAnchors.prototype.readStatusMap = function () {
        var storedStatusMap = localStorage.getItem(this.statusMapKey);
        if (storedStatusMap === null || storedStatusMap === undefined || storedStatusMap.search(/Recommendation/) == -1) {
            this.initStatusMap();
            return;
        }
        try {
            this.statusMap = JSON.parse(storedStatusMap);
            for (var type in this.statusMap) {
                var value = this.statusMap[type];
                var show_1 = !value ? false : true;
                var interactive = new InteractiveTypeAnchor(type, show_1);
                if (interactive.isClear()) {
                    this.toggleMap.set(type, interactive);
                    interactive.showOrHide(false);
                }
                else {
                    //console.log("not found " + type);
                }
            }
        }
        catch (e) {
            alert(e);
        }
    };
    TypeAnchors.prototype.storeStatusMap = function () {
        localStorage.setItem(this.statusMapKey, JSON.stringify(this.statusMap));
    };
    TypeAnchors.prototype.initStatusMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch("../data/TypeAnchors.json")];
                    case 1:
                        response = _b.sent();
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.statusMap = _b.sent();
                        if (this.statusMap == undefined) {
                            return [2 /*return*/];
                        }
                        this.storeStatusMap();
                        this.readStatusMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeAnchors.prototype.showOrHide = function (type, toggle) {
        var anchor = this.toggleMap.get(type);
        if (!anchor) {
            return undefined;
        }
        anchor.showOrHide(toggle);
        return anchor;
    };
    TypeAnchors.prototype.change = function (type, toggle) {
        var anchor = this.showOrHide(type, toggle);
        if (!anchor) {
            return;
        }
        anchor.switchView();
        this.statusMap[type] = !this.statusMap[type];
        this.storeStatusMap();
    };
    TypeAnchors.prototype.addListener = function () {
        if (this.toggleMap.size == 0) {
            return;
        }
        for (var entry in this.toggleMap) {
            //this.toggleMap[entry].addListener(typeAnchors);
        }
    };
    return TypeAnchors;
}());
exports.TypeAnchors = TypeAnchors;
var InteractiveTypeAnchor = /** @class */ (function () {
    function InteractiveTypeAnchor(type, view) {
        this.activeElement = document.getElementById('target-' + type);
        this.targetElement = document.getElementById('active-' + type);
        this.view = view;
    }
    InteractiveTypeAnchor.prototype.switchView = function () {
        this.view = !this.view;
    };
    InteractiveTypeAnchor.prototype.addListener = function (typeAnchor) {
        /*this.interactive?.addEventListener("mouseleave", typeAnchor.hideOrShow(type, false));
    
        this.interactive?.addEventListener("mouseenter", typeAnchor.hideOrShow(type, false));
    
        this.interactive?.addEventListener("click", typeAnchor.hideOrShow(type, true));*/
    };
    InteractiveTypeAnchor.prototype.isClear = function () {
        return this.activeElement != null && this.targetElement != null;
    };
    InteractiveTypeAnchor.prototype.showOrHide = function (toggle) {
        if (toggle && this.view) {
            this.hide();
        }
        else if (toggle && !this.view) {
            this.show();
        }
        else if (!toggle && this.view) {
            this.show();
        }
        else if (!toggle && !this.view) {
            this.hide();
        }
    };
    InteractiveTypeAnchor.prototype.hide = function () {
        this.activeElement.style.display = 'none';
        this.targetElement.innerHTML = ' &nbsp; + &nbsp; ';
    };
    InteractiveTypeAnchor.prototype.show = function () {
        this.activeElement.style.display = 'block';
        this.targetElement.innerHTML = ' &nbsp; - &nbsp; ';
    };
    return InteractiveTypeAnchor;
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
//import { Cookie } from "./Cookie";
var Menue_1 = __webpack_require__(/*! ./Menue */ "./src/Menue.ts");
var Teaser_1 = __webpack_require__(/*! ./Teaser */ "./src/Teaser.ts");
var DayNav_1 = __webpack_require__(/*! ./DayNav */ "./src/DayNav.ts");
var ToolTip_1 = __webpack_require__(/*! ./ToolTip */ "./src/ToolTip.ts");
var DayInfo_1 = __webpack_require__(/*! ./DayInfo */ "./src/DayInfo.ts");
var Cite_1 = __webpack_require__(/*! ./Cite */ "./src/Cite.ts");
var TypeAnchors_1 = __webpack_require__(/*! ./TypeAnchors */ "./src/TypeAnchors.ts");
var Recommendations_1 = __webpack_require__(/*! ./Recommendations */ "./src/Recommendations.ts");
new DayNav_1.DayNav("").loadFile();
var trigger = document.getElementById('info-cite');
if (trigger != undefined) {
    window['stadtbookTS'] = {};
    //window['stadtbookTS']['cookie'] = new Cookie(window.location.search);
    //window['stadtbookTS']['cookie'].loadFile();
    window['stadtbookTS']['tooltip'] = new ToolTip_1.ToolTip(window.location.search);
    window['stadtbookTS']['menue'] = new Menue_1.Menue(window.location.search);
    window['stadtbookTS']['typeAnchors'] = new TypeAnchors_1.TypeAnchors();
    new DayInfo_1.DayInfo("").loadFile();
    new Cite_1.Cite("").loadFile();
    new Recommendations_1.Recommendations("").loadFile();
    new Teaser_1.Teaser("").loadFile();
    window['stadtbookTS']['setInfoPosition'] = function () {
        var topElement = document.getElementById('top');
        var infoElement = document.getElementById('info');
        if (topElement && infoElement) {
            var positionBanner = topElement.offsetHeight + 30;
            infoElement.style.marginTop = "" + positionBanner;
            new DayNav_1.DayNav("").loadFile();
        }
    };
    window.addEventListener("resize", function (event) {
        window['stadtbookTS'].setInfoPosition();
    });
    window['stadtbookTS'].setInfoPosition();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCLG9CQUFvQixtQkFBTyxDQUFDLDJDQUFlO0FBQzNDLHdCQUF3QixtQkFBTyxDQUFDLG1EQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9DaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXlJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXlOYXYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlY29tbWVuZGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGVhc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29sVGlwLnRzIiwid2VicGFjazovLy8uL3NyYy9UeXBlQW5jaG9ycy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNpdGUgPSB2b2lkIDA7XG52YXIgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Mb2FkZXJcIik7XG52YXIgQ2l0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2l0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaXRlKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHF1ZXJ5KSB8fCB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldFVybC5jYWxsKF90aGlzLCBcIi4uL2RhdGEvQ2l0ZXMuanNvblwiKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MLmNhbGwoX3RoaXMsIFwiaW5mby1jaXRlXCIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENpdGUucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGpzb24sIGxlbmd0aCwgc2VsZWN0ZWQsIGNpdGU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzVXJsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChfc3VwZXIucHJvdG90eXBlLmdldFVybC5jYWxsKHRoaXMpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGpzb24ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2l0ZSA9IGpzb25bc2VsZWN0ZWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRDb250ZW50LmNhbGwodGhpcywgY2l0ZS5jaXRlICsgJyA8c3Ryb25nPignICsgY2l0ZS5hdXRob3IgKyAnKTwvc3Ryb25nPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS52aWV3LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENpdGU7XG59KExvYWRlcl8xLkxvYWRlcikpO1xuZXhwb3J0cy5DaXRlID0gQ2l0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGF5SW5mbyA9IHZvaWQgMDtcbnZhciBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0xvYWRlclwiKTtcbnZhciBEYXlJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXlJbmZvLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERheUluZm8ocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcXVlcnkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmxhdGl0dWRlID0gNDguMTM3MjtcbiAgICAgICAgX3RoaXMubG9uZ2l0dWRlID0gMTEuNTc1NTtcbiAgICAgICAgX3RoaXMuc3VuRG93biA9IDI0LjA7XG4gICAgICAgIF90aGlzLnN1blJpc2UgPSAwLjA7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VGFyZ2V0SFRNTC5jYWxsKF90aGlzLCBcImluZm8tZGF5XCIpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbG9jYXRpb24ubWF0Y2goXCJbMC05XXs0fVxcLVswLTldezJ9XFwtWzAtOV17Mn1cIik7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0dWFsID0gbmV3IERhdGUoXCJcIiArIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5hY3R1YWwgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGF5SW5mby5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGUoKTtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldENvbnRlbnQuY2FsbCh0aGlzLCAnU29ubmVuYXVmZ2FuZzogPHN0cm9uZz4nICsgdGhpcy5kaXNwbGF5U3VuUmlzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3Ryb25nPiAtIFNvbm5lbnVudGVyZ2FuZzogPHN0cm9uZz4nICsgdGhpcy5kaXNwbGF5U3VuRG93bigpICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3Ryb25nPiAtIFRhZ2VzZGF1ZXI6IDxzdHJvbmc+JyArIHRoaXMuZGlzcGxheURheUR1cmF0aW9uKCkgKyAnPC9zdHJvbmc+Jyk7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS52aWV3LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuY29tcHV0ZVRpbWVEaWZmZXJlbmNlID0gZnVuY3Rpb24gKGRheXNPZlllYXIpIHtcbiAgICAgICAgdmFyIGRlY2xpbmF0aW9uID0gMC40MDk1NCAqIE1hdGguc2luKDAuMDE3MiAqIChkYXlzT2ZZZWFyIC0gNzkuMzUpKTtcbiAgICAgICAgdmFyIGggPSAtKDUwIC8gNjApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdmFyIGhTaW4gPSBNYXRoLnNpbihoKTtcbiAgICAgICAgdmFyIGxhdGl0dWRlRGVncmVlID0gdGhpcy5sYXRpdHVkZSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHJldHVybiAxMi4wICogTWF0aC5hY29zKChoU2luIC0gTWF0aC5zaW4obGF0aXR1ZGVEZWdyZWUpICogTWF0aC5zaW4oZGVjbGluYXRpb24pKSAvIChNYXRoLmNvcyhsYXRpdHVkZURlZ3JlZSkgKiBNYXRoLmNvcyhkZWNsaW5hdGlvbikpKSAvIE1hdGguUEk7XG4gICAgfTtcbiAgICBEYXlJbmZvLnByb3RvdHlwZS56ZWl0Z2xlaWNodW5nID0gZnVuY3Rpb24gKFQpIHtcbiAgICAgICAgcmV0dXJuIC0wLjE3NTIgKiBNYXRoLnNpbigwLjAzMzQzMCAqIFQgKyAwLjU0NzQpIC0gMC4xMzQwICogTWF0aC5zaW4oMC4wMTgyMzQgKiBUIC0gMC4xOTM5KTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmRpc3BsYXlTdW5SaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFRpbWUodGhpcy5zdW5SaXNlKTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmNvbXB1dGVEYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmFjdHVhbC5nZXRGdWxsWWVhcigpLCAwLCAwKTtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmFjdHVhbC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC0gNDtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmRpc3BsYXlTdW5Eb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFRpbWUodGhpcy5zdW5Eb3duKTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmRpc3BsYXlEYXlEdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRUaW1lKHRoaXMuc3VuRG93biAtIHRoaXMuc3VuUmlzZSk7XG4gICAgfTtcbiAgICBEYXlJbmZvLnByb3RvdHlwZS5kaXNwbGF5TmlnaHREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRUaW1lKDI0ICsgdGhpcy5zdW5SaXNlIC0gdGhpcy5zdW5Eb3duKTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmxlYWRpbmdaZXJvID0gZnVuY3Rpb24gKGludFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbnRWYWx1ZSA+IDkgPyBcIlwiICsgaW50VmFsdWUgOiBcIjBcIiArIGludFZhbHVlO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUucHJpbnRUaW1lID0gZnVuY3Rpb24gKGRlY2ltYWxUaW1lKSB7XG4gICAgICAgIHZhciBob3VyID0gTWF0aC5mbG9vcihkZWNpbWFsVGltZSk7XG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGVjaW1hbFRpbWUgLSBob3VyKSAqIDYwKTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLmxlYWRpbmdaZXJvKGhvdXIpICsgXCI6XCIgKyB0aGlzLmxlYWRpbmdaZXJvKG1pbnV0ZXMpO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRheXNPZlllYXIgPSB0aGlzLmNvbXB1dGVEYXlzKCk7XG4gICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZSA9IHRoaXMuY29tcHV0ZVRpbWVEaWZmZXJlbmNlKGRheXNPZlllYXIpO1xuICAgICAgICB2YXIgemVpdDEgPSB0aGlzLnplaXRnbGVpY2h1bmcoZGF5c09mWWVhcik7XG4gICAgICAgIHZhciB0aW1lWm9uZSA9IDI7XG4gICAgICAgIGlmICh0aGlzLmFjdHVhbCA+IG5ldyBEYXRlKCcyMDIyLTEwLTI5JykpIHtcbiAgICAgICAgICAgIHRpbWVab25lID0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ycmVjdGlvbkxvbmdpdHVkZSA9IHRpbWVab25lIC0gdGhpcy5sb25naXR1ZGUgLyAxNS4wO1xuICAgICAgICB0aGlzLnN1bkRvd24gPSAxMiArIHRpbWVEaWZmZXJlbmNlIC0gemVpdDEgKyBjb3JyZWN0aW9uTG9uZ2l0dWRlO1xuICAgICAgICB0aGlzLnN1blJpc2UgPSAxMiAtIHRpbWVEaWZmZXJlbmNlIC0gemVpdDEgKyBjb3JyZWN0aW9uTG9uZ2l0dWRlO1xuICAgIH07XG4gICAgcmV0dXJuIERheUluZm87XG59KExvYWRlcl8xLkxvYWRlcikpO1xuZXhwb3J0cy5EYXlJbmZvID0gRGF5SW5mbztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGF5TmF2ID0gdm9pZCAwO1xudmFyIExvYWRlcl8xID0gcmVxdWlyZShcIi4vTG9hZGVyXCIpO1xudmFyIERheU5hdiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF5TmF2LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERheU5hdihhY3R1YWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWN0dWFsKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zZXRUYXJnZXRIVE1MKCdkYXktbGluay1ib3gnKTtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxvY2F0aW9uLm1hdGNoKFwiWzAtOV17NH1cXC1bMC05XXsyfVxcLVswLTldezJ9XCIpO1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdHVhbCA9IG5ldyBEYXRlKFwiXCIgKyByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuYWN0dWFsID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5zY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBfdGhpcy5hY3R1YWxNb250aFN0cmluZyA9IF90aGlzLmFjdHVhbC50b0xvY2FsZVN0cmluZygnZGUnLCB7IG1vbnRoOiAnc2hvcnQnIH0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChfdGhpcy5zY3JlZW5XaWR0aCA+IDkwMCkge1xuICAgICAgICAgICAgdmFyIGFjdHVhbE1vbnRoID0gX3RoaXMuYWN0dWFsLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgYWN0dWFsWWVhciA9IF90aGlzLmFjdHVhbC5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgX3RoaXMuc3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyhhY3R1YWxZZWFyLCBhY3R1YWxNb250aCwgMSkpO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzRGF5ID0gX3RoaXMuYWRkRGF5cyhfdGhpcy5zdGFydCwgLTEpO1xuICAgICAgICAgICAgdmFyIHByZXZNb250aCA9IHByZXZpb3VzRGF5LmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgcHJldlllYXIgPSBwcmV2aW91c0RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgX3RoaXMucHJldiA9IG5ldyBEYXRlKERhdGUuVVRDKHByZXZZZWFyLCBwcmV2TW9udGgsIDEpKTtcbiAgICAgICAgICAgIF90aGlzLm5leHQgPSBuZXcgRGF0ZShEYXRlLlVUQyhhY3R1YWxZZWFyLCBhY3R1YWxNb250aCArIDEsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfdGhpcy5zY3JlZW5XaWR0aCA+IDU5OSkge1xuICAgICAgICAgICAgX3RoaXMuc3RhcnQgPSBuZXcgRGF0ZShfdGhpcy5hY3R1YWwpO1xuICAgICAgICAgICAgX3RoaXMucHJldiA9IF90aGlzLmFkZERheXMoX3RoaXMuc3RhcnQsIC0xNSk7XG4gICAgICAgICAgICBfdGhpcy5uZXh0ID0gX3RoaXMuYWRkRGF5cyhfdGhpcy5zdGFydCwgMTUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhcnQgPSBuZXcgRGF0ZShfdGhpcy5hY3R1YWwpO1xuICAgICAgICAgICAgX3RoaXMucHJldiA9IF90aGlzLmFkZERheXMoX3RoaXMuc3RhcnQsIC04KTtcbiAgICAgICAgICAgIF90aGlzLm5leHQgPSBfdGhpcy5hZGREYXlzKF90aGlzLnN0YXJ0LCA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERheU5hdi5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldENvbnRlbnQuY2FsbCh0aGlzLCB0aGlzLmNyZWF0ZUhUTUwoKSk7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS52aWV3LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF5TmF2LnByb3RvdHlwZS5hZGREYXlzID0gZnVuY3Rpb24gKGRhdGUsIGRheXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICByZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBEYXlOYXYucHJvdG90eXBlLmRlcml2ZUNsYXNzID0gZnVuY3Rpb24gKHN0YXJ0RGF0ZSkge1xuICAgICAgICBpZiAoc3RhcnREYXRlLmdldERhdGUoKSA9PSB0aGlzLmFjdHVhbC5nZXREYXRlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2ItZGF5LWFjdHVhbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnREYXRlLmdldERheSgpID09IDAgfHwgc3RhcnREYXRlLmdldERheSgpID09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2ItZGF5LWxpbmstd2Vla2VuZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdzYi1kYXktbGluayc7XG4gICAgfTtcbiAgICBEYXlOYXYucHJvdG90eXBlLmNyZWF0ZUhUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBodG1sID0gdGhpcy5jcmVhdGVQcmV2SFRNTCgpO1xuICAgICAgICB2YXIgYWN0dWFsID0gbmV3IERhdGUodGhpcy5zdGFydCk7XG4gICAgICAgIHdoaWxlIChhY3R1YWwgPCB0aGlzLm5leHQpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxhICcgK1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZUxpbmsoYWN0dWFsKSArXG4gICAgICAgICAgICAgICAgJyBjbGFzcz1cIicgK1xuICAgICAgICAgICAgICAgIHRoaXMuZGVyaXZlQ2xhc3MoYWN0dWFsKSArXG4gICAgICAgICAgICAgICAgJ1wiID4nICtcbiAgICAgICAgICAgICAgICBhY3R1YWwuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICAnPC9hPic7XG4gICAgICAgICAgICBpZiAoYWN0dWFsLmdldERheSgpID09IDApIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJyZuYnNwOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3R1YWwgPSB0aGlzLmFkZERheXMoYWN0dWFsLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IHRoaXMuY3JlYXRlTmV4dEhUTUwoKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfTtcbiAgICBEYXlOYXYucHJvdG90eXBlLmNyZWF0ZVByZXZIVE1MID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMuYWN0dWFsTW9udGhTdHJpbmcgKyAnICZuYnNwOyAgJm5ic3A7ICc7XG4gICAgICAgIGlmICh0aGlzLnByZXYgPCBuZXcgRGF0ZSgnMjAyMi0wNi0wMScpKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbCArICc8YSAnICtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZUxpbmsodGhpcy5wcmV2KSArXG4gICAgICAgICAgICAnIGNsYXNzPVwic2ItZGF5LWxpbmtcIiA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtbGVmdFwiPjwvaT48L2E+Jm5ic3A7Jm5ic3A7Jm5ic3A7JztcbiAgICB9O1xuICAgIERheU5hdi5wcm90b3R5cGUuY3JlYXRlTmV4dEhUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnJm5ic3A7Jm5ic3A7Jm5ic3A7PGEgJyArXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VMaW5rKHRoaXMubmV4dCkgK1xuICAgICAgICAgICAgJyBjbGFzcz1cInNiLWRheS1saW5rXCIgPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGVzLXJpZ2h0XCI+PC9pPjwvYT4nO1xuICAgIH07XG4gICAgRGF5TmF2LnByb3RvdHlwZS5jcmVhdGVQYWdlTGluayA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiAnaHJlZj1cIi4uL2RheXMvbXVuaWNoLScgK1xuICAgICAgICAgICAgZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gK1xuICAgICAgICAgICAgJy5odG1sXCInO1xuICAgIH07XG4gICAgcmV0dXJuIERheU5hdjtcbn0oTG9hZGVyXzEuTG9hZGVyKSk7XG5leHBvcnRzLkRheU5hdiA9IERheU5hdjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2FkZXIgPSB2b2lkIDA7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvYWRlcihxdWVyeSkge1xuICAgICAgICB0aGlzLnVybCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFwiXCI7XG4gICAgICAgIHRoaXMudGFyZ2V0SFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiXCI7XG4gICAgICAgIHRoaXMudmVyc2lvbktleSA9IFwiXCI7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zZXRWZXJzaW9uS2V5ID0gZnVuY3Rpb24gKHZlcnNpb25LZXkpIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uS2V5ID0gdmVyc2lvbktleTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmhhc1ZlcnNpb25LZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMudmVyc2lvbktleSA9PSBcIlwiKTtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuc3RvcmVWZXJzaW9uS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzVmVyc2lvbktleSgpIHx8ICF0aGlzLmhhc1ZlcnNpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudmVyc2lvbktleSwgdGhpcy52ZXJzaW9uKTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLnNldFZlcnNpb24gPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGFzVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy52ZXJzaW9uID09IFwiXCIpO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5jaGVja1ZlcnNpb25BbmRLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNWZXJzaW9uS2V5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oYXNWZXJzaW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5Lm1hdGNoKFwiLipjbGVhci4qXCIpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnZlcnNpb25LZXksIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnZlcnNpb25LZXkpO1xuICAgICAgICByZXR1cm4gKHN0b3JlZCAhPSB0aGlzLnZlcnNpb24pO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MID0gZnVuY3Rpb24gKHRhcmdldEhUTUwpIHtcbiAgICAgICAgdGhpcy50YXJnZXRIVE1MID0gdGFyZ2V0SFRNTDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmhhc1RhcmdldEhUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMudGFyZ2V0SFRNTCA9PSBcIlwiKTtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmhhc1VybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy51cmwgPT0gXCJcIik7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5nZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy51cmwgPT0gXCJcIik7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLnZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNUYXJnZXRIVE1MKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09OVEVOVDogXCIgKyB0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5sb2FkRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1RhcmdldEhUTUwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGFyZ2V0SFRNTCk7XG4gICAgICAgIGlmIChodG1sID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlbWVudCBcIiArIHRoaXMudGFyZ2V0SFRNTCArIFwiIG5vdCBmb3VuZDogXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gXCJcIjtcbiAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmxvYWRFbGVtZW50KCk7XG4gICAgICAgIGlmIChodG1sID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICAgICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMubG9hZEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGh0bWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHRtbC5zdHlsZS5sZWZ0ID0geDtcbiAgICAgICAgaHRtbC5zdHlsZS50b3AgPSB5O1xuICAgICAgICBodG1sLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmxvYWRFbGVtZW50KCk7XG4gICAgICAgIGlmIChodG1sID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICAgICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNVcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHRoaXMudXJsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuY29udGVudCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVmVyc2lvbkFuZEtleSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9hZGVyLlFVRVJZID0gXCJjbGVhclwiO1xuICAgIHJldHVybiBMb2FkZXI7XG59KCkpO1xuZXhwb3J0cy5Mb2FkZXIgPSBMb2FkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lbnVlID0gdm9pZCAwO1xudmFyIExvYWRlcl8xID0gcmVxdWlyZShcIi4vTG9hZGVyXCIpO1xudmFyIE1lbnVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNZW51ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZW51ZShxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBxdWVyeSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VXJsLmNhbGwoX3RoaXMsIFwiLi4vcGFnZXMvTWVudWUuaHRtbFwiKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MLmNhbGwoX3RoaXMsIFwibWVudWUtYm94XCIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1lbnVlLnByb3RvdHlwZS5zaG93T3JIaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50b2dnbGUpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGlkZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2hvdy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWVudWU7XG59KExvYWRlcl8xLkxvYWRlcikpO1xuZXhwb3J0cy5NZW51ZSA9IE1lbnVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWNvbW1lbmRhdGlvbnMgPSB2b2lkIDA7XG52YXIgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Mb2FkZXJcIik7XG52YXIgUmVjb21tZW5kYXRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWNvbW1lbmRhdGlvbnMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVjb21tZW5kYXRpb25zKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHF1ZXJ5KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yZWNvbW1lbmRhdGlvbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRVcmwuY2FsbChfdGhpcywgXCIuLi9kYXRhL1JlY29tbWVuZGF0aW9ucy5qc29uXCIpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldFRhcmdldEhUTUwuY2FsbChfdGhpcywgXCJ0YXJnZXQtUmVjb21tZW5kYXRpb25cIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVjb21tZW5kYXRpb25zLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqc29uLCBjb3VudGVyLCByZWNvbW1lbmRhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNVcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKF9zdXBlci5wcm90b3R5cGUuZ2V0VXJsLmNhbGwodGhpcykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb3VudGVyIGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRhdGlvbiA9IG5ldyBSZWNvbW1lbmRhdGlvbihqc29uW2NvdW50ZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb21tZW5kYXRpb24uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb21tZW5kYXRpb25zLnB1c2gocmVjb21tZW5kYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0Q29udGVudC5jYWxsKHRoaXMsIHRoaXMucmVuZGVyKDMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudmlldy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9ucy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG1heERpc3BsYXkpIHtcbiAgICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgICAgdmFyIHJlY29tbWVuZGF0aW9uQ291bnQgPSB0aGlzLnJlY29tbWVuZGF0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmIChyZWNvbW1lbmRhdGlvbkNvdW50IDwgbWF4RGlzcGxheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNvbW1lbmRhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVjb21tZW5kYXRpb24gPSB0aGlzLnJlY29tbWVuZGF0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBodG1sICs9IHJlY29tbWVuZGF0aW9uLmNyZWF0ZUhUTUwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmb3VuZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSAnLCc7XG4gICAgICAgICAgICB3aGlsZSAoZm91bmRDb3VudGVyIDwgbWF4RGlzcGxheSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVjb21tZW5kYXRpb25Db3VudCk7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuaW5jbHVkZXMoJywnICsgaSArICcsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZWNvbW1lbmRhdGlvbiA9IHRoaXMucmVjb21tZW5kYXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIHZpZXcgKz0gaSArICcsJztcbiAgICAgICAgICAgICAgICBodG1sICs9IHJlY29tbWVuZGF0aW9uLmNyZWF0ZUhUTUwoKTtcbiAgICAgICAgICAgICAgICBmb3VuZENvdW50ZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2h0bWwgKz0gJzwvZGl2PidcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfTtcbiAgICByZXR1cm4gUmVjb21tZW5kYXRpb25zO1xufShMb2FkZXJfMS5Mb2FkZXIpKTtcbmV4cG9ydHMuUmVjb21tZW5kYXRpb25zID0gUmVjb21tZW5kYXRpb25zO1xudmFyIFJlY29tbWVuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlY29tbWVuZGF0aW9uKGpzb24pIHtcbiAgICAgICAgdGhpcy50eXBlID0ganNvbi50eXBlO1xuICAgICAgICB0aGlzLmFjdHVhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoanNvbi5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoanNvbi5zdGFydERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqc29uLnN0b3BEYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BEYXRlID0gbmV3IERhdGUoanNvbi5zdG9wRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpzb24uZXZlbnREYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGF0ZSA9IG5ldyBEYXRlKGpzb24uZXZlbnREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2F0aW9uID0ganNvbi5sb2NhdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvblBhZ2UgPSBqc29uLmxvY2F0aW9uUGFnZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IGpzb24udGl0bGU7XG4gICAgICAgIHRoaXMuaHJlZiA9IGpzb24uaHJlZjtcbiAgICAgICAgdGhpcy5pbWcgPSBqc29uLmltZztcbiAgICAgICAgdGhpcy5zaG93RmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXZlbnREYXRlKCkgJiYgdGhpcy5ldmVudERhdGUgPCB0aGlzLmFjdHVhbERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNTdG9wRGF0ZSgpICYmIHRoaXMuc3RvcERhdGUgPCB0aGlzLmFjdHVhbERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNTdGFydERhdGUoKSAmJiB0aGlzLnN0YXJ0RGF0ZSA+IHRoaXMuYWN0dWFsRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmhhc1N0YXJ0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnREYXRlICE9IG51bGwgJiYgdGhpcy5zdGFydERhdGUgIT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmhhc1N0b3BEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9wRGF0ZSAhPSBudWxsICYmIHRoaXMuc3RvcERhdGUgIT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmhhc0V2ZW50RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnREYXRlICE9IG51bGwgJiYgdGhpcy5ldmVudERhdGUgIT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlZZWFyID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICByZXR1cm4gbXlEYXRlLmdldEZ1bGxZZWFyKCkgLSAyMDAwO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlNb250aCA9IGZ1bmN0aW9uIChteURhdGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBpZiAodmFsdWUgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlNaW4gPSBmdW5jdGlvbiAobXlEYXRlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG15RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlIb3VyID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICBpZiAobXlEYXRlLmdldEhvdXJzKCkgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcwMCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gbXlEYXRlLmdldEhvdXJzKCkgLSAxO1xuICAgICAgICBpZiAodmFsdWUgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnMCcgKyB2YWx1ZTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5kaXNwbGF5VGltZSA9IGZ1bmN0aW9uIChteURhdGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbXlEYXRlLmdldFVUQ0hvdXJzKCkgLSAxO1xuICAgICAgICBpZiAodmFsdWUgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuZGlzcGxheURheSA9IGZ1bmN0aW9uIChteURhdGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbXlEYXRlLmdldERhdGUoKTtcbiAgICAgICAgaWYgKHZhbHVlID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnMCcgKyB2YWx1ZTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5kaXNwbGF5RGF0ZSA9IGZ1bmN0aW9uIChteURhdGUpIHtcbiAgICAgICAgdmFyIGRhdGUgPSB0aGlzLmRpc3BsYXlEYXkobXlEYXRlKSArIFwiLlwiICsgdGhpcy5kaXNwbGF5TW9udGgobXlEYXRlKSArIFwiLlwiICsgdGhpcy5kaXNwbGF5WWVhcihteURhdGUpO1xuICAgICAgICB2YXIgdXRjSG91cnMgPSBteURhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICAgICAgaWYgKHV0Y0hvdXJzID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZSArIFwiIFwiICsgdGhpcy5kaXNwbGF5SG91cihteURhdGUpICsgXCI6XCIgKyB0aGlzLmRpc3BsYXlNaW4obXlEYXRlKTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5zaG93U3RhcnREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidm9uIFwiICsgdGhpcy5kaXNwbGF5RGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuc2hvd1N0b3BEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9wRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIgYmlzIFwiICsgdGhpcy5kaXNwbGF5RGF0ZSh0aGlzLnN0b3BEYXRlKTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5zaG93RXZlbnREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ldmVudERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiIFwiICsgdGhpcy5kaXNwbGF5RGF0ZSh0aGlzLmV2ZW50RGF0ZSk7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuc2hvd0RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dTdGFydERhdGUoKSArIHRoaXMuc2hvd1N0b3BEYXRlKCkgKyB0aGlzLnNob3dFdmVudERhdGUoKTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5jcmVhdGVIVE1MID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwic2ItZXZlbnRcIj4nO1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic2ItZXZlbnQtc3BlY3BhZ2UtYm94XCI+JztcbiAgICAgICAgaHRtbCArPSAnPGEgaHJlZj1cIi4uL3R5cGVzLycgKyB0aGlzLnR5cGUgKyAnLmh0bWxcIiBjbGFzcz1cInNiLWV2ZW50LXNwZWNwYWdlLWxpbmtcIj4nICsgdGhpcy50eXBlICsgJzwvYT46ICc7XG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uUGFnZSkge1xuICAgICAgICAgICAgaHRtbCArPSAnPGEgaHJlZj1cIi4uL2xvY2F0aW9ucy8nICsgdGhpcy5sb2NhdGlvblBhZ2UgKyAnLmh0bWxcIiBjbGFzcz1cInNiLWV2ZW50LXNwZWNwYWdlLWxpbmtcIj4nICsgdGhpcy5sb2NhdGlvbiArICc8L2E+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5sb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9ICc8L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+JztcbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInNiLWV2ZW50LXN0YXJ0ZGF0ZVwiPicgKyB0aGlzLnNob3dEYXRlKCkgKyAnPC9kaXY+JztcbiAgICAgICAgaHRtbCArPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICBodG1sICs9ICc8YSBocmVmPVwiJyArIHRoaXMuaHJlZiArICdcIiB0YXJnZXQ9XCJleHRlcm5cIj4nO1xuICAgICAgICBodG1sICs9ICc8aDQgY2xhc3M9XCJzYi1ldmVudC1oNFwiID4nICsgdGhpcy50aXRsZSArICc8L2g0PjwvYT4nO1xuICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuICAgIHJldHVybiBSZWNvbW1lbmRhdGlvbjtcbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRlYXNlciA9IHZvaWQgMDtcbnZhciBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0xvYWRlclwiKTtcbnZhciBUZWFzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRlYXNlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZWFzZXIocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcXVlcnkpIHx8IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VXJsLmNhbGwoX3RoaXMsIFwiLi4vZGF0YS9UZWFzZXJMaXN0Lmpzb25cIik7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VGFyZ2V0SFRNTC5jYWxsKF90aGlzLCBcImluZm8tdGVhc2VyXCIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRlYXNlci5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwganNvbiwgbGVuZ3RoLCBzZWxlY3RlZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNVcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKF9zdXBlci5wcm90b3R5cGUuZ2V0VXJsLmNhbGwodGhpcykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0ganNvbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldENvbnRlbnQuY2FsbCh0aGlzLCBqc29uW3NlbGVjdGVkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnZpZXcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGVhc2VyO1xufShMb2FkZXJfMS5Mb2FkZXIpKTtcbmV4cG9ydHMuVGVhc2VyID0gVGVhc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ub29sVGlwID0gdm9pZCAwO1xudmFyIExvYWRlcl8xID0gcmVxdWlyZShcIi4vTG9hZGVyXCIpO1xudmFyIFRvb2xUaXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvb2xUaXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVG9vbFRpcChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBxdWVyeSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlkID0gJyc7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VGFyZ2V0SFRNTC5jYWxsKF90aGlzLCBcInRvb2wtdGlwXCIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRvb2xUaXAucHJvdG90eXBlLnNob3dPckhpZGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXJ0aXN0VGl0bGUsIHR5cGUsIGxvY2F0aW9uVXJsLCBsb2NhdGlvbiwgbG9jYWxpdHksIHRpY2tldFVybCwgYXJ0aXN0VXJsLCB5b3V0dWJlVXJsKSB7XG4gICAgICAgIHZhciBlbGVtZW50SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZCA9PSBlbGVtZW50SWQpIHtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmhpZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlkID0gZWxlbWVudElkO1xuICAgICAgICB2YXIgY29udGVudCA9ICcnO1xuICAgICAgICB2YXIgeCA9IGVsZW1lbnQub2Zmc2V0TGVmdCArIDM4O1xuICAgICAgICB2YXIgeSA9IGVsZW1lbnQub2Zmc2V0VG9wICsgMjE7XG4gICAgICAgIHZhciBwb3N4ID0gXCJcIiArIHggKyBcInB4XCI7XG4gICAgICAgIHZhciBwb3N5ID0gXCJcIiArIHkgKyBcInB4XCI7XG4gICAgICAgIGNvbnRlbnQgKz0gJyc7XG4gICAgICAgIGlmIChhcnRpc3RVcmwgIT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxhIGNsYXNzPVwic2ItdG9vbHRpcC1saW5rXCIgdGFyZ2V0PVwiZXh0ZXJuXCIgaHJlZj1cIicgKyBhcnRpc3RVcmwgKyAnXCI+PGRpdiBjbGFzcz1cInNiLXRvb2x0aXAtYm94XCI+S8O8bnN0bGVyPC9kaXY+PC9hPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHlvdXR1YmVVcmwgIT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxhIGNsYXNzPVwic2ItdG9vbHRpcC1saW5rXCIgdGFyZ2V0PVwiZXh0ZXJuXCIgaHJlZj1cIicgKyB5b3V0dWJlVXJsICsgJ1wiPjxkaXZjbGFzcz1cInNiLXRvb2x0aXAtYm94XCI+WW91dHViZTwvZGl2PjwvYT4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ0thYmFyZXR0JyB8fCB0eXBlID09ICdNdXNpa2tvbnplcnQnKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9yZXN1bHRzP3NlYXJjaF9xdWVyeT0nICsgdHlwZSArICcrJyArIGFydGlzdFRpdGxlICsgJ1wiPjxkaXYgY2xhc3M9XCJzYi10b29sdGlwLWJveFwiPllvdXR1YmUgU3VjaGU8L2Rpdj48L2E+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYXRpb25VcmwgIT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxhIGNsYXNzPVwic2ItdG9vbHRpcC1saW5rXCIgdGFyZ2V0PVwiZXh0ZXJuXCIgaHJlZj1cIicgKyBsb2NhdGlvblVybCArICdcIiB0YXJnZXQ9XCJleHRlcm5cIj48ZGl2IGNsYXNzPVwic2ItdG9vbHRpcC1ib3hcIj5Qcm9ncmFtbSAnICsgbG9jYXRpb24gKyAnPC9kaXY+PC9hPic7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCArPSAnPGEgY2xhc3M9XCJzYi10b29sdGlwLWxpbmtcIiB0YXJnZXQ9XCJleHRlcm5cIiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0nICsgbG9jYWxpdHkgKyAnKycgKyBsb2NhdGlvbiArICdcIj48ZGl2IGNsYXNzPVwic2ItdG9vbHRpcC1ib3hcIj5Hb29nbGUgU3VjaGU8L2Rpdj48L2E+JztcbiAgICAgICAgaWYgKHRpY2tldFVybCAhPSAnJykge1xuICAgICAgICAgICAgY29udGVudCArPSAnPGEgY2xhc3M9XCJzYi10b29sdGlwLWxpbmtcIiB0YXJnZXQ9XCJleHRlcm5cIiBocmVmPVwiJyArIHRpY2tldFVybCArICdcIj48ZGl2IGNsYXNzPVwic2ItdG9vbHRpcC1ib3hcIj5UaWNrZXQ8L2Rpdj48L2E+JztcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9ICcnO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldENvbnRlbnQuY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5tb3ZlLmNhbGwodGhpcywgcG9zeCwgcG9zeSk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdHJ1ZTtcbiAgICB9O1xuICAgIFRvb2xUaXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSAnJztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5oaWRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gVG9vbFRpcDtcbn0oTG9hZGVyXzEuTG9hZGVyKSk7XG5leHBvcnRzLlRvb2xUaXAgPSBUb29sVGlwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlR5cGVBbmNob3JzID0gdm9pZCAwO1xudmFyIFR5cGVBbmNob3JzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFR5cGVBbmNob3JzKCkge1xuICAgICAgICB0aGlzLnN0YXR1c01hcEtleSA9ICd0eXBlQW5jaG9yc1RTJztcbiAgICAgICAgdGhpcy5zdGF0dXNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgaWYgKHNlYXJjaC5tYXRjaCgnLipjbGVhci4qJykpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN0YXR1c01hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkU3RhdHVzTWFwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHlwZUFuY2hvcnMucHJvdG90eXBlLnJlYWRTdGF0dXNNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZWRTdGF0dXNNYXAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0YXR1c01hcEtleSk7XG4gICAgICAgIGlmIChzdG9yZWRTdGF0dXNNYXAgPT09IG51bGwgfHwgc3RvcmVkU3RhdHVzTWFwID09PSB1bmRlZmluZWQgfHwgc3RvcmVkU3RhdHVzTWFwLnNlYXJjaCgvUmVjb21tZW5kYXRpb24vKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzTWFwKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFwID0gSlNPTi5wYXJzZShzdG9yZWRTdGF0dXNNYXApO1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLnN0YXR1c01hcCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdHVzTWFwW3R5cGVdO1xuICAgICAgICAgICAgICAgIHZhciBzaG93XzEgPSAhdmFsdWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGludGVyYWN0aXZlID0gbmV3IEludGVyYWN0aXZlVHlwZUFuY2hvcih0eXBlLCBzaG93XzEpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGl2ZS5pc0NsZWFyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNYXAuc2V0KHR5cGUsIGludGVyYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RpdmUuc2hvd09ySGlkZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibm90IGZvdW5kIFwiICsgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHlwZUFuY2hvcnMucHJvdG90eXBlLnN0b3JlU3RhdHVzTWFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0YXR1c01hcEtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0dXNNYXApKTtcbiAgICB9O1xuICAgIFR5cGVBbmNob3JzLnByb3RvdHlwZS5pbml0U3RhdHVzTWFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIi4uL2RhdGEvVHlwZUFuY2hvcnMuanNvblwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc3RhdHVzTWFwID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzTWFwID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVTdGF0dXNNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0YXR1c01hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFR5cGVBbmNob3JzLnByb3RvdHlwZS5zaG93T3JIaWRlID0gZnVuY3Rpb24gKHR5cGUsIHRvZ2dsZSkge1xuICAgICAgICB2YXIgYW5jaG9yID0gdGhpcy50b2dnbGVNYXAuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAoIWFuY2hvcikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBhbmNob3Iuc2hvd09ySGlkZSh0b2dnbGUpO1xuICAgICAgICByZXR1cm4gYW5jaG9yO1xuICAgIH07XG4gICAgVHlwZUFuY2hvcnMucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uICh0eXBlLCB0b2dnbGUpIHtcbiAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuc2hvd09ySGlkZSh0eXBlLCB0b2dnbGUpO1xuICAgICAgICBpZiAoIWFuY2hvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFuY2hvci5zd2l0Y2hWaWV3KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzTWFwW3R5cGVdID0gIXRoaXMuc3RhdHVzTWFwW3R5cGVdO1xuICAgICAgICB0aGlzLnN0b3JlU3RhdHVzTWFwKCk7XG4gICAgfTtcbiAgICBUeXBlQW5jaG9ycy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZU1hcC5zaXplID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBlbnRyeSBpbiB0aGlzLnRvZ2dsZU1hcCkge1xuICAgICAgICAgICAgLy90aGlzLnRvZ2dsZU1hcFtlbnRyeV0uYWRkTGlzdGVuZXIodHlwZUFuY2hvcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVHlwZUFuY2hvcnM7XG59KCkpO1xuZXhwb3J0cy5UeXBlQW5jaG9ycyA9IFR5cGVBbmNob3JzO1xudmFyIEludGVyYWN0aXZlVHlwZUFuY2hvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnRlcmFjdGl2ZVR5cGVBbmNob3IodHlwZSwgdmlldykge1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0LScgKyB0eXBlKTtcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZS0nICsgdHlwZSk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuICAgIEludGVyYWN0aXZlVHlwZUFuY2hvci5wcm90b3R5cGUuc3dpdGNoVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gIXRoaXMudmlldztcbiAgICB9O1xuICAgIEludGVyYWN0aXZlVHlwZUFuY2hvci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZUFuY2hvcikge1xuICAgICAgICAvKnRoaXMuaW50ZXJhY3RpdmU/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHR5cGVBbmNob3IuaGlkZU9yU2hvdyh0eXBlLCBmYWxzZSkpO1xuICAgIFxuICAgICAgICB0aGlzLmludGVyYWN0aXZlPy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0eXBlQW5jaG9yLmhpZGVPclNob3codHlwZSwgZmFsc2UpKTtcbiAgICBcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR5cGVBbmNob3IuaGlkZU9yU2hvdyh0eXBlLCB0cnVlKSk7Ki9cbiAgICB9O1xuICAgIEludGVyYWN0aXZlVHlwZUFuY2hvci5wcm90b3R5cGUuaXNDbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlRWxlbWVudCAhPSBudWxsICYmIHRoaXMudGFyZ2V0RWxlbWVudCAhPSBudWxsO1xuICAgIH07XG4gICAgSW50ZXJhY3RpdmVUeXBlQW5jaG9yLnByb3RvdHlwZS5zaG93T3JIaWRlID0gZnVuY3Rpb24gKHRvZ2dsZSkge1xuICAgICAgICBpZiAodG9nZ2xlICYmIHRoaXMudmlldykge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9nZ2xlICYmICF0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0b2dnbGUgJiYgdGhpcy52aWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdG9nZ2xlICYmICF0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnRlcmFjdGl2ZVR5cGVBbmNob3IucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gJyAmbmJzcDsgKyAmbmJzcDsgJztcbiAgICB9O1xuICAgIEludGVyYWN0aXZlVHlwZUFuY2hvci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gJyAmbmJzcDsgLSAmbmJzcDsgJztcbiAgICB9O1xuICAgIHJldHVybiBJbnRlcmFjdGl2ZVR5cGVBbmNob3I7XG59KCkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy9pbXBvcnQgeyBDb29raWUgfSBmcm9tIFwiLi9Db29raWVcIjtcbnZhciBNZW51ZV8xID0gcmVxdWlyZShcIi4vTWVudWVcIik7XG52YXIgVGVhc2VyXzEgPSByZXF1aXJlKFwiLi9UZWFzZXJcIik7XG52YXIgRGF5TmF2XzEgPSByZXF1aXJlKFwiLi9EYXlOYXZcIik7XG52YXIgVG9vbFRpcF8xID0gcmVxdWlyZShcIi4vVG9vbFRpcFwiKTtcbnZhciBEYXlJbmZvXzEgPSByZXF1aXJlKFwiLi9EYXlJbmZvXCIpO1xudmFyIENpdGVfMSA9IHJlcXVpcmUoXCIuL0NpdGVcIik7XG52YXIgVHlwZUFuY2hvcnNfMSA9IHJlcXVpcmUoXCIuL1R5cGVBbmNob3JzXCIpO1xudmFyIFJlY29tbWVuZGF0aW9uc18xID0gcmVxdWlyZShcIi4vUmVjb21tZW5kYXRpb25zXCIpO1xubmV3IERheU5hdl8xLkRheU5hdihcIlwiKS5sb2FkRmlsZSgpO1xudmFyIHRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jaXRlJyk7XG5pZiAodHJpZ2dlciAhPSB1bmRlZmluZWQpIHtcbiAgICB3aW5kb3dbJ3N0YWR0Ym9va1RTJ10gPSB7fTtcbiAgICAvL3dpbmRvd1snc3RhZHRib29rVFMnXVsnY29va2llJ10gPSBuZXcgQ29va2llKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIC8vd2luZG93WydzdGFkdGJvb2tUUyddWydjb29raWUnXS5sb2FkRmlsZSgpO1xuICAgIHdpbmRvd1snc3RhZHRib29rVFMnXVsndG9vbHRpcCddID0gbmV3IFRvb2xUaXBfMS5Ub29sVGlwKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHdpbmRvd1snc3RhZHRib29rVFMnXVsnbWVudWUnXSA9IG5ldyBNZW51ZV8xLk1lbnVlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHdpbmRvd1snc3RhZHRib29rVFMnXVsndHlwZUFuY2hvcnMnXSA9IG5ldyBUeXBlQW5jaG9yc18xLlR5cGVBbmNob3JzKCk7XG4gICAgbmV3IERheUluZm9fMS5EYXlJbmZvKFwiXCIpLmxvYWRGaWxlKCk7XG4gICAgbmV3IENpdGVfMS5DaXRlKFwiXCIpLmxvYWRGaWxlKCk7XG4gICAgbmV3IFJlY29tbWVuZGF0aW9uc18xLlJlY29tbWVuZGF0aW9ucyhcIlwiKS5sb2FkRmlsZSgpO1xuICAgIG5ldyBUZWFzZXJfMS5UZWFzZXIoXCJcIikubG9hZEZpbGUoKTtcbiAgICB3aW5kb3dbJ3N0YWR0Ym9va1RTJ11bJ3NldEluZm9Qb3NpdGlvbiddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKTtcbiAgICAgICAgdmFyIGluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKTtcbiAgICAgICAgaWYgKHRvcEVsZW1lbnQgJiYgaW5mb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbkJhbm5lciA9IHRvcEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMzA7XG4gICAgICAgICAgICBpbmZvRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBcIlwiICsgcG9zaXRpb25CYW5uZXI7XG4gICAgICAgICAgICBuZXcgRGF5TmF2XzEuRGF5TmF2KFwiXCIpLmxvYWRGaWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB3aW5kb3dbJ3N0YWR0Ym9va1RTJ10uc2V0SW5mb1Bvc2l0aW9uKCk7XG4gICAgfSk7XG4gICAgd2luZG93WydzdGFkdGJvb2tUUyddLnNldEluZm9Qb3NpdGlvbigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9