import * as React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderList from '../../components/FolderList';
import MemoList from '../../components/MemoList';

const App = () => {
  return <div className={styles.App}>
    <Header />
    {/* <FolderList /> */}
    <MemoList />
         </div>;
};

export default App;
