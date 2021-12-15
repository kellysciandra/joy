import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css'
import Home from '../pages/home';

const Layout = ({ children }) => (
    <>
      <Head>
        <title>Joyyounan</title>
      </Head>
      <Navbar />
      <Home/>
      {children}
      <footer className={styles.footer}>

      </footer>
    </>
)

export default Layout;