import React, { useState } from "react"
import Table from './table'
import { Input, Grid, Select, Container } from 'semantic-ui-react'
import { Episode } from "../types"
type Props = {
    episodes: Episode
}

const Navbar = ({ episodes }: Props) => {
    const option = [
        { key: 'Human', text: 'Human', value: 'Human' },
        { key: 'Alien', text: 'Alien', value: 'Alien' },
    ]
    const [selectSpecies, setSelectSpecies] = useState('')
    const [searchInput, setSearchInput] = useState('')

    const handlerSpeciesChange = (e, data) => {
        setSelectSpecies(data.value)
        console.log(data.value)
    }

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Input icon='search' placeholder='Search'
                            onChange={(e) => setSearchInput(e.target.value)} />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Select onChange={handlerSpeciesChange} placeholder="Species" search selection
                            options={option} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Table
                episodes={episodes}
                searchInput={searchInput}
                selectSpecies={selectSpecies}
            />
        </Container>
    )
}
export default Navbar