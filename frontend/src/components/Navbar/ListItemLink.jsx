import styles from "../../styles/Navbar/Navbar.module.scss"
import { NavLink } from "react-router-dom"

const ListItemLink = ({ url, children, clickHandler, optionClass }) => {
    return (
        <li className={`${styles.listItem} ${optionClass}`} onClick={clickHandler}>
            <NavLink to={`/${url}`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
                {children}
            </NavLink>
        </li>
    );
};

ListItemLink.defaultProps={
    url: "",
    optionClass: undefined,
    
}

export default ListItemLink