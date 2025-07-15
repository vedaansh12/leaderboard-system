import React from 'react';

const ClaimHistory = ({ history }) => {
  return (
    <div>
      <h4>📜 Claim History</h4>
      <ul>
        {history.map(h => (
          <li key={h._id}>
            {h.userId.name} claimed {h.points} pts at {new Date(h.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
