import { PopupMenu } from '../../Menus/PopupMenu/PopupMenu'
import styles from './NavButton.module.css'

export const NavButton = ({ title, href, menuList }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.aCon}>
                <a href={href ? href : '#'}>{title}</a>
                <div className={styles.menuCon}>
                    {menuList && (<PopupMenu menuList={menuList} />)}
                </div>
            </div>
        </div>
    )
}