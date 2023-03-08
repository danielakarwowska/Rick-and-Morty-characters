"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var TableBody = function (_a) {
    var episode = _a.episode;
    var name = episode.name, image = episode.image, origin = episode.origin, gender = episode.gender, status = episode.status;
    return (react_1.default.createElement(semantic_ui_react_1.Table, { singleLine: true },
        react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
            react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "name"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "avatar"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "origin"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "gender"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "status"))),
        react_1.default.createElement(semantic_ui_react_1.Table.Body, null,
            react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "John Lilki"),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "September 14, 2013"),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "jhlilk22@yahoo.com"),
                react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "No")))));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("63a998708caa6276ef94")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2Q4YWM5Ny1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QywwQkFBMEIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGtCQUFrQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7OztVQ3pCZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy90YWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHNlbWFudGljX3VpX3JlYWN0XzEgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7XG52YXIgVGFibGVCb2R5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGVwaXNvZGUgPSBfYS5lcGlzb2RlO1xuICAgIHZhciBuYW1lID0gZXBpc29kZS5uYW1lLCBpbWFnZSA9IGVwaXNvZGUuaW1hZ2UsIG9yaWdpbiA9IGVwaXNvZGUub3JpZ2luLCBnZW5kZXIgPSBlcGlzb2RlLmdlbmRlciwgc3RhdHVzID0gZXBpc29kZS5zdGF0dXM7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLCB7IHNpbmdsZUxpbmU6IHRydWUgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiYXZhdGFyXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJvcmlnaW5cIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcImdlbmRlclwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwic3RhdHVzXCIpKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQm9keSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuUm93LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgXCJKb2huIExpbGtpXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgXCJTZXB0ZW1iZXIgMTQsIDIwMTNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBcImpobGlsazIyQHlhaG9vLmNvbVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsIFwiTm9cIikpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlQm9keTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYzYTk5ODcwOGNhYTYyNzZlZjk0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9