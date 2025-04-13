import styles from './DefaultButton.module.css'

export const DefaultButton = ({title, onClick}) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={onClick ? onClick : null}>{title}</button>
        </div>
    )
}