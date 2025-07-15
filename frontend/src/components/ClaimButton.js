import React from 'react';
import styles from './ClaimButton.module.css';

const ClaimButton = ({ selectedUserId, onClaim }) => {
  return (
    <button
      className={styles.button}
      onClick={onClaim}
      disabled={!selectedUserId}
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
