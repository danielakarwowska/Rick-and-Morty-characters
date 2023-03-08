"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var table_1 = __importDefault(__webpack_require__(/*! ./table */ "./src/components/table.tsx"));
var semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var Navbar = function (_a) {
    var episodes = _a.episodes;
    var option = [
        { key: 'female', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'design', text: 'Graphic Design', value: 'design' },
    ];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(semantic_ui_react_1.Grid, null,
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 4 },
                react_1.default.createElement(semantic_ui_react_1.Input, { icon: 'search', placeholder: 'Search' })),
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 4 },
                react_1.default.createElement(semantic_ui_react_1.Dropdown, { placeholder: 'Species', search: true, selection: true, options: episodes.gender }))),
        react_1.default.createElement(table_1.default, { episodes: episodes })));
};
exports["default"] = Navbar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("63f3406777e5273806bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTEzODU0Zi1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyw4QkFBOEIsbUJBQU8sQ0FBQywyQ0FBUztBQUMvQywwQkFBMEIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBa0Q7QUFDNUQsVUFBVSx1Q0FBdUM7QUFDakQsVUFBVSx3REFBd0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLFVBQVU7QUFDdkYsMkVBQTJFLHVDQUF1QztBQUNsSCw2RUFBNkUsVUFBVTtBQUN2Riw4RUFBOEUsaUZBQWlGO0FBQy9KLHlEQUF5RCxvQkFBb0I7QUFDN0U7QUFDQSxrQkFBZTs7Ozs7Ozs7O1VDdkJmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHRhYmxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdGFibGVcIikpO1xudmFyIHNlbWFudGljX3VpX3JlYWN0XzEgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7XG52YXIgTmF2YmFyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGVwaXNvZGVzID0gX2EuZXBpc29kZXM7XG4gICAgdmFyIG9wdGlvbiA9IFtcbiAgICAgICAgeyBrZXk6ICdmZW1hbGUnLCB0ZXh0OiAnQW5ndWxhcicsIHZhbHVlOiAnYW5ndWxhcicgfSxcbiAgICAgICAgeyBrZXk6ICdjc3MnLCB0ZXh0OiAnQ1NTJywgdmFsdWU6ICdjc3MnIH0sXG4gICAgICAgIHsga2V5OiAnZGVzaWduJywgdGV4dDogJ0dyYXBoaWMgRGVzaWduJywgdmFsdWU6ICdkZXNpZ24nIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuR3JpZCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuR3JpZC5Db2x1bW4sIHsgd2lkdGg6IDQgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLklucHV0LCB7IGljb246ICdzZWFyY2gnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCcgfSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5HcmlkLkNvbHVtbiwgeyB3aWR0aDogNCB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuRHJvcGRvd24sIHsgcGxhY2Vob2xkZXI6ICdTcGVjaWVzJywgc2VhcmNoOiB0cnVlLCBzZWxlY3Rpb246IHRydWUsIG9wdGlvbnM6IGVwaXNvZGVzLmdlbmRlciB9KSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0YWJsZV8xLmRlZmF1bHQsIHsgZXBpc29kZXM6IGVwaXNvZGVzIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTmF2YmFyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjNmMzQwNjc3N2U1MjczODA2YmNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=