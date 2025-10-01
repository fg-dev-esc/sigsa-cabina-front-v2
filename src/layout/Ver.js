import React from 'react';
import { ver, nameProject, ambiente } from '../constants/url';

export default function Ver() {
  return (
    <div style={{ textAlign: 'center', fontSize: 11, color: '#999', padding: 10 }}>
      {nameProject} {ver} {ambiente}
    </div>
  );
}
