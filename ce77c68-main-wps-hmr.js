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
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const PaginationPages = ({ setCurrentPage, nPages }) => {
    const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);
    const onChangePage = (e, pageInfo) => {
        setCurrentPage(pageInfo.currentPage);
    };
    return (react_1.default.createElement("div", null, pageNumbers.map((pgNumber, index) => (react_1.default.createElement("li", { key: index },
        react_1.default.createElement("a", { onClick: () => setCurrentPage(pgNumber) }, pgNumber))))));
};
exports["default"] = PaginationPages;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a940e2983151e151326")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2U3N2M2OC1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQywyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JLFlBQVk7QUFDL0ksNkNBQTZDLHlDQUF5QztBQUN0RjtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNkZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IFBhZ2luYXRpb25QYWdlcyA9ICh7IHNldEN1cnJlbnRQYWdlLCBuUGFnZXMgfSkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gQXJyYXkuZnJvbShBcnJheShuUGFnZXMgKyAxKS5rZXlzKCkpLnNsaWNlKDEpO1xuICAgIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChlLCBwYWdlSW5mbykgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShwYWdlSW5mby5jdXJyZW50UGFnZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHBhZ2VOdW1iZXJzLm1hcCgocGdOdW1iZXIsIGluZGV4KSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgb25DbGljazogKCkgPT4gc2V0Q3VycmVudFBhZ2UocGdOdW1iZXIpIH0sIHBnTnVtYmVyKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhZ2luYXRpb25QYWdlcztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhOTQwZTI5ODMxNTFlMTUxMzI2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9