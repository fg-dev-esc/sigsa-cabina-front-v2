import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consLogged } from '../constants/consLogged';

export default function PublicRoute({ children }) {
  const { logged } = useSelector((state) => state.auth);

  if (logged === consLogged.LOGGED) {
    return <Navigate to="/" replace />;
  }

  return children;
}
