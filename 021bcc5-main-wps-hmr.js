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
    const postsPerPage = 5;
    const count = Math.ceil(data.length / postsPerPage);
    const _DATA = (0, usePagination_1.default)(!data ? episodes : data, postsPerPage);
    const handleChangePagination = (e, index) => {
        setPage(index.page);
        console.log(index);
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
            react_1.default.createElement(semantic_ui_react_1.Table.Body, null, episodes
                ? _DATA.currentData().map((item) => react_1.default.createElement(semantic_ui_react_1.Table.Row, { key: item.name, style: { background: item.status === 'Dead' ? "#F0F0F0" : "white" } },
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        react_1.default.createElement(semantic_ui_react_1.Checkbox, null)),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        item.name,
                        react_1.default.createElement("p", null, item.species)),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        react_1.default.createElement(semantic_ui_react_1.Image, { size: 'tiny', circular: true, src: item.image })),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, item.origin.name),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, item.gender),
                    react_1.default.createElement(semantic_ui_react_1.Table.Cell, null,
                        (() => {
                            if (item.status === 'Dead') {
                                return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "exclamation circle", color: 'red' }));
                            }
                            else if (item.status === 'Alive') {
                                return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "check circle", color: 'green' }));
                            }
                            else {
                                return (react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'question circle', color: 'grey' }));
                            }
                        })(),
                        item.status))) : null)),
        react_1.default.createElement("footer", { className: 'pagination' },
            react_1.default.createElement(semantic_ui_react_1.Pagination, { count: count, page: page, ellipsisItem: 2, totalPages: count, onPageChange: (e, index) => handleChangePagination(e, index) }))));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c92562fb93a946c3b44d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDIxYmNjNS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUMsNEJBQTRCLG1CQUFPLENBQUMsNEVBQW1CO0FBQ3ZELHdDQUF3QyxtQkFBTyxDQUFDLDJEQUF1QjtBQUN2RSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtRUFBbUUsa0JBQWtCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUhBQW1ILHlCQUF5Qiw0REFBNEQ7QUFDeE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLCtDQUErQztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLDBDQUEwQztBQUM1STtBQUNBO0FBQ0Esa0dBQWtHLHNDQUFzQztBQUN4STtBQUNBO0FBQ0Esa0dBQWtHLHdDQUF3QztBQUMxSTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0UsNEVBQTRFLDRIQUE0SDtBQUN4TTtBQUNBLGtCQUFlOzs7Ozs7Ozs7VUN0R2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4Iiwid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBzZW1hbnRpY191aV9yZWFjdF8xID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpO1xuY29uc3QgdXNlUGFnaW5hdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ob29rL3VzZVBhZ2luYXRpb25cIikpO1xuY29uc3QgVGFibGVCb2R5ID0gKHsgZXBpc29kZXMsIHNlYXJjaElucHV0LCBzZWxlY3RTcGVjaWVzIH0pID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoWy4uLmVwaXNvZGVzXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIHNldERhdGEoZXBpc29kZXMpO1xuICAgIH0sIFtlcGlzb2Rlc10pO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgxKTtcbiAgICBjb25zdCBwb3N0c1BlclBhZ2UgPSA1O1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gcG9zdHNQZXJQYWdlKTtcbiAgICBjb25zdCBfREFUQSA9ICgwLCB1c2VQYWdpbmF0aW9uXzEuZGVmYXVsdCkoIWRhdGEgPyBlcGlzb2RlcyA6IGRhdGEsIHBvc3RzUGVyUGFnZSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnaW5hdGlvbiA9IChlLCBpbmRleCkgPT4ge1xuICAgICAgICBzZXRQYWdlKGluZGV4LnBhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIF9EQVRBLmp1bXAoaW5kZXgpO1xuICAgIH07XG4gICAgY29uc3QgZmlsdGVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RTcGVjaWVzICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcigoZWwpID0+IGVsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICBzZXREYXRhKGNoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdFNwZWNpZXMgJiYgIXNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcigoZWwpID0+IGVsLnNwZWNpZXMudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0U3BlY2llcy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0U3BlY2llcyAmJiBzZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBlcGlzb2Rlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5zcGVjaWVzLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdFNwZWNpZXMudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBmaWx0ZXJIYW5kbGVyKCk7XG4gICAgfSwgW3NlbGVjdFNwZWNpZXMsIHNlYXJjaElucHV0XSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUsIHsgc2luZ2xlTGluZTogdHJ1ZSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5Sb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuQ2hlY2tib3gsIG51bGwpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIk5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJBdmF0YXJcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJPcmlnaW5cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJHZW5kZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJTdGF0dXNcIikpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQm9keSwgbnVsbCwgZXBpc29kZXNcbiAgICAgICAgICAgICAgICA/IF9EQVRBLmN1cnJlbnREYXRhKCkubWFwKChpdGVtKSA9PiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgeyBrZXk6IGl0ZW0ubmFtZSwgc3R5bGU6IHsgYmFja2dyb3VuZDogaXRlbS5zdGF0dXMgPT09ICdEZWFkJyA/IFwiI0YwRjBGMFwiIDogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgaXRlbS5zcGVjaWVzKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuSW1hZ2UsIHsgc2l6ZTogJ3RpbnknLCBjaXJjdWxhcjogdHJ1ZSwgc3JjOiBpdGVtLmltYWdlIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBpdGVtLm9yaWdpbi5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBpdGVtLmdlbmRlciksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnRGVhZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogXCJleGNsYW1hdGlvbiBjaXJjbGVcIiwgY29sb3I6ICdyZWQnIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5zdGF0dXMgPT09ICdBbGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogXCJjaGVjayBjaXJjbGVcIiwgY29sb3I6ICdncmVlbicgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkljb24sIHsgbmFtZTogJ3F1ZXN0aW9uIGNpcmNsZScsIGNvbG9yOiAnZ3JleScgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1cykpKSA6IG51bGwpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgeyBjbGFzc05hbWU6ICdwYWdpbmF0aW9uJyB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5QYWdpbmF0aW9uLCB7IGNvdW50OiBjb3VudCwgcGFnZTogcGFnZSwgZWxsaXBzaXNJdGVtOiAyLCB0b3RhbFBhZ2VzOiBjb3VudCwgb25QYWdlQ2hhbmdlOiAoZSwgaW5kZXgpID0+IGhhbmRsZUNoYW5nZVBhZ2luYXRpb24oZSwgaW5kZXgpIH0pKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlQm9keTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM5MjU2MmZiOTNhOTQ2YzNiNDRkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9