import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { LeftOutlined } from '@ant-design/icons';

interface Props {
  title: string;
}

const Navbar: FC<Props> = (props) => {
  const { title } = props;
  return (
    <nav className={styles.navbar}>
      <span className={styles.icon}><LeftOutlined /></span>
      <span>{ title }</span>
    </nav>
  )
}


export default Navbar;