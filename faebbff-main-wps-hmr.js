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
const PaginationPages = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    return (react_1.default.createElement("ul", null, pageNumbers.map((pgNumber) => (react_1.default.createElement("li", { key: pgNumber },
        react_1.default.createElement("a", { onClick: () => setCurrentPage(pgNumber) }, pgNumber))))));
};
exports["default"] = PaginationPages;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("134f8d14071e216d0d8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFlYmJmZi1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQywyQkFBMkIscUNBQXFDO0FBQ2hFO0FBQ0EsMkhBQTJILGVBQWU7QUFDMUksNkNBQTZDLHlDQUF5QztBQUN0RjtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNYZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IFBhZ2luYXRpb25QYWdlcyA9ICh7IG5QYWdlcywgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlIH0pID0+IHtcbiAgICBjb25zdCBwYWdlTnVtYmVycyA9IFsuLi5BcnJheShuUGFnZXMgKyAxKS5rZXlzKCldLnNsaWNlKDEpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBwYWdlTnVtYmVycy5tYXAoKHBnTnVtYmVyKSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogcGdOdW1iZXIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgb25DbGljazogKCkgPT4gc2V0Q3VycmVudFBhZ2UocGdOdW1iZXIpIH0sIHBnTnVtYmVyKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhZ2luYXRpb25QYWdlcztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzNGY4ZDE0MDcxZTIxNmQwZDhjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9