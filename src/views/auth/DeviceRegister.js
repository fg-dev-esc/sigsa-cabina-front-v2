import { Alert, Button, Input } from "antd";
import {
    UserOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAllowBrowser } from "../../store/slices/authSlice";

export const DeviceRegister = () => {
    const [show, setShow] = useState(false)
    const [post, setPost] = useState({});
    const dispatch = useDispatch();

    const { registerDeviceErr } = useSelector((state) => state.authErr);

    const handleChange = ({ target }) => {
        setPost({
            ...post,
            [target.name]: target.value,
        });
    };

    const handleClick = () => {
        dispatch(startAllowBrowser(post));
    };

    return (
        <div className="loginCuadro" style={{ marginTop: 20 }}>
            <div onClick={() => setShow(!show)} className="tituloLogin" style={{ cursor: 'pointer' }}>Registrar</div>

            {show && (<>
                <Input
                    onChange={handleChange}
                    name="emailFor"
                    placeholder="email a registrar"
                    style={{ marginBottom: 10, opacity: 1 }}

                />
                <Input
                    onChange={handleChange}
                    name="email"
                    placeholder="email"
                    style={{ marginBottom: 10, opacity: 1 }}

                />
                <Input.Password
                    onChange={handleChange}
                    name="password"
                    placeholder="password"

                    style={{ marginBottom: 10 }}

                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                />
                <Input.TextArea
                    placeholder="comentarios"

                    onChange={handleChange}
                    name="Comentarios"
                    style={{ marginBottom: 10, opacity: 1 }}

                />
                <div style={{ textAlign: "center" }}>
                    <Button disabled={!post.emailFor || !post.email || !post.password} onClick={handleClick}>Registrar</Button>
                </div>

                {registerDeviceErr && (
                    <Alert style={{ marginTop: 20 }} message={registerDeviceErr} type="error" />
                )}

            </>)}


        </div>
    )
}