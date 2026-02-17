import React from 'react';
import S from './StatsInfo.module.scss';

function StatItem({ quantity, label }) {
  return (
    <div className={S.container}>
      <h2 className={S.number}>{quantity}</h2>
      <p className={S.label}>{label}</p>
    </div>
  );
}

export default StatItem;