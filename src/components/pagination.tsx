import React, { useState } from "react"
import { Pagination } from "semantic-ui-react"
import { Episode } from "../types"

type Props = {
    nPages: number
    setCurrentPage: number | any
    currentPage: number
    episodes
}

const PaginationPages = ({ setCurrentPage, nPages, currentPage, episodes }: Props) => {

    const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1)

    const onPageChange = (e, pageInfo) => {
        setCurrentPage(pageInfo.currentPage)
        episodes('https://rickandmortyapi.com/api/character/?page=' + pageInfo.activePage.toString())
    }

    return (
        <Pagination
        onPageChange={onPageChange}
        activePage={currentPage}
        totalPages={42}
        ellipsisItem={null}/>
    )
}
export default PaginationPages
