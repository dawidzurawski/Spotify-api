import React, { useState, useEffect } from 'react'
import { getAccessToken, fetchSpotifyData } from './spotify'

const App = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken()
      const albumData = await fetchSpotifyData(token)
      setAlbums(albumData)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="text-center p-4 bg-blue-500 text-white">
        <h1 className="text-3xl">Spotify New Releases</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <img className="w-full" src={album.images[0].url} alt={album.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{album.name}</div>
              <p className="text-gray-700 text-base">
                {album.artists.map((artist) => artist.name).join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
