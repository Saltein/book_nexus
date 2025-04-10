import styles from './NavTogglerButton.module.css'
import menuIcon from './assets/menu.svg'

export const NavTogglerButton = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src={menuIcon} />
        </div>
    )
}