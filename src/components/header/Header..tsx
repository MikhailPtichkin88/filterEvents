import React from 'react';
import logo from '../../assets/images/logo.svg';
import login from '../../assets/images/login.svg';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>

                    <a className={styles.logo} href="#">
                        <img className={styles.logoImg} src={logo} alt=""/>
                    </a>

                    <nav className={styles.menu}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink} href="#">
                                    About Us
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink} href="#">
                                    Courses
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink + ' ' + styles.active} href="#">
                                    Events
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink} href="#">
                                    Blog
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink} href="#">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button className={styles.consultBtn} type="button">
                        Get consultation
                    </button>

                    <a className={styles.loginLink} href="#">Login / Register
                        <img className={styles.loginImg} src={login} alt="login picture"/>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header;