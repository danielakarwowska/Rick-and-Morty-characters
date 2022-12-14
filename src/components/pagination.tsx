import React from "react"
import { Pagination } from "semantic-ui-react"

type Props = {
    nPages: number
    currentPage: number
    setCurrentPage: number| any
}
const PaginationPages = ({ nPages, currentPage, setCurrentPage }: Props) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    return (
        <>
        <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      />
        <ul>
            {pageNumbers.map((pgNumber) => (
                <li key={pgNumber}>
                    <a onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</a>
                </li>
            ))}
        </ul>
        </>
    )
}
export default PaginationPages
