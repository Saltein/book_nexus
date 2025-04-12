import styles from './NavTogglerButton.module.css'
import menuIcon from './assets/menu.svg'

export const NavTogglerButton = ({onClick}) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <img src={menuIcon} />
        </div>
    )
}