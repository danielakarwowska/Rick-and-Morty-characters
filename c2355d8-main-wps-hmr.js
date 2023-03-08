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
    // const [currentPage, setCurrentPage] = useState(1)
    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * postPerPage
    //     const lastPageIndex = firstPageIndex + postPerPage
    //     return episodes.slice(firstPageIndex, lastPageIndex)
    //   }, [currentPage])
    (0, react_1.useEffect)(() => {
        setData(episodes);
    }, [episodes]);
    const [page, setPage] = (0, react_1.useState)(1);
    const [perPage] = (0, react_1.useState)(5);
    const count = Math.ceil(episodes.length / perPage);
    const _DATA = (0, usePagination_1.default)(episodes, perPage);
    const handleChangePagination = (e, index) => {
        setPage(index);
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
            react_1.default.createElement(semantic_ui_react_1.Table.Body, null, data.map((episode, index) => react_1.default.createElement(semantic_ui_react_1.Table.Row, { key: index, style: { background: episode.status === 'Dead' ? "#F0F0F0" : "white" } },
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
                    episode.status))))),
        react_1.default.createElement(semantic_ui_react_1.Pagination, null)));
};
exports["default"] = TableBody;


/***/ }),

/***/ "./src/hook/usePagination.tsx":
/*!************************************!*\
  !*** ./src/hook/usePagination.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };
    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };
    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };
    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    };
    return { next, prev, jump, currentData, currentPage, maxPage };
};
exports["default"] = usePagination;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e09f98ee57608f930651")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYzIzNTVkOC1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUMsNEJBQTRCLG1CQUFPLENBQUMsNEVBQW1CO0FBQ3ZELHdDQUF3QyxtQkFBTyxDQUFDLDJEQUF1QjtBQUN2RSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtRUFBbUUsa0JBQWtCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRLQUE0SyxxQkFBcUIsK0RBQStEO0FBQ2hRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxrREFBa0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RiwwQ0FBMEM7QUFDeEk7QUFDQTtBQUNBLDhGQUE4RixzQ0FBc0M7QUFDcEk7QUFDQTtBQUNBLDhGQUE4Rix3Q0FBd0M7QUFDdEk7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDekdGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUN2QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4Iiwid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvaG9vay91c2VQYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3Qgc2VtYW50aWNfdWlfcmVhY3RfMSA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTtcbmNvbnN0IHVzZVBhZ2luYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaG9vay91c2VQYWdpbmF0aW9uXCIpKTtcbmNvbnN0IFRhYmxlQm9keSA9ICh7IGVwaXNvZGVzLCBzZWFyY2hJbnB1dCwgc2VsZWN0U3BlY2llcyB9KSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFsuLi5lcGlzb2Rlc10pO1xuICAgIC8vIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgICAvLyBjb25zdCBjdXJyZW50VGFibGVEYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGZpcnN0UGFnZUluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwb3N0UGVyUGFnZVxuICAgIC8vICAgICBjb25zdCBsYXN0UGFnZUluZGV4ID0gZmlyc3RQYWdlSW5kZXggKyBwb3N0UGVyUGFnZVxuICAgIC8vICAgICByZXR1cm4gZXBpc29kZXMuc2xpY2UoZmlyc3RQYWdlSW5kZXgsIGxhc3RQYWdlSW5kZXgpXG4gICAgLy8gICB9LCBbY3VycmVudFBhZ2VdKVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXREYXRhKGVwaXNvZGVzKTtcbiAgICB9LCBbZXBpc29kZXNdKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMSk7XG4gICAgY29uc3QgW3BlclBhZ2VdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKDUpO1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKGVwaXNvZGVzLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgIGNvbnN0IF9EQVRBID0gKDAsIHVzZVBhZ2luYXRpb25fMS5kZWZhdWx0KShlcGlzb2RlcywgcGVyUGFnZSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnaW5hdGlvbiA9IChlLCBpbmRleCkgPT4ge1xuICAgICAgICBzZXRQYWdlKGluZGV4KTtcbiAgICAgICAgX0RBVEEuanVtcChpbmRleCk7XG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdFNwZWNpZXMgJiYgc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gZXBpc29kZXMuZmlsdGVyKChlbCkgPT4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0U3BlY2llcyAmJiAhc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gZXBpc29kZXMuZmlsdGVyKChlbCkgPT4gZWwuc3BlY2llcy50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RTcGVjaWVzLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgc2V0RGF0YShjaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RTcGVjaWVzICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLnNwZWNpZXMudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0U3BlY2llcy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgc2V0RGF0YShjaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGZpbHRlckhhbmRsZXIoKTtcbiAgICB9LCBbc2VsZWN0U3BlY2llcywgc2VhcmNoSW5wdXRdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZSwgeyBzaW5nbGVMaW5lOiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkhlYWRlckNlbGwsIG51bGwsIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkF2YXRhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIk9yaWdpblwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIkdlbmRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIlN0YXR1c1wiKSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5Cb2R5LCBudWxsLCBkYXRhLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuUm93LCB7IGtleTogaW5kZXgsIHN0eWxlOiB7IGJhY2tncm91bmQ6IGVwaXNvZGUuc3RhdHVzID09PSAnRGVhZCcgPyBcIiNGMEYwRjBcIiA6IFwid2hpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkNoZWNrYm94LCBudWxsKSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlcGlzb2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcGlzb2RlLnNwZWNpZXMpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuSW1hZ2UsIHsgc2l6ZTogJ3RpbnknLCBjaXJjdWxhcjogdHJ1ZSwgc3JjOiBlcGlzb2RlLmltYWdlIH0pKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsIGVwaXNvZGUub3JpZ2luLm5hbWUpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCwgZXBpc29kZS5nZW5kZXIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcGlzb2RlLnN0YXR1cyA9PT0gJ0RlYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogXCJleGNsYW1hdGlvbiBjaXJjbGVcIiwgY29sb3I6ICdyZWQnIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVwaXNvZGUuc3RhdHVzID09PSAnQWxpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogXCJjaGVjayBjaXJjbGVcIiwgY29sb3I6ICdncmVlbicgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogJ3F1ZXN0aW9uIGNpcmNsZScsIGNvbG9yOiAnZ3JleScgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSgpLFxuICAgICAgICAgICAgICAgICAgICBlcGlzb2RlLnN0YXR1cykpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlBhZ2luYXRpb24sIG51bGwpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVCb2R5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgdXNlUGFnaW5hdGlvbiA9IChkYXRhLCBpdGVtc1BlclBhZ2UpID0+IHtcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgxKTtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmVnaW4gPSAoY3VycmVudFBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZTtcbiAgICAgICAgY29uc3QgZW5kID0gYmVnaW4gKyBpdGVtc1BlclBhZ2U7XG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgIH07XG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoKGN1cnJlbnRQYWdlKSA9PiBNYXRoLm1pbihjdXJyZW50UGFnZSArIDEsIG1heFBhZ2UpKTtcbiAgICB9O1xuICAgIGNvbnN0IHByZXYgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRQYWdlKChjdXJyZW50UGFnZSkgPT4gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSAxLCAxKSk7XG4gICAgfTtcbiAgICBjb25zdCBqdW1wID0gKHBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IE1hdGgubWF4KDEsIHBhZ2UpO1xuICAgICAgICBzZXRDdXJyZW50UGFnZSgoY3VycmVudFBhZ2UpID0+IE1hdGgubWluKHBhZ2VOdW1iZXIsIG1heFBhZ2UpKTtcbiAgICB9O1xuICAgIHJldHVybiB7IG5leHQsIHByZXYsIGp1bXAsIGN1cnJlbnREYXRhLCBjdXJyZW50UGFnZSwgbWF4UGFnZSB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZVBhZ2luYXRpb247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDlmOThlZTU3NjA4ZjkzMDY1MVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==