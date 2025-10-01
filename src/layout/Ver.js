import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ver, nameProject, ambiente } from '../constants/url';
import { startGetVer } from '../store/slices/notificationSlice';

export default function Ver() {
  const dispatch = useDispatch();
  const { versionBackend } = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(startGetVer());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: 35, marginTop: 30, color: '#999', fontSize: 11 }}>
      <div>
        F {nameProject} {ver} {ambiente}
      </div>
      <div>B {versionBackend}</div>
    </div>
  );
}
