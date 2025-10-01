import { useState, useEffect } from 'react';
import { Divider, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import User from './User';
import MenuLayout from './MenuLayout';
import Ver from './Ver';
import { startLoadClientesCampanias } from '../store/slices/asistenciasSlice';

const { Content, Sider } = Layout;

export function LayoutPage({ children }) {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed(!collapsed);

  useEffect(() => {
    dispatch(startLoadClientesCampanias());
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ backgroundColor: '#fff' }}
      >
        <Logo isCollapsed={collapsed} />
        <User collapsed={collapsed} />

        <MenuLayout />

        <Divider />
        <Ver />
      </Sider>

      <Layout>
        <Content style={{ paddingLeft: 10, paddingTop: 20, paddingRight: 10 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
