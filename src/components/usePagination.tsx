import React, { useMemo } from "react"

export const dots = '...'

const range = (start, end) => {
    let length = end - start + 1
    return Array.from({ length }, (_, item) => item + start)
}

const PaginationPages = ({ totalCount, pageSize, currentPage, siblingCount = 1 }) => {

    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)
        const totalPageNumbers = siblingCount + 3

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }
        const leftSibilingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSibilingIndex = Math.min(currentPage + siblingCount, totalPageCount)
        const showLeftDots = leftSibilingIndex > 2
        const showRightsDots = rightSibilingIndex < totalPageCount - 2
        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!showLeftDots && showRightsDots) {
            let leftItemCount = 3 + 2 * siblingCount
            let leftRange = range(1, leftItemCount)
            return [...leftRange, dots, totalPageCount]
        }
        if (showLeftDots && !showRightsDots) {
            let rightItemCount = 3 + 2 * siblingCount
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
            return [firstPageIndex, dots, ...rightRange]
        }
        if (showLeftDots && showRightsDots) {
            let middleRange = range(leftSibilingIndex, rightSibilingIndex)
            return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex]
        }
    }, [totalCount, pageSize, currentPage, siblingCount])
    return
    paginationRange
}
export default PaginationPages
