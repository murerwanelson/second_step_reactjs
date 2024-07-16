import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import UserList from './Components/UserList';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' },
];

function App() {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = (key) => {
    setSearchKey(key);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
