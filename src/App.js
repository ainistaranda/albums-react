import { useState } from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import './App.css';

function App() {
  const [albums, setAlbums] = useState()
  return (
    <div className="App">
      <Header />
      <AlbumList setAlbums={setAlbums} albums={albums} />
      <AddAlbum setAlbums={setAlbums}/>
    </div>
  );
}

export default App;
