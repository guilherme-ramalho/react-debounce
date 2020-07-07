import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(`http://localhost:3333/artists?q=${search}`)
        .then(response => response.json())
        .then(response => setList(response))
        .catch(error => console.log(error.message));
    } else {
      setList([]);
    }
  }, [search]);

  return (
    <div className="app">
      <img src={logo} className="logo" alt="logo" />
      <label>Search for an artist</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {list.length > 0 && (
          list.map(item => (<li key={item.id}>{item.name}</li>))
        )}
      </ul>
    </div>
  );
}

export default App;
