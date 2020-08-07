import React from 'react';

import './styles.css';

interface PokeStatsProps {
  statsName?: string;
  statusValue?: number;
}

const PokeStats: React.FC<PokeStatsProps> = ({ statsName, statusValue }) => {
  return (
    <div id="poke-stats">
      <div className="poke-stats-info">
        <strong>{statsName}</strong>
        <p>{statusValue}</p>
      </div>
      <input type="range" disabled value={statusValue} />
    </div>
  );
}

export default PokeStats;