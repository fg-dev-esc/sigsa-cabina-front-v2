import { Alert, Button, Input } from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../store/slices/authSlice';
import logo from '../../assets/logo-black-big@2x.png';
import { DeviceRegister } from './DeviceRegister';
import { VerLogin } from './VerLogin';

export default function Login() {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();

  const { loginErr } = useSelector((state) => state.authErr);

  const handleChange = ({ target }) => {
    setPost({
      ...post,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    dispatch(startLogin(post));
  };

  return (
    <div className="full">
      <div className="logoContainer">
        <img src={logo} className="logoLogin" alt="" />
      </div>
      <div className="loginCuadro">
        <div className="tituloLogin">Acceso a sistema</div>
        <Input
          onChange={handleChange}
          name="email"
          style={{ marginBottom: 10, opacity: 1 }}
          prefix={<UserOutlined />}
        />
        <Input.Password
          onChange={handleChange}
          name="password"
          style={{ marginBottom: 10 }}
          prefix={<UserOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <div style={{ textAlign: 'center' }}>
          <Button onClick={handleClick}>Login</Button>
        </div>
        {loginErr && (
          <Alert style={{ marginTop: 20 }} message={loginErr} type="error" />
        )}

        <VerLogin />
      </div>

      <DeviceRegister />
    </div>
  );
}
