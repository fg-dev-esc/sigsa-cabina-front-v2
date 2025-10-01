import React from 'react';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

export default function User({ collapsed }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div style={{ marginTop: 20 }}>
      {collapsed ? (
        <div style={{ marginLeft: 32, marginBottom: 5, color: '#CA2228' }}>
          <UserOutlined />
        </div>
      ) : (
        <div style={{ marginLeft: 25, marginBottom: 5, color: '#CA2228' }}>
          <UserOutlined />
          <span style={{ marginLeft: 5 }}>{user?.nombre}</span>
        </div>
      )}
    </div>
  );
}
