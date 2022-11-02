import { useEffect } from 'react'
import AlbumCard from './AlbumCard'


export default function AlbumList({ albums, setAlbums }) {
    
    useEffect(() => {
        fetch('https://albums-api-at.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    }, [setAlbums])
    return (
        <main className='album-list'>
            {!albums
            ? <p>Loading...</p>
            : albums.map(thisAlbum => <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum}/>)
        }
        </main>
    )
}