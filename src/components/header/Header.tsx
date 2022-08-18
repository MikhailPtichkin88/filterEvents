import React from 'react';
import logo from '../../assets/images/logo.svg';
import login from '../../assets/images/login.svg';
import styles from './Header.module.scss';

const Header = () => {
    const headerArr = ["About Us", "Courses", "Events", "Blog", "Contacts",]
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>

                    <a className={styles.logo} href="#">
                        <img className={styles.logoImg} src={logo} alt=""/>
                    </a>

                    <nav className={styles.menu}>
                        <ul className={styles.menuList}>
                            {
                                headerArr.map(el => {
                                    const classes = el === "Events" ? `${styles.menuLink} ${styles.active}` : `${styles.menuLink}`
                                    return <li className={styles.menuItem}>
                                        <a className={classes} href="#">
                                            {el}
                                        </a>
                                    </li>
                                })
                            }

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