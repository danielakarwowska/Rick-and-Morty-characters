import React, { useEffect, useMemo, useState } from 'react'
import { Episode } from '../types'
import Paginations from '../components/paginations'
import { Table, Image, Checkbox, Icon, Pagination } from 'semantic-ui-react'

type Props = {
    episodes: Episode | any
    searchInput: string
    selectSpecies: string
    postPerPage: number
}
const TableBody = ({ episodes, searchInput, selectSpecies, postPerPage }: Props) => {

    const [data, setData] = useState<any>([...episodes])
    const [currentPage, setCurrentPage] = useState(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * postPerPage;
        const lastPageIndex = firstPageIndex + postPerPage;
        return episodes.slice(firstPageIndex, lastPageIndex);
      }, [currentPage])

    useEffect(() => {
        setData(episodes)
    }, [episodes])

    const filterHandler = () => {
        if (!selectSpecies && searchInput) {
            let characters = episodes.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()))
            setData(characters)
        } else if (selectSpecies && !searchInput) {
            let characters = episodes.filter((el) => el.species.toLowerCase() === selectSpecies.toLowerCase())
            setData(characters)
        } else if (selectSpecies && searchInput) {
            let characters = episodes
                .filter((el) => el.species.toLowerCase() === selectSpecies.toLowerCase())
                .filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()))
            setData(characters)
        }
    }
    useEffect(() => {
        filterHandler()
    }, [selectSpecies, searchInput])
    return (
        <>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell><Checkbox /></Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Avatar</Table.HeaderCell>
                    <Table.HeaderCell>Origin</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {currentTableData.map((episode, index) =>
                    <Table.Row key={index}
                        style={{ background: episode.status === 'Dead' ? "#F0F0F0" : "white" }}>
                        <Table.Cell><Checkbox /></Table.Cell>
                        <Table.Cell>{episode.name}
                            <p>{episode.species}</p>
                        </Table.Cell>
                        <Table.Cell><Image size='tiny' circular src={episode.image}/></Table.Cell>
                        <Table.Cell>{episode.origin.name}</Table.Cell>
                        <Table.Cell>{episode.gender}</Table.Cell>
                        <Table.Cell>
                            {(() => {
                                if (episode.status === 'Dead') {
                                    return (
                                        <Icon name="exclamation circle" color='red' />
                                    )
                                } else if (episode.status === 'Alive') {
                                    return (
                                        <Icon name="check circle" color='green' />
                                    )
                                } else {
                                    return (
                                        <Icon name='question circle' color='grey' />
                                    )
                                }
                            })()}
                            {episode.status}
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
        <Paginations
        currentPage={currentPage}
        totalCount={episodes.length}
        postPerPage={postPerPage}
        onPageChange={(page) => setCurrentPage(page)}
    />
        </>
    )
}
export default TableBody