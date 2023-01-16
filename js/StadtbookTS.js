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
        var x = element.offsetLeft + 20;
        var posx = "" + x;
        var posy = "" + element.offsetTop;
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
            content += '<a class="sb-tooltip-link" target="extern" href="' + locationUrl + '" target="extern"><div class="sb-tooltip-box"> ' + location + ' Programm</div></a>';
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
        this.targetElement.innerHTML = '&#x2795;';
    };
    InteractiveTypeAnchor.prototype.show = function () {
        this.activeElement.style.display = 'block';
        this.targetElement.innerHTML = '&#x2796;';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQVE7QUFDN0Isb0JBQW9CLG1CQUFPLENBQUMsMkNBQWU7QUFDM0Msd0JBQXdCLG1CQUFPLENBQUMsbURBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RheUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RheU5hdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVjb21tZW5kYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9UZWFzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xUaXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R5cGVBbmNob3JzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2l0ZSA9IHZvaWQgMDtcbnZhciBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0xvYWRlclwiKTtcbnZhciBDaXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaXRlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENpdGUocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcXVlcnkpIHx8IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VXJsLmNhbGwoX3RoaXMsIFwiLi4vZGF0YS9DaXRlcy5qc29uXCIpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldFRhcmdldEhUTUwuY2FsbChfdGhpcywgXCJpbmZvLWNpdGVcIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ2l0ZS5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwganNvbiwgbGVuZ3RoLCBzZWxlY3RlZCwgY2l0ZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNVcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKF9zdXBlci5wcm90b3R5cGUuZ2V0VXJsLmNhbGwodGhpcykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0ganNvbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXRlID0ganNvbltzZWxlY3RlZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldENvbnRlbnQuY2FsbCh0aGlzLCBjaXRlLmNpdGUgKyAnIDxzdHJvbmc+KCcgKyBjaXRlLmF1dGhvciArICcpPC9zdHJvbmc+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnZpZXcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2l0ZTtcbn0oTG9hZGVyXzEuTG9hZGVyKSk7XG5leHBvcnRzLkNpdGUgPSBDaXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EYXlJbmZvID0gdm9pZCAwO1xudmFyIExvYWRlcl8xID0gcmVxdWlyZShcIi4vTG9hZGVyXCIpO1xudmFyIERheUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERheUluZm8sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF5SW5mbyhxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBxdWVyeSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGF0aXR1ZGUgPSA0OC4xMzcyO1xuICAgICAgICBfdGhpcy5sb25naXR1ZGUgPSAxMS41NzU1O1xuICAgICAgICBfdGhpcy5zdW5Eb3duID0gMjQuMDtcbiAgICAgICAgX3RoaXMuc3VuUmlzZSA9IDAuMDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MLmNhbGwoX3RoaXMsIFwiaW5mby1kYXlcIik7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciByZXN1bHQgPSBsb2NhdGlvbi5tYXRjaChcIlswLTldezR9XFwtWzAtOV17Mn1cXC1bMC05XXsyfVwiKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3R1YWwgPSBuZXcgRGF0ZShcIlwiICsgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmFjdHVhbCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEYXlJbmZvLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0Q29udGVudC5jYWxsKHRoaXMsICdTb25uZW5hdWZnYW5nOiA8c3Ryb25nPicgKyB0aGlzLmRpc3BsYXlTdW5SaXNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zdHJvbmc+IC0gU29ubmVudW50ZXJnYW5nOiA8c3Ryb25nPicgKyB0aGlzLmRpc3BsYXlTdW5Eb3duKCkgK1xuICAgICAgICAgICAgICAgICAgICAnPC9zdHJvbmc+IC0gVGFnZXNkYXVlcjogPHN0cm9uZz4nICsgdGhpcy5kaXNwbGF5RGF5RHVyYXRpb24oKSArICc8L3N0cm9uZz4nKTtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnZpZXcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXlJbmZvLnByb3RvdHlwZS5jb21wdXRlVGltZURpZmZlcmVuY2UgPSBmdW5jdGlvbiAoZGF5c09mWWVhcikge1xuICAgICAgICB2YXIgZGVjbGluYXRpb24gPSAwLjQwOTU0ICogTWF0aC5zaW4oMC4wMTcyICogKGRheXNPZlllYXIgLSA3OS4zNSkpO1xuICAgICAgICB2YXIgaCA9IC0oNTAgLyA2MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB2YXIgaFNpbiA9IE1hdGguc2luKGgpO1xuICAgICAgICB2YXIgbGF0aXR1ZGVEZWdyZWUgPSB0aGlzLmxhdGl0dWRlICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgcmV0dXJuIDEyLjAgKiBNYXRoLmFjb3MoKGhTaW4gLSBNYXRoLnNpbihsYXRpdHVkZURlZ3JlZSkgKiBNYXRoLnNpbihkZWNsaW5hdGlvbikpIC8gKE1hdGguY29zKGxhdGl0dWRlRGVncmVlKSAqIE1hdGguY29zKGRlY2xpbmF0aW9uKSkpIC8gTWF0aC5QSTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLnplaXRnbGVpY2h1bmcgPSBmdW5jdGlvbiAoVCkge1xuICAgICAgICByZXR1cm4gLTAuMTc1MiAqIE1hdGguc2luKDAuMDMzNDMwICogVCArIDAuNTQ3NCkgLSAwLjEzNDAgKiBNYXRoLnNpbigwLjAxODIzNCAqIFQgLSAwLjE5MzkpO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuZGlzcGxheVN1blJpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW50VGltZSh0aGlzLnN1blJpc2UpO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuY29tcHV0ZURheXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKHRoaXMuYWN0dWFsLmdldEZ1bGxZZWFyKCksIDAsIDApO1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuYWN0dWFsLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLSA0O1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuZGlzcGxheVN1bkRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW50VGltZSh0aGlzLnN1bkRvd24pO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUuZGlzcGxheURheUR1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFRpbWUodGhpcy5zdW5Eb3duIC0gdGhpcy5zdW5SaXNlKTtcbiAgICB9O1xuICAgIERheUluZm8ucHJvdG90eXBlLmRpc3BsYXlOaWdodER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFRpbWUoMjQgKyB0aGlzLnN1blJpc2UgLSB0aGlzLnN1bkRvd24pO1xuICAgIH07XG4gICAgRGF5SW5mby5wcm90b3R5cGUubGVhZGluZ1plcm8gPSBmdW5jdGlvbiAoaW50VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGludFZhbHVlID4gOSA/IFwiXCIgKyBpbnRWYWx1ZSA6IFwiMFwiICsgaW50VmFsdWU7XG4gICAgfTtcbiAgICBEYXlJbmZvLnByb3RvdHlwZS5wcmludFRpbWUgPSBmdW5jdGlvbiAoZGVjaW1hbFRpbWUpIHtcbiAgICAgICAgdmFyIGhvdXIgPSBNYXRoLmZsb29yKGRlY2ltYWxUaW1lKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkZWNpbWFsVGltZSAtIGhvdXIpICogNjApO1xuICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMubGVhZGluZ1plcm8oaG91cikgKyBcIjpcIiArIHRoaXMubGVhZGluZ1plcm8obWludXRlcyk7XG4gICAgfTtcbiAgICBEYXlJbmZvLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF5c09mWWVhciA9IHRoaXMuY29tcHV0ZURheXMoKTtcbiAgICAgICAgdmFyIHRpbWVEaWZmZXJlbmNlID0gdGhpcy5jb21wdXRlVGltZURpZmZlcmVuY2UoZGF5c09mWWVhcik7XG4gICAgICAgIHZhciB6ZWl0MSA9IHRoaXMuemVpdGdsZWljaHVuZyhkYXlzT2ZZZWFyKTtcbiAgICAgICAgdmFyIHRpbWVab25lID0gMjtcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsID4gbmV3IERhdGUoJzIwMjItMTAtMjknKSkge1xuICAgICAgICAgICAgdGltZVpvbmUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3JyZWN0aW9uTG9uZ2l0dWRlID0gdGltZVpvbmUgLSB0aGlzLmxvbmdpdHVkZSAvIDE1LjA7XG4gICAgICAgIHRoaXMuc3VuRG93biA9IDEyICsgdGltZURpZmZlcmVuY2UgLSB6ZWl0MSArIGNvcnJlY3Rpb25Mb25naXR1ZGU7XG4gICAgICAgIHRoaXMuc3VuUmlzZSA9IDEyIC0gdGltZURpZmZlcmVuY2UgLSB6ZWl0MSArIGNvcnJlY3Rpb25Mb25naXR1ZGU7XG4gICAgfTtcbiAgICByZXR1cm4gRGF5SW5mbztcbn0oTG9hZGVyXzEuTG9hZGVyKSk7XG5leHBvcnRzLkRheUluZm8gPSBEYXlJbmZvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EYXlOYXYgPSB2b2lkIDA7XG52YXIgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Mb2FkZXJcIik7XG52YXIgRGF5TmF2ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXlOYXYsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF5TmF2KGFjdHVhbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhY3R1YWwpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNldFRhcmdldEhUTUwoJ2RheS1saW5rLWJveCcpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbG9jYXRpb24ubWF0Y2goXCJbMC05XXs0fVxcLVswLTldezJ9XFwtWzAtOV17Mn1cIik7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0dWFsID0gbmV3IERhdGUoXCJcIiArIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5hY3R1YWwgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIF90aGlzLmFjdHVhbE1vbnRoU3RyaW5nID0gX3RoaXMuYWN0dWFsLnRvTG9jYWxlU3RyaW5nKCdkZScsIHsgbW9udGg6ICdzaG9ydCcgfSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKF90aGlzLnNjcmVlbldpZHRoID4gOTAwKSB7XG4gICAgICAgICAgICB2YXIgYWN0dWFsTW9udGggPSBfdGhpcy5hY3R1YWwuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIHZhciBhY3R1YWxZZWFyID0gX3RoaXMuYWN0dWFsLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBfdGhpcy5zdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGFjdHVhbFllYXIsIGFjdHVhbE1vbnRoLCAxKSk7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNEYXkgPSBfdGhpcy5hZGREYXlzKF90aGlzLnN0YXJ0LCAtMSk7XG4gICAgICAgICAgICB2YXIgcHJldk1vbnRoID0gcHJldmlvdXNEYXkuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIHZhciBwcmV2WWVhciA9IHByZXZpb3VzRGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBfdGhpcy5wcmV2ID0gbmV3IERhdGUoRGF0ZS5VVEMocHJldlllYXIsIHByZXZNb250aCwgMSkpO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IG5ldyBEYXRlKERhdGUuVVRDKGFjdHVhbFllYXIsIGFjdHVhbE1vbnRoICsgMSwgMSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF90aGlzLnNjcmVlbldpZHRoID4gNTk5KSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFydCA9IG5ldyBEYXRlKF90aGlzLmFjdHVhbCk7XG4gICAgICAgICAgICBfdGhpcy5wcmV2ID0gX3RoaXMuYWRkRGF5cyhfdGhpcy5zdGFydCwgLTE1KTtcbiAgICAgICAgICAgIF90aGlzLm5leHQgPSBfdGhpcy5hZGREYXlzKF90aGlzLnN0YXJ0LCAxNSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFydCA9IG5ldyBEYXRlKF90aGlzLmFjdHVhbCk7XG4gICAgICAgICAgICBfdGhpcy5wcmV2ID0gX3RoaXMuYWRkRGF5cyhfdGhpcy5zdGFydCwgLTgpO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLmFkZERheXMoX3RoaXMuc3RhcnQsIDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGF5TmF2LnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0Q29udGVudC5jYWxsKHRoaXMsIHRoaXMuY3JlYXRlSFRNTCgpKTtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnZpZXcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXlOYXYucHJvdG90eXBlLmFkZERheXMgPSBmdW5jdGlvbiAoZGF0ZSwgZGF5cykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIERheU5hdi5wcm90b3R5cGUuZGVyaXZlQ2xhc3MgPSBmdW5jdGlvbiAoc3RhcnREYXRlKSB7XG4gICAgICAgIGlmIChzdGFydERhdGUuZ2V0RGF0ZSgpID09IHRoaXMuYWN0dWFsLmdldERhdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzYi1kYXktYWN0dWFsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydERhdGUuZ2V0RGF5KCkgPT0gMCB8fCBzdGFydERhdGUuZ2V0RGF5KCkgPT0gNikge1xuICAgICAgICAgICAgcmV0dXJuICdzYi1kYXktbGluay13ZWVrZW5kJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3NiLWRheS1saW5rJztcbiAgICB9O1xuICAgIERheU5hdi5wcm90b3R5cGUuY3JlYXRlSFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNyZWF0ZVByZXZIVE1MKCk7XG4gICAgICAgIHZhciBhY3R1YWwgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0KTtcbiAgICAgICAgd2hpbGUgKGFjdHVhbCA8IHRoaXMubmV4dCkge1xuICAgICAgICAgICAgaHRtbCArPSAnPGEgJyArXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlTGluayhhY3R1YWwpICtcbiAgICAgICAgICAgICAgICAnIGNsYXNzPVwiJyArXG4gICAgICAgICAgICAgICAgdGhpcy5kZXJpdmVDbGFzcyhhY3R1YWwpICtcbiAgICAgICAgICAgICAgICAnXCIgPicgK1xuICAgICAgICAgICAgICAgIGFjdHVhbC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgICc8L2E+JztcbiAgICAgICAgICAgIGlmIChhY3R1YWwuZ2V0RGF5KCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJyAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnJm5ic3A7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdHVhbCA9IHRoaXMuYWRkRGF5cyhhY3R1YWwsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gdGhpcy5jcmVhdGVOZXh0SFRNTCgpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuICAgIERheU5hdi5wcm90b3R5cGUuY3JlYXRlUHJldkhUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBodG1sID0gdGhpcy5hY3R1YWxNb250aFN0cmluZyArICcgJm5ic3A7ICAmbmJzcDsgJztcbiAgICAgICAgaWYgKHRoaXMucHJldiA8IG5ldyBEYXRlKCcyMDIyLTA2LTAxJykpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sICsgJzxhICcgK1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlTGluayh0aGlzLnByZXYpICtcbiAgICAgICAgICAgICcgY2xhc3M9XCJzYi1kYXktbGlua1wiID48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1sZWZ0XCI+PC9pPjwvYT4mbmJzcDsmbmJzcDsmbmJzcDsnO1xuICAgIH07XG4gICAgRGF5TmF2LnByb3RvdHlwZS5jcmVhdGVOZXh0SFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcmbmJzcDsmbmJzcDsmbmJzcDs8YSAnICtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZUxpbmsodGhpcy5uZXh0KSArXG4gICAgICAgICAgICAnIGNsYXNzPVwic2ItZGF5LWxpbmtcIiA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtcmlnaHRcIj48L2k+PC9hPic7XG4gICAgfTtcbiAgICBEYXlOYXYucHJvdG90eXBlLmNyZWF0ZVBhZ2VMaW5rID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuICdocmVmPVwiLi4vZGF5cy9tdW5pY2gtJyArXG4gICAgICAgICAgICBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArXG4gICAgICAgICAgICAnLmh0bWxcIic7XG4gICAgfTtcbiAgICByZXR1cm4gRGF5TmF2O1xufShMb2FkZXJfMS5Mb2FkZXIpKTtcbmV4cG9ydHMuRGF5TmF2ID0gRGF5TmF2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvYWRlciA9IHZvaWQgMDtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9hZGVyKHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMudXJsID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gXCJcIjtcbiAgICAgICAgdGhpcy50YXJnZXRIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gXCJcIjtcbiAgICAgICAgdGhpcy52ZXJzaW9uS2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnNldFZlcnNpb25LZXkgPSBmdW5jdGlvbiAodmVyc2lvbktleSkge1xuICAgICAgICB0aGlzLnZlcnNpb25LZXkgPSB2ZXJzaW9uS2V5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGFzVmVyc2lvbktleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy52ZXJzaW9uS2V5ID09IFwiXCIpO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zdG9yZVZlcnNpb25LZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNWZXJzaW9uS2V5KCkgfHwgIXRoaXMuaGFzVmVyc2lvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy52ZXJzaW9uS2V5LCB0aGlzLnZlcnNpb24pO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuc2V0VmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5oYXNWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLnZlcnNpb24gPT0gXCJcIik7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmNoZWNrVmVyc2lvbkFuZEtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1ZlcnNpb25LZXkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhc1ZlcnNpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucXVlcnkubWF0Y2goXCIuKmNsZWFyLipcIikpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudmVyc2lvbktleSwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudmVyc2lvbktleSk7XG4gICAgICAgIHJldHVybiAoc3RvcmVkICE9IHRoaXMudmVyc2lvbik7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLnNldFRhcmdldEhUTUwgPSBmdW5jdGlvbiAodGFyZ2V0SFRNTCkge1xuICAgICAgICB0aGlzLnRhcmdldEhUTUwgPSB0YXJnZXRIVE1MO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGFzVGFyZ2V0SFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy50YXJnZXRIVE1MID09IFwiXCIpO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuaGFzVXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLnVybCA9PSBcIlwiKTtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5oYXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLnVybCA9PSBcIlwiKTtcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUudmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1RhcmdldEhUTUwoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDT05URU5UOiBcIiArIHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmxvYWRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzVGFyZ2V0SFRNTCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YXJnZXRIVE1MKTtcbiAgICAgICAgaWYgKGh0bWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVtZW50IFwiICsgdGhpcy50YXJnZXRIVE1MICsgXCIgbm90IGZvdW5kOiBcIik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBcIlwiO1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMubG9hZEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGh0bWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHRtbC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIGh0bWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuICAgIExvYWRlci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBodG1sID0gdGhpcy5sb2FkRWxlbWVudCgpO1xuICAgICAgICBpZiAoaHRtbCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBodG1sLnN0eWxlLmxlZnQgPSB4O1xuICAgICAgICBodG1sLnN0eWxlLnRvcCA9IHk7XG4gICAgICAgIGh0bWwuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICAgICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG4gICAgTG9hZGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMubG9hZEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGh0bWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHRtbC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIGh0bWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcbiAgICBMb2FkZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1VybCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godGhpcy51cmwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5jb250ZW50ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tWZXJzaW9uQW5kS2V5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2FkZXIuUVVFUlkgPSBcImNsZWFyXCI7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oKSk7XG5leHBvcnRzLkxvYWRlciA9IExvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVudWUgPSB2b2lkIDA7XG52YXIgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Mb2FkZXJcIik7XG52YXIgTWVudWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lbnVlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1lbnVlKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHF1ZXJ5KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50b2dnbGUgPSBmYWxzZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRVcmwuY2FsbChfdGhpcywgXCIuLi9wYWdlcy9NZW51ZS5odG1sXCIpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldFRhcmdldEhUTUwuY2FsbChfdGhpcywgXCJtZW51ZS1ib3hcIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWVudWUucHJvdG90eXBlLnNob3dPckhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZSkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zaG93LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZW51ZTtcbn0oTG9hZGVyXzEuTG9hZGVyKSk7XG5leHBvcnRzLk1lbnVlID0gTWVudWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlY29tbWVuZGF0aW9ucyA9IHZvaWQgMDtcbnZhciBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0xvYWRlclwiKTtcbnZhciBSZWNvbW1lbmRhdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlY29tbWVuZGF0aW9ucywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWNvbW1lbmRhdGlvbnMocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcXVlcnkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlY29tbWVuZGF0aW9ucyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldFVybC5jYWxsKF90aGlzLCBcIi4uL2RhdGEvUmVjb21tZW5kYXRpb25zLmpzb25cIik7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0VGFyZ2V0SFRNTC5jYWxsKF90aGlzLCBcInRhcmdldC1SZWNvbW1lbmRhdGlvblwiKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZWNvbW1lbmRhdGlvbnMucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGpzb24sIGNvdW50ZXIsIHJlY29tbWVuZGF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1VybCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goX3N1cGVyLnByb3RvdHlwZS5nZXRVcmwuY2FsbCh0aGlzKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvdW50ZXIgaW4ganNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uID0gbmV3IFJlY29tbWVuZGF0aW9uKGpzb25bY291bnRlcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvbW1lbmRhdGlvbi5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbW1lbmRhdGlvbnMucHVzaChyZWNvbW1lbmRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRDb250ZW50LmNhbGwodGhpcywgdGhpcy5yZW5kZXIoMykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS52aWV3LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb25zLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAobWF4RGlzcGxheSkge1xuICAgICAgICB2YXIgaHRtbCA9ICcnO1xuICAgICAgICB2YXIgcmVjb21tZW5kYXRpb25Db3VudCA9IHRoaXMucmVjb21tZW5kYXRpb25zLmxlbmd0aDtcbiAgICAgICAgaWYgKHJlY29tbWVuZGF0aW9uQ291bnQgPCBtYXhEaXNwbGF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY29tbWVuZGF0aW9uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByZWNvbW1lbmRhdGlvbiA9IHRoaXMucmVjb21tZW5kYXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gcmVjb21tZW5kYXRpb24uY3JlYXRlSFRNTCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZvdW5kQ291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgdmlldyA9ICcsJztcbiAgICAgICAgICAgIHdoaWxlIChmb3VuZENvdW50ZXIgPCBtYXhEaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWNvbW1lbmRhdGlvbkNvdW50KTtcbiAgICAgICAgICAgICAgICBpZiAodmlldy5pbmNsdWRlcygnLCcgKyBpICsgJywnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlY29tbWVuZGF0aW9uID0gdGhpcy5yZWNvbW1lbmRhdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgdmlldyArPSBpICsgJywnO1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gcmVjb21tZW5kYXRpb24uY3JlYXRlSFRNTCgpO1xuICAgICAgICAgICAgICAgIGZvdW5kQ291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaHRtbCArPSAnPC9kaXY+J1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuICAgIHJldHVybiBSZWNvbW1lbmRhdGlvbnM7XG59KExvYWRlcl8xLkxvYWRlcikpO1xuZXhwb3J0cy5SZWNvbW1lbmRhdGlvbnMgPSBSZWNvbW1lbmRhdGlvbnM7XG52YXIgUmVjb21tZW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVjb21tZW5kYXRpb24oanNvbikge1xuICAgICAgICB0aGlzLnR5cGUgPSBqc29uLnR5cGU7XG4gICAgICAgIHRoaXMuYWN0dWFsRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChqc29uLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShqc29uLnN0YXJ0RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpzb24uc3RvcERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcERhdGUgPSBuZXcgRGF0ZShqc29uLnN0b3BEYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoanNvbi5ldmVudERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREYXRlID0gbmV3IERhdGUoanNvbi5ldmVudERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBqc29uLmxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uUGFnZSA9IGpzb24ubG9jYXRpb25QYWdlO1xuICAgICAgICB0aGlzLnRpdGxlID0ganNvbi50aXRsZTtcbiAgICAgICAgdGhpcy5ocmVmID0ganNvbi5ocmVmO1xuICAgICAgICB0aGlzLmltZyA9IGpzb24uaW1nO1xuICAgICAgICB0aGlzLnNob3dGbGFnID0gZmFsc2U7XG4gICAgfVxuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFdmVudERhdGUoKSAmJiB0aGlzLmV2ZW50RGF0ZSA8IHRoaXMuYWN0dWFsRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1N0b3BEYXRlKCkgJiYgdGhpcy5zdG9wRGF0ZSA8IHRoaXMuYWN0dWFsRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1N0YXJ0RGF0ZSgpICYmIHRoaXMuc3RhcnREYXRlID4gdGhpcy5hY3R1YWxEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuaGFzU3RhcnREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydERhdGUgIT0gbnVsbCAmJiB0aGlzLnN0YXJ0RGF0ZSAhPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuaGFzU3RvcERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3BEYXRlICE9IG51bGwgJiYgdGhpcy5zdG9wRGF0ZSAhPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuaGFzRXZlbnREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudERhdGUgIT0gbnVsbCAmJiB0aGlzLmV2ZW50RGF0ZSAhPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuZGlzcGxheVllYXIgPSBmdW5jdGlvbiAobXlEYXRlKSB7XG4gICAgICAgIHJldHVybiBteURhdGUuZ2V0RnVsbFllYXIoKSAtIDIwMDA7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuZGlzcGxheU1vbnRoID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBteURhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGlmICh2YWx1ZSA+IDkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWU7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuZGlzcGxheU1pbiA9IGZ1bmN0aW9uIChteURhdGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbXlEYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWU7XG4gICAgfTtcbiAgICBSZWNvbW1lbmRhdGlvbi5wcm90b3R5cGUuZGlzcGxheUhvdXIgPSBmdW5jdGlvbiAobXlEYXRlKSB7XG4gICAgICAgIGlmIChteURhdGUuZ2V0SG91cnMoKSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzAwJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBteURhdGUuZ2V0SG91cnMoKSAtIDE7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlUaW1lID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBteURhdGUuZ2V0VVRDSG91cnMoKSAtIDE7XG4gICAgICAgIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5kaXNwbGF5RGF5ID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBteURhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAodmFsdWUgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmRpc3BsYXlEYXRlID0gZnVuY3Rpb24gKG15RGF0ZSkge1xuICAgICAgICB2YXIgZGF0ZSA9IHRoaXMuZGlzcGxheURheShteURhdGUpICsgXCIuXCIgKyB0aGlzLmRpc3BsYXlNb250aChteURhdGUpICsgXCIuXCIgKyB0aGlzLmRpc3BsYXlZZWFyKG15RGF0ZSk7XG4gICAgICAgIHZhciB1dGNIb3VycyA9IG15RGF0ZS5nZXRVVENIb3VycygpO1xuICAgICAgICBpZiAodXRjSG91cnMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlICsgXCIgXCIgKyB0aGlzLmRpc3BsYXlIb3VyKG15RGF0ZSkgKyBcIjpcIiArIHRoaXMuZGlzcGxheU1pbihteURhdGUpO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLnNob3dTdGFydERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ2b24gXCIgKyB0aGlzLmRpc3BsYXlEYXRlKHRoaXMuc3RhcnREYXRlKTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5zaG93U3RvcERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIiBiaXMgXCIgKyB0aGlzLmRpc3BsYXlEYXRlKHRoaXMuc3RvcERhdGUpO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLnNob3dFdmVudERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIgXCIgKyB0aGlzLmRpc3BsYXlEYXRlKHRoaXMuZXZlbnREYXRlKTtcbiAgICB9O1xuICAgIFJlY29tbWVuZGF0aW9uLnByb3RvdHlwZS5zaG93RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1N0YXJ0RGF0ZSgpICsgdGhpcy5zaG93U3RvcERhdGUoKSArIHRoaXMuc2hvd0V2ZW50RGF0ZSgpO1xuICAgIH07XG4gICAgUmVjb21tZW5kYXRpb24ucHJvdG90eXBlLmNyZWF0ZUhUTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJzYi1ldmVudFwiPic7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJzYi1ldmVudC1zcGVjcGFnZS1ib3hcIj4nO1xuICAgICAgICBodG1sICs9ICc8YSBocmVmPVwiLi4vdHlwZXMvJyArIHRoaXMudHlwZSArICcuaHRtbFwiIGNsYXNzPVwic2ItZXZlbnQtc3BlY3BhZ2UtbGlua1wiPicgKyB0aGlzLnR5cGUgKyAnPC9hPjogJztcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25QYWdlKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8YSBocmVmPVwiLi4vbG9jYXRpb25zLycgKyB0aGlzLmxvY2F0aW9uUGFnZSArICcuaHRtbFwiIGNsYXNzPVwic2ItZXZlbnQtc3BlY3BhZ2UtbGlua1wiPicgKyB0aGlzLmxvY2F0aW9uICsgJzwvYT4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaHRtbCArPSB0aGlzLmxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gJzwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj4nO1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic2ItZXZlbnQtc3RhcnRkYXRlXCI+JyArIHRoaXMuc2hvd0RhdGUoKSArICc8L2Rpdj4nO1xuICAgICAgICBodG1sICs9ICc8ZGl2PjwvZGl2Pic7XG4gICAgICAgIGh0bWwgKz0gJzxhIGhyZWY9XCInICsgdGhpcy5ocmVmICsgJ1wiIHRhcmdldD1cImV4dGVyblwiPic7XG4gICAgICAgIGh0bWwgKz0gJzxoNCBjbGFzcz1cInNiLWV2ZW50LWg0XCIgPicgKyB0aGlzLnRpdGxlICsgJzwvaDQ+PC9hPic7XG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH07XG4gICAgcmV0dXJuIFJlY29tbWVuZGF0aW9uO1xufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGVhc2VyID0gdm9pZCAwO1xudmFyIExvYWRlcl8xID0gcmVxdWlyZShcIi4vTG9hZGVyXCIpO1xudmFyIFRlYXNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGVhc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRlYXNlcihxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBxdWVyeSkgfHwgdGhpcztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRVcmwuY2FsbChfdGhpcywgXCIuLi9kYXRhL1RlYXNlckxpc3QuanNvblwiKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MLmNhbGwoX3RoaXMsIFwiaW5mby10ZWFzZXJcIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVGVhc2VyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqc29uLCBsZW5ndGgsIHNlbGVjdGVkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1VybCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goX3N1cGVyLnByb3RvdHlwZS5nZXRVcmwuY2FsbCh0aGlzKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBqc29uLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0Q29udGVudC5jYWxsKHRoaXMsIGpzb25bc2VsZWN0ZWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudmlldy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUZWFzZXI7XG59KExvYWRlcl8xLkxvYWRlcikpO1xuZXhwb3J0cy5UZWFzZXIgPSBUZWFzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRvb2xUaXAgPSB2b2lkIDA7XG52YXIgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Mb2FkZXJcIik7XG52YXIgVG9vbFRpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVG9vbFRpcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb29sVGlwKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHF1ZXJ5KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50b2dnbGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaWQgPSAnJztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXRUYXJnZXRIVE1MLmNhbGwoX3RoaXMsIFwidG9vbC10aXBcIik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVG9vbFRpcC5wcm90b3R5cGUuc2hvd09ySGlkZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBhcnRpc3RUaXRsZSwgdHlwZSwgbG9jYXRpb25VcmwsIGxvY2F0aW9uLCBsb2NhbGl0eSwgdGlja2V0VXJsLCBhcnRpc3RVcmwsIHlvdXR1YmVVcmwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAodGhpcy50b2dnbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkID09IGVsZW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGlkZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWQgPSBlbGVtZW50SWQ7XG4gICAgICAgIHZhciBjb250ZW50ID0gJyc7XG4gICAgICAgIHZhciB4ID0gZWxlbWVudC5vZmZzZXRMZWZ0ICsgMjA7XG4gICAgICAgIHZhciBwb3N4ID0gXCJcIiArIHg7XG4gICAgICAgIHZhciBwb3N5ID0gXCJcIiArIGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICBjb250ZW50ICs9ICcnO1xuICAgICAgICBpZiAoYXJ0aXN0VXJsICE9ICcnKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCInICsgYXJ0aXN0VXJsICsgJ1wiPjxkaXYgY2xhc3M9XCJzYi10b29sdGlwLWJveFwiPkvDvG5zdGxlcjwvZGl2PjwvYT4nO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5b3V0dWJlVXJsICE9ICcnKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCInICsgeW91dHViZVVybCArICdcIj48ZGl2Y2xhc3M9XCJzYi10b29sdGlwLWJveFwiPllvdXR1YmU8L2Rpdj48L2E+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdLYWJhcmV0dCcgfHwgdHlwZSA9PSAnTXVzaWtrb256ZXJ0Jykge1xuICAgICAgICAgICAgY29udGVudCArPSAnPGEgY2xhc3M9XCJzYi10b29sdGlwLWxpbmtcIiB0YXJnZXQ9XCJleHRlcm5cIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcmVzdWx0cz9zZWFyY2hfcXVlcnk9JyArIHR5cGUgKyAnKycgKyBhcnRpc3RUaXRsZSArICdcIj48ZGl2IGNsYXNzPVwic2ItdG9vbHRpcC1ib3hcIj5Zb3V0dWJlIFN1Y2hlPC9kaXY+PC9hPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2F0aW9uVXJsICE9ICcnKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCInICsgbG9jYXRpb25VcmwgKyAnXCIgdGFyZ2V0PVwiZXh0ZXJuXCI+PGRpdiBjbGFzcz1cInNiLXRvb2x0aXAtYm94XCI+ICcgKyBsb2NhdGlvbiArICcgUHJvZ3JhbW08L2Rpdj48L2E+JztcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPScgKyBsb2NhbGl0eSArICcrJyArIGxvY2F0aW9uICsgJ1wiPjxkaXYgY2xhc3M9XCJzYi10b29sdGlwLWJveFwiPkdvb2dsZSBTdWNoZTwvZGl2PjwvYT4nO1xuICAgICAgICBpZiAodGlja2V0VXJsICE9ICcnKSB7XG4gICAgICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNiLXRvb2x0aXAtbGlua1wiIHRhcmdldD1cImV4dGVyblwiIGhyZWY9XCInICsgdGlja2V0VXJsICsgJ1wiPjxkaXYgY2xhc3M9XCJzYi10b29sdGlwLWJveFwiPlRpY2tldDwvZGl2PjwvYT4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgKz0gJyc7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0Q29udGVudC5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm1vdmUuY2FsbCh0aGlzLCBwb3N4LCBwb3N5KTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0cnVlO1xuICAgIH07XG4gICAgVG9vbFRpcC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9ICcnO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmhpZGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBUb29sVGlwO1xufShMb2FkZXJfMS5Mb2FkZXIpKTtcbmV4cG9ydHMuVG9vbFRpcCA9IFRvb2xUaXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHlwZUFuY2hvcnMgPSB2b2lkIDA7XG52YXIgVHlwZUFuY2hvcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHlwZUFuY2hvcnMoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWFwS2V5ID0gJ3R5cGVBbmNob3JzVFMnO1xuICAgICAgICB0aGlzLnN0YXR1c01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50b2dnbGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICBpZiAoc2VhcmNoLm1hdGNoKCcuKmNsZWFyLionKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdGF0dXNNYXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUeXBlQW5jaG9ycy5wcm90b3R5cGUucmVhZFN0YXR1c01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0b3JlZFN0YXR1c01hcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RhdHVzTWFwS2V5KTtcbiAgICAgICAgaWYgKHN0b3JlZFN0YXR1c01hcCA9PT0gbnVsbCB8fCBzdG9yZWRTdGF0dXNNYXAgPT09IHVuZGVmaW5lZCB8fCBzdG9yZWRTdGF0dXNNYXAuc2VhcmNoKC9SZWNvbW1lbmRhdGlvbi8pID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRTdGF0dXNNYXAoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNNYXAgPSBKU09OLnBhcnNlKHN0b3JlZFN0YXR1c01hcCk7XG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMuc3RhdHVzTWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0dXNNYXBbdHlwZV07XG4gICAgICAgICAgICAgICAgdmFyIHNob3dfMSA9ICF2YWx1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJhY3RpdmUgPSBuZXcgSW50ZXJhY3RpdmVUeXBlQW5jaG9yKHR5cGUsIHNob3dfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0aXZlLmlzQ2xlYXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1hcC5zZXQodHlwZSwgaW50ZXJhY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZS5zaG93T3JIaWRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJub3QgZm91bmQgXCIgKyB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUeXBlQW5jaG9ycy5wcm90b3R5cGUuc3RvcmVTdGF0dXNNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RhdHVzTWFwS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXR1c01hcCkpO1xuICAgIH07XG4gICAgVHlwZUFuY2hvcnMucHJvdG90eXBlLmluaXRTdGF0dXNNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiLi4vZGF0YS9UeXBlQW5jaG9ycy5qc29uXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zdGF0dXNNYXAgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXNNYXAgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZVN0YXR1c01hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RhdHVzTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHlwZUFuY2hvcnMucHJvdG90eXBlLnNob3dPckhpZGUgPSBmdW5jdGlvbiAodHlwZSwgdG9nZ2xlKSB7XG4gICAgICAgIHZhciBhbmNob3IgPSB0aGlzLnRvZ2dsZU1hcC5nZXQodHlwZSk7XG4gICAgICAgIGlmICghYW5jaG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGFuY2hvci5zaG93T3JIaWRlKHRvZ2dsZSk7XG4gICAgICAgIHJldHVybiBhbmNob3I7XG4gICAgfTtcbiAgICBUeXBlQW5jaG9ycy5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHR5cGUsIHRvZ2dsZSkge1xuICAgICAgICB2YXIgYW5jaG9yID0gdGhpcy5zaG93T3JIaWRlKHR5cGUsIHRvZ2dsZSk7XG4gICAgICAgIGlmICghYW5jaG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYW5jaG9yLnN3aXRjaFZpZXcoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNNYXBbdHlwZV0gPSAhdGhpcy5zdGF0dXNNYXBbdHlwZV07XG4gICAgICAgIHRoaXMuc3RvcmVTdGF0dXNNYXAoKTtcbiAgICB9O1xuICAgIFR5cGVBbmNob3JzLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlTWFwLnNpemUgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGVudHJ5IGluIHRoaXMudG9nZ2xlTWFwKSB7XG4gICAgICAgICAgICAvL3RoaXMudG9nZ2xlTWFwW2VudHJ5XS5hZGRMaXN0ZW5lcih0eXBlQW5jaG9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUeXBlQW5jaG9ycztcbn0oKSk7XG5leHBvcnRzLlR5cGVBbmNob3JzID0gVHlwZUFuY2hvcnM7XG52YXIgSW50ZXJhY3RpdmVUeXBlQW5jaG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEludGVyYWN0aXZlVHlwZUFuY2hvcih0eXBlLCB2aWV3KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQtJyArIHR5cGUpO1xuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlLScgKyB0eXBlKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG4gICAgSW50ZXJhY3RpdmVUeXBlQW5jaG9yLnByb3RvdHlwZS5zd2l0Y2hWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpZXcgPSAhdGhpcy52aWV3O1xuICAgIH07XG4gICAgSW50ZXJhY3RpdmVUeXBlQW5jaG9yLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlQW5jaG9yKSB7XG4gICAgICAgIC8qdGhpcy5pbnRlcmFjdGl2ZT8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdHlwZUFuY2hvci5oaWRlT3JTaG93KHR5cGUsIGZhbHNlKSk7XG4gICAgXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmU/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHR5cGVBbmNob3IuaGlkZU9yU2hvdyh0eXBlLCBmYWxzZSkpO1xuICAgIFxuICAgICAgICB0aGlzLmludGVyYWN0aXZlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHlwZUFuY2hvci5oaWRlT3JTaG93KHR5cGUsIHRydWUpKTsqL1xuICAgIH07XG4gICAgSW50ZXJhY3RpdmVUeXBlQW5jaG9yLnByb3RvdHlwZS5pc0NsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50ICE9IG51bGwgJiYgdGhpcy50YXJnZXRFbGVtZW50ICE9IG51bGw7XG4gICAgfTtcbiAgICBJbnRlcmFjdGl2ZVR5cGVBbmNob3IucHJvdG90eXBlLnNob3dPckhpZGUgPSBmdW5jdGlvbiAodG9nZ2xlKSB7XG4gICAgICAgIGlmICh0b2dnbGUgJiYgdGhpcy52aWV3KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2dnbGUgJiYgIXRoaXMudmlldykge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRvZ2dsZSAmJiB0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0b2dnbGUgJiYgIXRoaXMudmlldykge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEludGVyYWN0aXZlVHlwZUFuY2hvci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSAnJiN4Mjc5NTsnO1xuICAgIH07XG4gICAgSW50ZXJhY3RpdmVUeXBlQW5jaG9yLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSAnJiN4Mjc5NjsnO1xuICAgIH07XG4gICAgcmV0dXJuIEludGVyYWN0aXZlVHlwZUFuY2hvcjtcbn0oKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vL2ltcG9ydCB7IENvb2tpZSB9IGZyb20gXCIuL0Nvb2tpZVwiO1xudmFyIE1lbnVlXzEgPSByZXF1aXJlKFwiLi9NZW51ZVwiKTtcbnZhciBUZWFzZXJfMSA9IHJlcXVpcmUoXCIuL1RlYXNlclwiKTtcbnZhciBEYXlOYXZfMSA9IHJlcXVpcmUoXCIuL0RheU5hdlwiKTtcbnZhciBUb29sVGlwXzEgPSByZXF1aXJlKFwiLi9Ub29sVGlwXCIpO1xudmFyIERheUluZm9fMSA9IHJlcXVpcmUoXCIuL0RheUluZm9cIik7XG52YXIgQ2l0ZV8xID0gcmVxdWlyZShcIi4vQ2l0ZVwiKTtcbnZhciBUeXBlQW5jaG9yc18xID0gcmVxdWlyZShcIi4vVHlwZUFuY2hvcnNcIik7XG52YXIgUmVjb21tZW5kYXRpb25zXzEgPSByZXF1aXJlKFwiLi9SZWNvbW1lbmRhdGlvbnNcIik7XG5uZXcgRGF5TmF2XzEuRGF5TmF2KFwiXCIpLmxvYWRGaWxlKCk7XG52YXIgdHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWNpdGUnKTtcbmlmICh0cmlnZ2VyICE9IHVuZGVmaW5lZCkge1xuICAgIHdpbmRvd1snc3RhZHRib29rVFMnXSA9IHt9O1xuICAgIC8vd2luZG93WydzdGFkdGJvb2tUUyddWydjb29raWUnXSA9IG5ldyBDb29raWUod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgLy93aW5kb3dbJ3N0YWR0Ym9va1RTJ11bJ2Nvb2tpZSddLmxvYWRGaWxlKCk7XG4gICAgd2luZG93WydzdGFkdGJvb2tUUyddWyd0b29sdGlwJ10gPSBuZXcgVG9vbFRpcF8xLlRvb2xUaXAod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgd2luZG93WydzdGFkdGJvb2tUUyddWydtZW51ZSddID0gbmV3IE1lbnVlXzEuTWVudWUod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgd2luZG93WydzdGFkdGJvb2tUUyddWyd0eXBlQW5jaG9ycyddID0gbmV3IFR5cGVBbmNob3JzXzEuVHlwZUFuY2hvcnMoKTtcbiAgICBuZXcgRGF5SW5mb18xLkRheUluZm8oXCJcIikubG9hZEZpbGUoKTtcbiAgICBuZXcgQ2l0ZV8xLkNpdGUoXCJcIikubG9hZEZpbGUoKTtcbiAgICBuZXcgUmVjb21tZW5kYXRpb25zXzEuUmVjb21tZW5kYXRpb25zKFwiXCIpLmxvYWRGaWxlKCk7XG4gICAgbmV3IFRlYXNlcl8xLlRlYXNlcihcIlwiKS5sb2FkRmlsZSgpO1xuICAgIHdpbmRvd1snc3RhZHRib29rVFMnXVsnc2V0SW5mb1Bvc2l0aW9uJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3BFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpO1xuICAgICAgICB2YXIgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuICAgICAgICBpZiAodG9wRWxlbWVudCAmJiBpbmZvRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uQmFubmVyID0gdG9wRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAzMDtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IFwiXCIgKyBwb3NpdGlvbkJhbm5lcjtcbiAgICAgICAgICAgIG5ldyBEYXlOYXZfMS5EYXlOYXYoXCJcIikubG9hZEZpbGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHdpbmRvd1snc3RhZHRib29rVFMnXS5zZXRJbmZvUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgICB3aW5kb3dbJ3N0YWR0Ym9va1RTJ10uc2V0SW5mb1Bvc2l0aW9uKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=