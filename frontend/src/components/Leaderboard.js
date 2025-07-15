import React from 'react';
import styles from './Leaderboard.module.css';

const Leaderboard = ({ users }) => {
  return (
    <div>
      <h3 className={styles.title}>🏅 Leaderboard</h3>
      <ol className={styles.list}>
        {users.map((user, index) => (
          <li key={user._id} className={styles.item}>
            <strong>{user.name}</strong> — {user.points} pts (Rank {index + 1})
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
