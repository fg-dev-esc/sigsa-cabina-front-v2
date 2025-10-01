import React from 'react';
import { Card } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import travolta from '../assets/travolta.png';

export default function Library() {
  return (
    <div>
      <div className="card__titulo">Biblioteca</div>
      <div className="card__contenido">
        <Card>
          <div style={{ textAlign: 'center', padding: 30 }}>
            <img
              src={travolta}
              alt="en construccion"
              style={{ width: 150, marginBottom: 20 }}
            />
            <p style={{ fontSize: 18, color: '#999', marginBottom: 10 }}>
              <WarningOutlined /> vista en construccion
            </p>
            <p style={{ color: '#666' }}>
              esta funcionalidad se migrara proximamente
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
