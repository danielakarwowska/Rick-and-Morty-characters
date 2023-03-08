"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/paginations.tsx":
/*!****************************************!*\
  !*** ./src/components/paginations.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const usePagination_1 = __importDefault(__webpack_require__(/*! ./usePagination */ "./src/components/usePagination.tsx"));
const usePagination_2 = __webpack_require__(/*! ./usePagination */ "./src/components/usePagination.tsx");
const PaginationLi = props => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, } = props;
    const paginationRange = (0, usePagination_1.default)({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", { onClick: onPrevious }),
        paginationRange.map(pageNum => {
            if (pageNum === usePagination_2.dots) {
                return react_1.default.createElement("li", null, "&");
            }
            return (react_1.default.createElement("li", { onClick: () => onPageChange(pageNum) }, pageNum));
        }),
        react_1.default.createElement("li", { onClick: onNext })));
};
exports["default"] = PaginationLi;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("11c694f0d1f510d2ed26")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2Q1Y2FlYS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQyx3Q0FBd0MsbUJBQU8sQ0FBQywyREFBaUI7QUFDakUsd0JBQXdCLG1CQUFPLENBQUMsMkRBQWlCO0FBQ2pEO0FBQ0EsWUFBWSxxRUFBcUU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxzQ0FBc0M7QUFDaEcsU0FBUztBQUNULDhDQUE4QyxpQkFBaUI7QUFDL0Q7QUFDQSxrQkFBZTs7Ozs7Ozs7O1VDcENmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb25zLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHVzZVBhZ2luYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91c2VQYWdpbmF0aW9uXCIpKTtcbmNvbnN0IHVzZVBhZ2luYXRpb25fMiA9IHJlcXVpcmUoXCIuL3VzZVBhZ2luYXRpb25cIik7XG5jb25zdCBQYWdpbmF0aW9uTGkgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBvblBhZ2VDaGFuZ2UsIHRvdGFsQ291bnQsIHNpYmxpbmdDb3VudCA9IDEsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgfSA9IHByb3BzO1xuICAgIGNvbnN0IHBhZ2luYXRpb25SYW5nZSA9ICgwLCB1c2VQYWdpbmF0aW9uXzEuZGVmYXVsdCkoe1xuICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgdG90YWxDb3VudCxcbiAgICAgICAgc2libGluZ0NvdW50LFxuICAgICAgICBwYWdlU2l6ZVxuICAgIH0pO1xuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gMCB8fCBwYWdpbmF0aW9uUmFuZ2UubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgb25OZXh0ID0gKCkgPT4ge1xuICAgICAgICBvblBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpO1xuICAgIH07XG4gICAgbGV0IGxhc3RQYWdlID0gcGFnaW5hdGlvblJhbmdlW3BhZ2luYXRpb25SYW5nZS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IG9uUHJldmlvdXMgfSksXG4gICAgICAgIHBhZ2luYXRpb25SYW5nZS5tYXAocGFnZU51bSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZU51bSA9PT0gdXNlUGFnaW5hdGlvbl8yLmRvdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIiZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiAoKSA9PiBvblBhZ2VDaGFuZ2UocGFnZU51bSkgfSwgcGFnZU51bSkpO1xuICAgICAgICB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IG9uTmV4dCB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhZ2luYXRpb25MaTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExYzY5NGYwZDFmNTEwZDJlZDI2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9