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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
const usePagination_1 = __importDefault(__webpack_require__(/*! ../hook/usePagination */ "./src/hook/usePagination.tsx"));
const TableBody = ({ episodes, searchInput, selectSpecies }) => {
    const [data, setData] = (0, react_1.useState)([...episodes]);
    (0, react_1.useEffect)(() => {
        setData(episodes);
    }, [episodes]);
    const [page, setPage] = (0, react_1.useState)(1);
    const PER_PAGE = 5;
    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = (0, usePagination_1.default)(!data ? episodes : data, PER_PAGE);
    const handleChangePagination = (e, index) => {
        setPage(index.page);
        _DATA.jump(index);
    };
    const filterHandler = () => {
        if (!selectSpecies && searchInput) {
            let characters = episodes.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
            setData(characters);
        }
        else if (selectSpecies && !searchInput) {
            let characters = episodes.filter((el) => el.species.toLowerCase() === selectSpecies.toLowerCase());
            setData(characters);
        }
        else if (selectSpecies && searchInput) {
            let characters = episodes
                .filter((el) => el.species.toLowerCase() === selectSpecies.toLowerCase())
                .filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
            setData(characters);
        }
    };
    (0, react_1.useEffect)(() => {
        filterHandler();
    }, [selectSpecies, searchInput]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
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
            data
                ? _DATA.currentData().map((episode, item) => react_1.default.createElement(semantic_ui_react_1.Table.Body, null,
                    react_1.default.createElement(semantic_ui_react_1.Table.Row, { key: item.name, style: { background: episode.status === 'Dead' ? "#F0F0F0" : "white" } },
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                            react_1.default.createElement(semantic_ui_react_1.Checkbox, null)),
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                            episode.name,
                            react_1.default.createElement("p", null, episode.species)),
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                            react_1.default.createElement(semantic_ui_react_1.Image, { size: 'tiny', circular: true, src: episode.image })),
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, episode.origin.name),
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, episode.gender),
                        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                            (() => {
                                if (episode.status === 'Dead') {
                                    return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "exclamation circle", color: 'red' }));
                                }
                                else if (episode.status === 'Alive') {
                                    return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "check circle", color: 'green' }));
                                }
                                else {
                                    return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'question circle', color: 'grey' }));
                                }
                            })(),
                            episode.status)))) : null),
        react_1.default.createElement(semantic_ui_react_1.Pagination, { count: count, page: page, ellipsisItem: null, totalPages: 10, onPageChange: handleChangePagination })));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("871a1417c844992ab48c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZjRjMjQ0My1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUMsNEJBQTRCLG1CQUFPLENBQUMsNEVBQW1CO0FBQ3ZELHdDQUF3QyxtQkFBTyxDQUFDLDJEQUF1QjtBQUN2RSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUVBQW1FLGtCQUFrQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLHlCQUF5QiwrREFBK0Q7QUFDM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLGtEQUFrRDtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHLDBDQUEwQztBQUNoSjtBQUNBO0FBQ0Esc0dBQXNHLHNDQUFzQztBQUM1STtBQUNBO0FBQ0Esc0dBQXNHLHdDQUF3QztBQUM5STtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHdFQUF3RSxvR0FBb0c7QUFDNUs7QUFDQSxrQkFBZTs7Ozs7Ozs7O1VDckdmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS8uL3NyYy9jb21wb25lbnRzL3RhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3Qgc2VtYW50aWNfdWlfcmVhY3RfMSA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTtcbmNvbnN0IHVzZVBhZ2luYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaG9vay91c2VQYWdpbmF0aW9uXCIpKTtcbmNvbnN0IFRhYmxlQm9keSA9ICh7IGVwaXNvZGVzLCBzZWFyY2hJbnB1dCwgc2VsZWN0U3BlY2llcyB9KSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFsuLi5lcGlzb2Rlc10pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXREYXRhKGVwaXNvZGVzKTtcbiAgICB9LCBbZXBpc29kZXNdKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMSk7XG4gICAgY29uc3QgUEVSX1BBR0UgPSA1O1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gUEVSX1BBR0UpO1xuICAgIGNvbnN0IF9EQVRBID0gKDAsIHVzZVBhZ2luYXRpb25fMS5kZWZhdWx0KSghZGF0YSA/IGVwaXNvZGVzIDogZGF0YSwgUEVSX1BBR0UpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2luYXRpb24gPSAoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2V0UGFnZShpbmRleC5wYWdlKTtcbiAgICAgICAgX0RBVEEuanVtcChpbmRleCk7XG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdFNwZWNpZXMgJiYgc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gZXBpc29kZXMuZmlsdGVyKChlbCkgPT4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0U3BlY2llcyAmJiAhc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gZXBpc29kZXMuZmlsdGVyKChlbCkgPT4gZWwuc3BlY2llcy50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RTcGVjaWVzLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgc2V0RGF0YShjaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RTcGVjaWVzICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLnNwZWNpZXMudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0U3BlY2llcy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgc2V0RGF0YShjaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGZpbHRlckhhbmRsZXIoKTtcbiAgICB9LCBbc2VsZWN0U3BlY2llcywgc2VhcmNoSW5wdXRdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZSwgeyBzaW5nbGVMaW5lOiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkF2YXRhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIk9yaWdpblwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkdlbmRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIlN0YXR1c1wiKSkpLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgID8gX0RBVEEuY3VycmVudERhdGEoKS5tYXAoKGVwaXNvZGUsIGl0ZW0pID0+IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5Sb3csIHsga2V5OiBpdGVtLm5hbWUsIHN0eWxlOiB7IGJhY2tncm91bmQ6IGVwaXNvZGUuc3RhdHVzID09PSAnRGVhZCcgPyBcIiNGMEYwRjBcIiA6IFwid2hpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXBpc29kZS5zcGVjaWVzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JbWFnZSwgeyBzaXplOiAndGlueScsIGNpcmN1bGFyOiB0cnVlLCBzcmM6IGVwaXNvZGUuaW1hZ2UgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBlcGlzb2RlLm9yaWdpbi5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgZXBpc29kZS5nZW5kZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcGlzb2RlLnN0YXR1cyA9PT0gJ0RlYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuSWNvbiwgeyBuYW1lOiBcImV4Y2xhbWF0aW9uIGNpcmNsZVwiLCBjb2xvcjogJ3JlZCcgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVwaXNvZGUuc3RhdHVzID09PSAnQWxpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuSWNvbiwgeyBuYW1lOiBcImNoZWNrIGNpcmNsZVwiLCBjb2xvcjogJ2dyZWVuJyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuSWNvbiwgeyBuYW1lOiAncXVlc3Rpb24gY2lyY2xlJywgY29sb3I6ICdncmV5JyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGUuc3RhdHVzKSkpKSA6IG51bGwpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlBhZ2luYXRpb24sIHsgY291bnQ6IGNvdW50LCBwYWdlOiBwYWdlLCBlbGxpcHNpc0l0ZW06IG51bGwsIHRvdGFsUGFnZXM6IDEwLCBvblBhZ2VDaGFuZ2U6IGhhbmRsZUNoYW5nZVBhZ2luYXRpb24gfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZUJvZHk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NzFhMTQxN2M4NDQ5OTJhYjQ4Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==