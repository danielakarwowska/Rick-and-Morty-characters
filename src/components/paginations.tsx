import React from "react"
import { Pagination } from "semantic-ui-react"
import usePagination from './usePagination'
import { dots } from "./usePagination"

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    siblingCount: number
}

const PaginationLi = props => {
    const {
      onPageChange,
      totalCount,
      siblingCount = 1,
      currentPage,
      pageSize,
    } = props;
  
    const paginationRange: any = usePagination({
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
    return(
        <ul>
            <li onClick={onPrevious}></li>
            {paginationRange.map(pageNum => {
                if(pageNum === dots){
                    return <li>&</li>
                }
                return(
                    <li onClick={() => onPageChange(pageNum)}>
                        {pageNum}
                    </li>
                )
            })}
            <li onClick={onNext}></li>
        </ul>
    )
}
export default PaginationLi