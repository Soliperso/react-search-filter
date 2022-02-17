import { useState } from 'react';
import { Users } from './users';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='app'>
      <input type='text' placeholder='Search...' className='search' onChange={handleSearch} />
      <ul className='list'>
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className='list-item'>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
