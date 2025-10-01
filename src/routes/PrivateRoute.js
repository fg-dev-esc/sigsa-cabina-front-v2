import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consLogged } from '../constants/consLogged';
import { Spin } from 'antd';

export default function PrivateRoute({ children }) {
  const { logged } = useSelector((state) => state.auth);

  if (logged === consLogged.INICIANDO) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (logged !== consLogged.LOGGED) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
