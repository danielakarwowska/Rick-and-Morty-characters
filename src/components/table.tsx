import React, { useEffect, useState } from 'react'
import { Episode } from '../types'
import { Table, Image, Checkbox } from 'semantic-ui-react'

type Props = {
    episodes: Episode | any
    searchInput: string
    selectSpecies: any
}
const TableBody = ({ episodes, searchInput, selectSpecies }: Props) => {

    const [data, setData] = useState([...episodes])

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
                {data.map((episode) =>
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