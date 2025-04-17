import styles from './RuleBlock.module.css'

export const RuleBlock = ({name, titleIcon, title, subtitles = [] }) => {
    return (
        <div className={styles.block}>
            <div className={styles.titleCon}>
                <img className={styles.image} src={titleIcon} />
                <h2 className={styles.title}>{title}</h2>
            </div>

            {subtitles.map((subtitle, index) => {
                return (
                    <div className={styles.descriptionCon} key={index} id={name} >
                        <h4 className={styles.subtitle}>{subtitle.number} {subtitle.title}</h4>
                        <div className={styles.description}>
                            {subtitle.description}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}