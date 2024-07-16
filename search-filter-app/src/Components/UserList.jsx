import React from 'react';
import './UserList.css';

function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} className="user-item">{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
