import styles from "../../styles/Navbar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import ListItemLink from "./ListItemLink";
import { useState} from "react";

const MobileNavbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    const closeNav = () => {
        setNavOpen(false)
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={`${styles.iconContainer} ${styles.bars}`} onClick={() => setNavOpen(true)}>
                    <FaBars />
                </div>
                {/*NAV*/}
                <nav className={navOpen ? styles.navActive : undefined}>
                    <ul>
                        <div className={`${styles.iconContainer} ${styles.times}`} onClick={() => setNavOpen(false)}>
                            <FaTimes />
                        </div>

                        <div className={styles.mobileMenuLinks}>
                            <ListItemLink url="profile" optionClass={styles.linkColor} clickHandler={closeNav}>
                                <h3>Profile</h3>
                            </ListItemLink>
                        </div>

                        <div className={styles.mobileMenuLinks}>
                            <ListItemLink url="settings" optionClass={styles.linkColor} clickHandler={closeNav}>
                                <h3>Settings</h3>
                            </ListItemLink>
                        </div>

                        <div className={styles.mobileMenuLinks}>
                            <ListItemLink url="logout" optionClass={styles.linkColor}>
                                <h3>Logout</h3>
                            </ListItemLink>
                        </div>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MobileNavbar