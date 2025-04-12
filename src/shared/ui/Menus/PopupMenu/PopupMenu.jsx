import styles from './PopupMenu.module.css'

export const PopupMenu = ({menuList}) => {
    return (
        <div className={styles.wrapper}>
            {menuList.map((option, index) => {
                return (
                    <div className={styles.option} key={index}>
                        <a href={option.href}>{option.title}</a>
                    </div>
                )
            })}
        </div>
    )
} 