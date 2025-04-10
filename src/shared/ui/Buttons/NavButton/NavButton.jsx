import styles from './NavButton.module.css'

export const NavButton = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <a>{title}</a>
        </div>
    )
}