"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var TableBody = function (_a) {
    var episodes = _a.episodes, searchInput = _a.searchInput, selectSpecies = _a.selectSpecies;
    var _b = (0, react_1.useState)(__spreadArray([], episodes, true)), data = _b[0], setData = _b[1];
    (0, react_1.useEffect)(function () {
        setData(episodes);
    }, [episodes]);
    var filterHandler = function () {
        if (!selectSpecies && searchInput) {
            var characters = episodes.filter(function (el) { return el.name.toLowerCase().includes(searchInput.toLowerCase()); });
            setData(characters);
        }
        else if (selectSpecies && !searchInput) {
            var characters = episodes.filter(function (el) { return el.species.toLowerCase() === selectSpecies.toLowerCase(); });
            setData(characters);
        }
        else if (selectSpecies && searchInput) {
            var characters = episodes
                .filter(function (el) { return el.species.toLowerCase() === selectSpecies.toLowerCase(); })
                .filter(function (el) { return el.name.toLowerCase().includes(searchInput.toLowerCase()); });
            setData(characters);
        }
    };
    (0, react_1.useEffect)(function () {
        filterHandler();
    }, [selectSpecies, searchInput]);
    return (react_1.default.createElement(semantic_ui_react_1.Table, { singleLine: true },
        react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
            react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null,
                    react_1.default.createElement(semantic_ui_react_1.Checkbox, null)),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Name"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Avatar"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Origin"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Gender"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Status"))),
        data.map(function (episode, index) {
            return react_1.default.createElement(semantic_ui_react_1.Table.Row, { key: index },
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
        })));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("400ce5339b2942f706e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGNhOThlNS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsT0FBTztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQywwQkFBMEIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkRBQTZELG1FQUFtRTtBQUNoSTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsa0VBQWtFO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtFQUFrRTtBQUMxRyx3Q0FBd0MsbUVBQW1FO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUVBQXVFLGtCQUFrQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixZQUFZO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxnREFBZ0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esa0JBQWU7Ozs7Ozs7OztVQ3JGZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy90YWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgc2VtYW50aWNfdWlfcmVhY3RfMSA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTtcbnZhciBUYWJsZUJvZHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgZXBpc29kZXMgPSBfYS5lcGlzb2Rlcywgc2VhcmNoSW5wdXQgPSBfYS5zZWFyY2hJbnB1dCwgc2VsZWN0U3BlY2llcyA9IF9hLnNlbGVjdFNwZWNpZXM7XG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKF9fc3ByZWFkQXJyYXkoW10sIGVwaXNvZGVzLCB0cnVlKSksIGRhdGEgPSBfYlswXSwgc2V0RGF0YSA9IF9iWzFdO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXREYXRhKGVwaXNvZGVzKTtcbiAgICB9LCBbZXBpc29kZXNdKTtcbiAgICB2YXIgZmlsdGVySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RTcGVjaWVzICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKTsgfSk7XG4gICAgICAgICAgICBzZXREYXRhKGNoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdFNwZWNpZXMgJiYgIXNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnNwZWNpZXMudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0U3BlY2llcy50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0U3BlY2llcyAmJiBzZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSBlcGlzb2Rlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5zcGVjaWVzLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdFNwZWNpZXMudG9Mb3dlckNhc2UoKTsgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpOyB9KTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBmaWx0ZXJIYW5kbGVyKCk7XG4gICAgfSwgW3NlbGVjdFNwZWNpZXMsIHNlYXJjaElucHV0XSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLCB7IHNpbmdsZUxpbmU6IHRydWUgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuQ2hlY2tib3gsIG51bGwpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiQXZhdGFyXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJPcmlnaW5cIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkdlbmRlclwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiU3RhdHVzXCIpKSksXG4gICAgICAgIGRhdGEubWFwKGZ1bmN0aW9uIChlcGlzb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuUm93LCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuQ2hlY2tib3gsIG51bGwpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVwaXNvZGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVwaXNvZGUuc3BlY2llcykpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JbWFnZSwgeyBzaXplOiAndGlueScsIGF2YXRhcjogdHJ1ZSwgc3JjOiBlcGlzb2RlLmltYWdlIH0pKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsIGVwaXNvZGUub3JpZ2luLm5hbWUpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgZXBpc29kZS5nZW5kZXIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgZXBpc29kZS5zdGF0dXMpKTtcbiAgICAgICAgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZUJvZHk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MDBjZTUzMzliMjk0MmY3MDZlNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==