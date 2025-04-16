import { useNavigate } from 'react-router-dom'
import { PopupMenu } from '../../Menus/PopupMenu/PopupMenu'
import styles from './NavButton.module.css'

export const NavButton = ({ title, href, menuList, onClick }) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        if (href) {
            navigate(href)
        }
        onClick && onClick()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.aCon} onClick={handleClick}>
                <div className={styles.link}>{title}</div>
                <div className={styles.menuCon}>
                    {menuList && (<PopupMenu menuList={menuList} />)}
                </div>
            </div>
        </div>
    )
}