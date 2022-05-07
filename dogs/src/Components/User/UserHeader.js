import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';

const titles = {
  '/conta': 'Minha Conta',
  '/conta/estatisticas': 'Estatísticas',
  '/conta/postar': 'Poste sua Foto',
};

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
