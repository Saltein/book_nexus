import { Link } from 'react-router-dom'
import styles from './PopupMenu.module.css'

export const PopupMenu = ({menuList}) => {
    return (
        <div className={styles.wrapper}>
            {menuList.map((option, index) => {
                return (
                    <div className={styles.option} key={index}>
                        <Link to={option.href}>{option.title}</Link>
                    </div>
                )
            })}
        </div>
    )
} 