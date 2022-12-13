import React from 'react'
import { Episode } from '../types'
import { Table, Image, Checkbox } from 'semantic-ui-react'

type Props = {
    episodes: Episode|any
    searchInput: string
    selectSpecies: { key: string; text: string; value: string; }[]
}
const TableBody = ({ episodes, searchInput }: Props) => {

    return (
        <div className='table'>
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
                {episodes.filter((ep) => ep.name.toLowerCase().includes(searchInput))
                    .map((episode) =>
                        <Table.Row >
                            <Table.Cell><Checkbox /></Table.Cell>
                            <Table.Cell>{episode.name}
                                <p>{episode.species}</p>
                            </Table.Cell>
                            <Table.Cell><Image size='tiny' avatar src={episode.image} /></Table.Cell>
                            <Table.Cell>{episode.origin.name}</Table.Cell>
                            <Table.Cell>{episode.gender}</Table.Cell>
                            <Table.Cell>{episode.status}</Table.Cell>
                        </Table.Row>
                    )}
            </Table>
        </div>
    )
}
export default TableBody