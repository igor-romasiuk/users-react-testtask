import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToUsers = () => {
    navigate('/');
  };

  const goToEditUsers = () => {
    navigate('/edit-users');
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <button
          className={`${styles.button} ${location.pathname === '/edit-users' ? styles.active : ''}`}
          onClick={goToEditUsers}
        >
          Edit Users
        </button>
        <button
          className={`${styles.button} ${location.pathname === '/' ? styles.active : ''}`}
          onClick={goToUsers}
        >
          Users
        </button>
      </header>
      <main className={styles.body}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
