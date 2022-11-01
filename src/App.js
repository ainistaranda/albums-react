import Header from './components/Header';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AlbumList />
      <AddAlbum />
    </div>
  );
}

export default App;
