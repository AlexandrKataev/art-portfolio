import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div>Alexandr Kataev</div>
    </div>
  );
};
