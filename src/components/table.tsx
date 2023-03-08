import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import { Episode } from '../types'
import { Table, Image, Checkbox, Icon, Pagination } from 'semantic-ui-react'
import usePagination from '../hook/usePagination'

type Props = {
    episodes: Episode | any
    searchInput: string
    selectSpecies: string
}
const TableBody = ({ episodes, searchInput, selectSpecies }: Props) => {

    const [data, setData] = useState<Episode[]>([...episodes])

    useEffect(() => {
        setData(episodes)
    }, [episodes])

    const [page, setPage] = useState(1);
    const postsPerPage = 5;
    const count = Math.ceil(data.length / postsPerPage);

    const _DATA = usePagination(!data ? episodes : data, postsPerPage);

    const handleChangePagination = (e, index) => {
        setPage(index.page)
        console.log(index)
        _DATA.jump(index)
    }

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
                    {episodes
                        ? _DATA.currentData().map((item: any) =>
                            <Table.Row key={item.name}
                                style={{ background: item.status === 'Dead' ? "#F0F0F0" : "white" }}>
                                <Table.Cell><Checkbox /></Table.Cell>
                                <Table.Cell>{item.name}
                                    <p>{item.species}</p>
                                </Table.Cell>
                                <Table.Cell><Image size='tiny' circular src={item.image} /></Table.Cell>
                                <Table.Cell>{item.origin.name}</Table.Cell>
                                <Table.Cell>{item.gender}</Table.Cell>
                                <Table.Cell>
                                    {(() => {
                                        if (item.status === 'Dead') {
                                            return (
                                                <Icon name="exclamation circle" color='red' />
                                            )
                                        } else if (item.status === 'Alive') {
                                            return (
                                                <Icon name="check circle" color='green' />
                                            )
                                        } else {
                                            return (
                                                <Icon name='question circle' color='grey' />
                                            )
                                        }
                                    })()}
                                    {item.status}
                                </Table.Cell>
                            </Table.Row>
                        ) : null}
                </Table.Body>
            </Table>
            <footer className='pagination'>
            <Pagination
                count={count}
                page={page}
                ellipsisItem={2}
                totalPages={count}
                onPageChange={(e, index) => handleChangePagination(e, index)}
            />
            </footer>
        </>
    )
}
export default TableBody