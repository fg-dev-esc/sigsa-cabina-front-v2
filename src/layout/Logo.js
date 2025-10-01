import React from 'react';

export default function Logo({ isCollapsed }) {
  return (
    <div style={{ padding: isCollapsed ? 10 : 20, textAlign: 'center' }}>
      {!isCollapsed ? (
        <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ca2228' }}>
          SIGSA
        </div>
      ) : (
        <div style={{ fontSize: 16, color: '#ca2228' }}>S</div>
      )}
    </div>
  );
}
