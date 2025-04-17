import styles from './ContentNav.module.css'

export const ContentNav = ({ title, content }) => {
    return (
        <div className={styles.wrapper}>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.chapters}>
                {content.map((chapter, index) => {
                    return (
                        <div className={styles.chapter} key={index}>
                            {chapter}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}