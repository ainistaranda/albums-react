import { useState } from "react";

export default function AddAlbum({ setAlbums }) {
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1970)
  const handleSubmit = (e) => {
    e.preventDefault();
    // let's check to see if they entered all the data:
    if(!album || !artist || !year)  {
        alert('Please enter all info')
        return
    }
    const newAlbum = { artist, album, year }
    fetch('https://albums-api-at.web.app/albums', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlbum)
    })
    .then(response =>response.json())
    .then(data => {
        //assume it worked...
        setAlbums(data)
        setAlbum('')
        setArtist('')
        setYear(1970)
    })
    .catch(alert)
  };
  return (
    <section className="add-album">
      <h3>add new album</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="album"> Album:
          <input type="text" 
          name="album" required
          onChange={e => setAlbum(e.target.value)} 
          value={album}/>
        </label><br />
        <label htmlFor="artist"> Artist:
          <input type="text" 
          name="artist" required
          onChange={e => setArtist(e.target.value)} 
          value={artist}/>
        </label><br />
        <label htmlFor="year"> Year:
          <input type="number" required
          name="year" 
          onChange={e => setYear(e.target.value)} 
          value={year}/>
        </label><br />
        <input type="submit" value='Add Album' />
      </form>
    </section>
  );
}
