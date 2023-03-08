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
const semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
const PaginationPages = ({ setCurrentPage, nPages, currentPage, episodes }) => {
    const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);
    const onPageChange = (e, pageInfo) => {
        setCurrentPage(pageInfo.currentPage);
        episodes('https://rickandmortyapi.com/api/character/?page=' + pageInfo.activePage.toString());
    };
    return (react_1.default.createElement(semantic_ui_react_1.Pagination, { onPageChange: onPageChange, activePage: currentPage, totalPages: 42, ellipsisItem: null }));
};
exports["default"] = PaginationPages;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7a151133fb8018a625b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0Y2VmZS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQyw0QkFBNEIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDdkQsMkJBQTJCLCtDQUErQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLHlGQUF5RjtBQUNySztBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNmZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHNlbWFudGljX3VpX3JlYWN0XzEgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7XG5jb25zdCBQYWdpbmF0aW9uUGFnZXMgPSAoeyBzZXRDdXJyZW50UGFnZSwgblBhZ2VzLCBjdXJyZW50UGFnZSwgZXBpc29kZXMgfSkgPT4ge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gQXJyYXkuZnJvbShBcnJheShuUGFnZXMgKyAxKS5rZXlzKCkpLnNsaWNlKDEpO1xuICAgIGNvbnN0IG9uUGFnZUNoYW5nZSA9IChlLCBwYWdlSW5mbykgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShwYWdlSW5mby5jdXJyZW50UGFnZSk7XG4gICAgICAgIGVwaXNvZGVzKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8/cGFnZT0nICsgcGFnZUluZm8uYWN0aXZlUGFnZS50b1N0cmluZygpKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5QYWdpbmF0aW9uLCB7IG9uUGFnZUNoYW5nZTogb25QYWdlQ2hhbmdlLCBhY3RpdmVQYWdlOiBjdXJyZW50UGFnZSwgdG90YWxQYWdlczogNDIsIGVsbGlwc2lzSXRlbTogbnVsbCB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUGFnaW5hdGlvblBhZ2VzO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdhMTUxMTMzZmI4MDE4YTYyNWJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=