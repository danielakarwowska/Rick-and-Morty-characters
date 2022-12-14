import React, { useEffect, useState } from 'react'
import Layout from './components/layout'
import Navbar from './components/navbar'
import axios from 'axios'
import { Episode } from './types'
import PaginationPages from './components/pagination'
const App = (): JSX.Element => {
    const [episodes, setEpisodes] = useState<Episode[] | any>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

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

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = episodes.slice(indexOfFirstPost, indexOfLastPost)

    const nPages = Math.ceil(episodes.length / postsPerPage)
    return (
        <Layout>
            <h1>Characters</h1>
            <Navbar episodes={currentPosts} />
            <PaginationPages
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </Layout>
    )
}

export default App