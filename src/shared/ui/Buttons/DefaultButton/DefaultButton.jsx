import styles from './DefaultButton.module.css'

export const DefaultButton = ({ title, onClick, color }) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={onClick ? onClick : null}
                style={color ? { backgroundColor: color } : {}}
            >
                {title}
            </button>
        </div>
    )
}