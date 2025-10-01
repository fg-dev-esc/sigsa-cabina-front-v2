import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../views/auth/Login';
import Home from '../views/Home';
import CrearServicio from '../views/CrearServicio';
import TodosServicios from '../views/TodosServicios';
import CitasAbiertas from '../views/CitasAbiertas';
import Recursos from '../views/Recursos';
import Library from '../views/Library';
import SemaforoHome from '../views/SemaforoHome';
import ProveedoresActivos from '../views/ProveedoresActivos';
import Carretero from '../views/Carretero';
import { LayoutPage } from '../layout/LayoutPage';
import { verificaLogin } from '../store/slices/authSlice';

export default function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verificaLogin());
  }, [dispatch]);

  return (
    <Router>
      <div
        style={{
          height: '100vh',
          width: 15,
          backgroundColor: '#ca2228',
          position: 'fixed',
          zIndex: 999,
        }}
      />

      <RouterRoutes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <LayoutPage>
                <Suspense
                  fallback={
                    <div style={{ marginTop: 30, textAlign: 'center' }}>
                      <Spin size="large" />
                    </div>
                  }
                >
                  <RouterRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="/crearServicio" element={<CrearServicio />} />
                    <Route path="/todosServicios" element={<TodosServicios />} />
                    <Route path="/citasAbiertas" element={<CitasAbiertas />} />
                    <Route path="/recursos" element={<Recursos />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/semaforoHome" element={<SemaforoHome />} />
                    <Route path="/provedoresActivos" element={<ProveedoresActivos />} />
                    <Route path="/carretero" element={<Carretero />} />
                    <Route path="*" element={<div>404 - pagina no encontrada</div>} />
                  </RouterRoutes>
                </Suspense>
              </LayoutPage>
            </PrivateRoute>
          }
        />
      </RouterRoutes>
    </Router>
  );
}
