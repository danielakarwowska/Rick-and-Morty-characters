"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/pagination.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Pagination = function (_a) {
    var postsPerPage = _a.postsPerPage, totalPosts = _a.totalPosts, paginate = _a.paginate;
    var pageNumbers = [];
    for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("ul", { className: "pagination" }, pageNumbers.map(function (number) { return (react_1.default.createElement("li", { key: number, className: 'page-item' },
            react_1.default.createElement("a", { href: "!#", className: 'page-link', onClick: function () { return paginate(number); } }, number))); }))));
};
exports["default"] = Pagination;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f39be0c694786b2fad6e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTBkZjBjYi1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQTJDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx5QkFBeUIsc0NBQXNDLDhDQUE4QyxxQ0FBcUM7QUFDaE0saURBQWlELDJEQUEyRCw0QkFBNEIsY0FBYztBQUN0SjtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNoQmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFBhZ2luYXRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcG9zdHNQZXJQYWdlID0gX2EucG9zdHNQZXJQYWdlLCB0b3RhbFBvc3RzID0gX2EudG90YWxQb3N0cywgcGFnaW5hdGUgPSBfYS5wYWdpbmF0ZTtcbiAgICB2YXIgcGFnZU51bWJlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RzUGVyUGFnZSk7IGkrKykge1xuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwicGFnaW5hdGlvblwiIH0sIHBhZ2VOdW1iZXJzLm1hcChmdW5jdGlvbiAobnVtYmVyKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogbnVtYmVyLCBjbGFzc05hbWU6ICdwYWdlLWl0ZW0nIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcIiEjXCIsIGNsYXNzTmFtZTogJ3BhZ2UtbGluaycsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhZ2luYXRlKG51bWJlcik7IH0gfSwgbnVtYmVyKSkpOyB9KSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQYWdpbmF0aW9uO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjM5YmUwYzY5NDc4NmIyZmFkNmVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=