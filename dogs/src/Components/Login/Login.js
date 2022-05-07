import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Login.module.css';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
