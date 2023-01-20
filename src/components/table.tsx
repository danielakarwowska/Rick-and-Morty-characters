import React, { useEffect, useState } from 'react'
import { Episode } from '../types'
import { Table, Image, Checkbox, Container, Icon, Pagination } from 'semantic-ui-react'
import PaginationPages from './pagination'

type Props = {
    episodes: Episode | any
    searchInput: string
    selectSpecies: string
}
const TableBody = ({ episodes, searchInput, selectSpecies }: Props) => {

    const [data, setData] = useState<any>([...episodes])

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
                {data.map((episode, index) =>
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
    )
}
export default TableBody