"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/pagination.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var PaginationPages = function (_a) {
    var nPages = _a.nPages, currentPage = _a.currentPage, setCurrentPage = _a.setCurrentPage;
    var pageNumbers = __spreadArray([], Array(nPages + 1).keys(), true).slice(1);
    return (react_1.default.createElement("ul", null, pageNumbers.map(function (pgNumber) { return (react_1.default.createElement("li", { key: pgNumber },
        react_1.default.createElement("a", { onClick: function () { return setCurrentPage(pgNumber); } }, pgNumber))); })));
};
exports["default"] = PaginationPages;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b16a0898fb2c2b61cc70")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGY1NmNlNS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsNENBQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLDhDQUE4QyxlQUFlO0FBQ3pKLDZDQUE2Qyx1QkFBdUIsb0NBQW9DLGdCQUFnQjtBQUN4SDtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNyQmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFBhZ2luYXRpb25QYWdlcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBuUGFnZXMgPSBfYS5uUGFnZXMsIGN1cnJlbnRQYWdlID0gX2EuY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlID0gX2Euc2V0Q3VycmVudFBhZ2U7XG4gICAgdmFyIHBhZ2VOdW1iZXJzID0gX19zcHJlYWRBcnJheShbXSwgQXJyYXkoblBhZ2VzICsgMSkua2V5cygpLCB0cnVlKS5zbGljZSgxKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgcGFnZU51bWJlcnMubWFwKGZ1bmN0aW9uIChwZ051bWJlcikgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IHBnTnVtYmVyIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEN1cnJlbnRQYWdlKHBnTnVtYmVyKTsgfSB9LCBwZ051bWJlcikpKTsgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQYWdpbmF0aW9uUGFnZXM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMTZhMDg5OGZiMmMyYjYxY2M3MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==