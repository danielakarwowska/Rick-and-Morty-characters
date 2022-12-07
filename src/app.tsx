import React, { useEffect, useState } from 'react'
import Layout from './components/layout'
import Navbar from './components/navbar'
import axios from 'axios'
import { Episode } from './types'

const App = (): JSX.Element => {
    const [episodes, setEpisodes] = useState<Episode[]|any>([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character`)
                setEpisodes(response.data.results)
                console.log(response.data.results)
            } catch (error) {
                console.log('error')
            }
        }
        fetchApi()
    }, [])
    return (
        <Layout>
            <h1>Characters</h1>
            <Navbar episodes={episodes} />
        </Layout>
    )
}

export default App