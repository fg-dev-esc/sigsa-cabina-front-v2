import React from 'react';
import { useSelector } from 'react-redux';

export default function User({ collapsed }) {
  const { user } = useSelector((state) => state.auth);

  if (collapsed) {
    return (
      <div style={{ textAlign: 'center', fontSize: 12, color: '#666' }}>
        {user?.email?.[0]?.toUpperCase() || 'U'}
      </div>
    );
  }

  return (
    <div style={{ padding: '10px 20px', textAlign: 'center' }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>
        {user?.email || 'Usuario'}
      </div>
      <div style={{ fontSize: 12, color: '#666' }}>v2.0.0</div>
    </div>
  );
}
