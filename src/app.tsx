import React, { useEffect, useState } from 'react'
import Layout from './components/layout'
import Navbar from './components/navbar'
import PaginationPages from './components/pagination'
import { Episode } from './types'
import { Header } from 'semantic-ui-react'
const App = (): JSX.Element => {
  const [episodes, setEpisodes] = useState<Episode[] | any>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  
  const fetchData = async (url) => {
    const res = await fetch(url)
    const result = await res.json()
    setEpisodes((_characters) => {
      return [..._characters, ...result.results]
    })
    if (result.info && result.info.next) {
      fetchData(result.info.next)
    }
  }
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = episodes.slice(indexOfFirstPost, indexOfLastPost)
  const nPages = Math.ceil(episodes.length / postsPerPage)

  return (
    <Layout>
      <Header size='huge'>Characters</Header>
      <Navbar episodes={currentPosts} />
      <PaginationPages
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      nPages={nPages}
      episodes={episodes}/>
    </Layout>
  )
}

export default App