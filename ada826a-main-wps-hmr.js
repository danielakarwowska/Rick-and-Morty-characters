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
    var episodes = _a.episodes, searchInput = _a.searchInput;
    return (react_1.default.createElement("div", { className: 'table' },
        react_1.default.createElement(semantic_ui_react_1.Table, { singleLine: true },
            react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
                react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null,
                        react_1.default.createElement(semantic_ui_react_1.Checkbox, null)),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Name"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Avatar"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Origin"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Gender"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Status"))),
            episodes.filter(function (ep) { return ep.name.toLowerCase().includes(searchInput); })
                .map(function (episode) {
                return react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        react_1.default.createElement(semantic_ui_react_1.Checkbox, null)),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        episode.name,
                        react_1.default.createElement("p", null, episode.species)),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        react_1.default.createElement(semantic_ui_react_1.Image, { size: 'tiny', avatar: true, src: episode.image })),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, episode.origin.name),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, episode.gender),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, episode.status));
            }))));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b8131c8e894e691f90d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhODI2YS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QywwQkFBMEIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDckQ7QUFDQTtBQUNBLG1EQUFtRCxvQkFBb0I7QUFDdkUsbUVBQW1FLGtCQUFrQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscURBQXFEO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsZ0RBQWdEO0FBQ25JO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUNuQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4Iiwid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBzZW1hbnRpY191aV9yZWFjdF8xID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpO1xudmFyIFRhYmxlQm9keSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBlcGlzb2RlcyA9IF9hLmVwaXNvZGVzLCBzZWFyY2hJbnB1dCA9IF9hLnNlYXJjaElucHV0O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICd0YWJsZScgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZSwgeyBzaW5nbGVMaW5lOiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkF2YXRhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIk9yaWdpblwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkdlbmRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIlN0YXR1c1wiKSkpLFxuICAgICAgICAgICAgZXBpc29kZXMuZmlsdGVyKGZ1bmN0aW9uIChlcCkgeyByZXR1cm4gZXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0KTsgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChlcGlzb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuUm93LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkNoZWNrYm94LCBudWxsKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcGlzb2RlLnNwZWNpZXMpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JbWFnZSwgeyBzaXplOiAndGlueScsIGF2YXRhcjogdHJ1ZSwgc3JjOiBlcGlzb2RlLmltYWdlIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBlcGlzb2RlLm9yaWdpbi5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBlcGlzb2RlLmdlbmRlciksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgZXBpc29kZS5zdGF0dXMpKTtcbiAgICAgICAgICAgIH0pKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlQm9keTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiODEzMWM4ZTg5NGU2OTFmOTBkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9