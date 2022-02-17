import { useState } from 'react';
import { Users } from './users';
import Table from './Table';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const keys = ['first_name', 'last_name', 'email'];

  // console.log(Users[0]['first_name']);

  const search = (data) =>
    data.filter((user) => keys.some((key) => user[key].toLowerCase().includes(query)));

  return (
    <div className='app'>
      <input type='text' placeholder='Search...' className='search' onChange={handleSearch} />
      <Table data={search(Users)} />
    </div>
  );
};

export default App;
