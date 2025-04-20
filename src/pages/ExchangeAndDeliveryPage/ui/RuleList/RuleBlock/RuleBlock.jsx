import styles from './RuleBlock.module.css'
import goodIcon from './assets/checkmark.svg'
import badIcon from './assets/close.svg'

export const RuleBlock = ({ rule }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <img className={styles.image} src={rule.image} />
                <h3>{rule.title}</h3>
            </div>

            {console.log(rule)}

            <div className={styles.ruleList}>
                {rule.rules.map((listRule, index) => {
                    return (
                        <div className={styles.rule} key={index}>
                            {listRule.allowed 
                            ? <img className={styles.allowIcon} src={goodIcon} /> 
                            : <img className={styles.allowIcon} src={badIcon} />}
                            <span>{listRule.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}