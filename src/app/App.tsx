import { Gallery } from 'components';
import { Header } from 'layout/Header';
import { FC } from 'react';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Gallery />
    </div>
  );
};

export default App;
