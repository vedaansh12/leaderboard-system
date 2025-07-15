import React from 'react';

const UserSelector = ({ users, selectedUserId, setSelectedUserId }) => {
  return (
    <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
      {users.map(user => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
