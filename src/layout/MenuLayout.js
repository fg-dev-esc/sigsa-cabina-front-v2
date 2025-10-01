import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  BookOutlined,
  CarOutlined,
  FolderViewOutlined,
  InsertRowAboveOutlined,
  PlusCircleOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { logout } from '../store/slices/authSlice';

export default function MenuLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = ({ key }) => {
    if (key !== '/logoff') {
      navigate(key);
    } else {
      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ marginTop: 10 }}
      theme="light"
      defaultSelectedKeys={['/']}
      mode="inline"
    >
      <Menu.Item key="/crearServicio" icon={<PlusCircleOutlined />}>
        Crear Servicio
      </Menu.Item>
      <Menu.Item key="/todosServicios" icon={<UnorderedListOutlined />}>
        Todos los servicios
      </Menu.Item>
      <Menu.Item key="/citasAbiertas" icon={<UnorderedListOutlined />}>
        Citas
      </Menu.Item>
      <Menu.Item key="/recursos" icon={<FolderViewOutlined />}>
        Recursos
      </Menu.Item>
      <Menu.Item key="/library" icon={<BookOutlined />}>
        Biblioteca
      </Menu.Item>
      <Menu.Item key="/semaforoHome" icon={<InsertRowAboveOutlined />}>
        Semaforo
      </Menu.Item>
      <Menu.Item key="/provedoresActivos" icon={<PoweroffOutlined />}>
        Proveedores Activos
      </Menu.Item>
      <Menu.Item key="/carretero" icon={<CarOutlined />}>
        Carretero
      </Menu.Item>
      <Menu.Item key="/logoff" icon={<PoweroffOutlined />}>
        Cerrar sesion
      </Menu.Item>
    </Menu>
  );
}
