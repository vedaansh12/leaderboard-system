import React, { useEffect, useState } from 'react';
import {
  getUsers,
  addUser,
  claimPoints,
  getHistory
} from './api';

import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import AddUser from './components/AddUser';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';

import styles from './App.module.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [history, setHistory] = useState([]);

  // Fetch users and history
  const loadData = async () => {
    try {
      const usersRes = await getUsers();
      const historyRes = await getHistory();
      setUsers(usersRes.data);
      setHistory(historyRes.data);

      // Select the first user by default
      if (usersRes.data.length && !selectedUserId) {
        setSelectedUserId(usersRes.data[0]._id);
      }
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle claiming points
  const handleClaim = async () => {
    try {
      await claimPoints(selectedUserId);
      loadData();
    } catch (err) {
      console.error("Error claiming points:", err);
    }
  };

  // Handle adding a new user
  const handleAddUser = async (name) => {
    try {
      await addUser(name);
      loadData();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🏆 Leaderboard System</h1>

      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />

      <ClaimButton
        selectedUserId={selectedUserId}
        onClaim={handleClaim}
      />

      <AddUser onAdd={handleAddUser} />

      <Leaderboard users={users} />

      <ClaimHistory history={history} />
    </div>
  );
}

export default App;
