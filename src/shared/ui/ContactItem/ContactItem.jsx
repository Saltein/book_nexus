import styles from './ContactItem.module.css'

export const ContactItem = ({ icon, infoList }) => {
    return (
        <div className={styles.wrapper}>
            {icon ? <img src={icon} /> : <div className={styles.noIcon} />}
            <div className={styles.info}>
                {infoList.map((string, index) => {
                    return (
                        <div key={index}>
                            <p>{string}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}