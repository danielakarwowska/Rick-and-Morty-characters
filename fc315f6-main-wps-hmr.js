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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
const TableBody = ({ episodes, searchInput, selectSpecies, postPerPage }) => {
    const [data, setData] = (0, react_1.useState)([...episodes]);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const currentTableData = (0, react_1.useMemo)(() => {
        const firstPageIndex = (currentPage - 1) * postPerPage;
        const lastPageIndex = firstPageIndex + postPerPage;
        return episodes.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    (0, react_1.useEffect)(() => {
        setData(episodes);
    }, [episodes]);
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
                    episode.status)))))));
};
exports["default"] = TableBody;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17dfe712df234f983c33")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMzMTVmNi1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZCQUE2QixtQkFBTyxDQUFDLDRDQUFPO0FBQzVDLDRCQUE0QixtQkFBTyxDQUFDLDRFQUFtQjtBQUN2RCxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1FQUFtRSxrQkFBa0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEtBQTRLLHFCQUFxQiwrREFBK0Q7QUFDaFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGtEQUFrRDtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLDBDQUEwQztBQUN4STtBQUNBO0FBQ0EsOEZBQThGLHNDQUFzQztBQUNwSTtBQUNBO0FBQ0EsOEZBQThGLHdDQUF3QztBQUN0STtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7OztVQzVGZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvY29tcG9uZW50cy90YWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhlcmNpc2Vfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHNlbWFudGljX3VpX3JlYWN0XzEgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7XG5jb25zdCBUYWJsZUJvZHkgPSAoeyBlcGlzb2Rlcywgc2VhcmNoSW5wdXQsIHNlbGVjdFNwZWNpZXMsIHBvc3RQZXJQYWdlIH0pID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoWy4uLmVwaXNvZGVzXSk7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMSk7XG4gICAgY29uc3QgY3VycmVudFRhYmxlRGF0YSA9ICgwLCByZWFjdF8xLnVzZU1lbW8pKCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlSW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIHBvc3RQZXJQYWdlO1xuICAgICAgICBjb25zdCBsYXN0UGFnZUluZGV4ID0gZmlyc3RQYWdlSW5kZXggKyBwb3N0UGVyUGFnZTtcbiAgICAgICAgcmV0dXJuIGVwaXNvZGVzLnNsaWNlKGZpcnN0UGFnZUluZGV4LCBsYXN0UGFnZUluZGV4KTtcbiAgICB9LCBbY3VycmVudFBhZ2VdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgc2V0RGF0YShlcGlzb2Rlcyk7XG4gICAgfSwgW2VwaXNvZGVzXSk7XG4gICAgY29uc3QgZmlsdGVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RTcGVjaWVzICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcigoZWwpID0+IGVsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICBzZXREYXRhKGNoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdFNwZWNpZXMgJiYgIXNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IGVwaXNvZGVzLmZpbHRlcigoZWwpID0+IGVsLnNwZWNpZXMudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0U3BlY2llcy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0U3BlY2llcyAmJiBzZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBlcGlzb2Rlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5zcGVjaWVzLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdFNwZWNpZXMudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIHNldERhdGEoY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBmaWx0ZXJIYW5kbGVyKCk7XG4gICAgfSwgW3NlbGVjdFNwZWNpZXMsIHNlYXJjaElucHV0XSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUsIHsgc2luZ2xlTGluZTogdHJ1ZSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5Sb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuQ2hlY2tib3gsIG51bGwpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5IZWFkZXJDZWxsLCBudWxsLCBcIk5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJBdmF0YXJcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJPcmlnaW5cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJHZW5kZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuSGVhZGVyQ2VsbCwgbnVsbCwgXCJTdGF0dXNcIikpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQm9keSwgbnVsbCwgZGF0YS5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLlJvdywgeyBrZXk6IGluZGV4LCBzdHlsZTogeyBiYWNrZ3JvdW5kOiBlcGlzb2RlLnN0YXR1cyA9PT0gJ0RlYWQnID8gXCIjRjBGMEYwXCIgOiBcIndoaXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5DaGVja2JveCwgbnVsbCkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlbWFudGljX3VpX3JlYWN0XzEuVGFibGUuQ2VsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXBpc29kZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXBpc29kZS5zcGVjaWVzKSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLkltYWdlLCB7IHNpemU6ICd0aW55JywgY2lyY3VsYXI6IHRydWUsIHNyYzogZXBpc29kZS5pbWFnZSB9KSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5UYWJsZS5DZWxsLCBudWxsLCBlcGlzb2RlLm9yaWdpbi5uYW1lKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsIGVwaXNvZGUuZ2VuZGVyKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzZW1hbnRpY191aV9yZWFjdF8xLlRhYmxlLkNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXBpc29kZS5zdGF0dXMgPT09ICdEZWFkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JY29uLCB7IG5hbWU6IFwiZXhjbGFtYXRpb24gY2lyY2xlXCIsIGNvbG9yOiAncmVkJyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlcGlzb2RlLnN0YXR1cyA9PT0gJ0FsaXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JY29uLCB7IG5hbWU6IFwiY2hlY2sgY2lyY2xlXCIsIGNvbG9yOiAnZ3JlZW4nIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2VtYW50aWNfdWlfcmVhY3RfMS5JY29uLCB7IG5hbWU6ICdxdWVzdGlvbiBjaXJjbGUnLCBjb2xvcjogJ2dyZXknIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgICAgICAgICAgZXBpc29kZS5zdGF0dXMpKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlQm9keTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3ZGZlNzEyZGYyMzRmOTgzYzMzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9