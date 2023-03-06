import React, { useState, useEffect, useCallback } from "react";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import Logo from "../../images/Insta.png";
import styles from "./styles";
import decode from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";

const { Title } = Typography;
const { Header } = Layout;

const AppBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    navigate("/authform");
    setUser(null);
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token, logout]);

  return (
    <Header style={styles.header}>
      <Link to="/">
        <div style={styles.homeLink}>
          <Image style={styles.image} width="45" preview={false} src={Logo} />
          &nbsp;
          <Title style={styles.title}>Instaverse</Title>
        </div>
      </Link>
      {!user ? (
        <Link to="/authform">
          <Button htmlType="button" style={styles.login}>
            Login
          </Button>
        </Link>
      ) : (
        <div style={styles.userInfo}>
          <Avatar style={styles.avatar} alt="username" size="large">
            {user?.result?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Title style={styles.username} level={4}>
            {user?.result?.username}
          </Title>
          <Button htmlType="button" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </Header>
  );
};

export default AppBar;
