import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ambiente, nameProject, ver } from '../../constants/url';
import { startGetVer } from '../../store/slices/notificationSlice';

export function VerLogin() {
  const dispatch = useDispatch();
  const { versionBackend } = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(startGetVer());
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: 20, color: '#999' }}>
      {nameProject} {ver} {ambiente} {versionBackend}
    </div>
  );
}
