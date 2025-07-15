import React, { useState } from 'react';
import styles from './AddUser.module.css';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name);
    setName('');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Add new user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.button} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddUser;
