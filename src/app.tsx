import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { Episode } from './types'

const App = (): JSX.Element => {

  const [episodes, setEpisodes] = useState<Episode[] | any>([])

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

  return (
    <main>
      <h1 className='characters_title'>Characters</h1>
      <Navbar episodes={episodes}
/>
    </main>
  )
}

export default App