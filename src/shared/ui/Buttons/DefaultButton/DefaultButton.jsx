import styles from './DefaultButton.module.css'

export const DefaultButton = ({ title, onClick, color, brightText = true, height = '60px', border_radius = "5px" }) => {
    const buttonStyle = {
        backgroundColor: color || undefined,
        color: brightText ? '#fff' : '#000',
        height: height,
        borderRadius: border_radius,
    };

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={onClick ? onClick : null}
                style={buttonStyle}
            >
                {title}
            </button>
        </div>
    )
}