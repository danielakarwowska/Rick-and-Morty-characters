import React, { useEffect, useState } from "react"
import Table from './table'
import { Input, Dropdown, Grid, Select } from 'semantic-ui-react'
import { Episode } from "../types"
type Props = {
    episodes: Episode
}

const Navbar = ({ episodes }: Props) => {
    const option = [
        { key: 'Human', text: 'Human', value: 'Human' },
        { key: 'Alien', text: 'Alien', value: 'Alien' },
    ]
    const [selectSpecies, setSelectSpecies] = useState()
    const [searchInput, setSearchInput] = useState('')
const handlerSpeciesChange = (e) => {
    setSelectSpecies(e.target.value)
    console.log(e.target.value)
}
    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Input icon='search' placeholder='Search'
                        onChange={(e) => setSearchInput(e.target.value)} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <select onChange={handlerSpeciesChange}>
                        <option value='Species'>Species</option>
                        <option value='Human'>Human</option>
                        <option value='Alien'>Alien</option>
                    </select>
                    {/* <Select onChange={handlerSpeciesChange} placeholder="Species"search selection options={option}/> */}
                </Grid.Column>
            </Grid>
            <Table
                episodes={episodes}
                searchInput={searchInput} />
        </div>
    )
}
export default Navbar