import { useState } from 'react';
import { Users } from './users';
import Table from './Table';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const search = (data) =>
    data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );

  return (
    <div className='app'>
      <input type='text' placeholder='Search...' className='search' onChange={handleSearch} />
      <Table data={search(Users)} />
    </div>
  );
};

export default App;
