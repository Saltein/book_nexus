import { RuleBlock } from './RuleBlock/RuleBlock'
import styles from './RuleList.module.css'

export const RuleList = ({ ruleList }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {ruleList.map((rule, index) => {
                    return (
                        <RuleBlock rule={rule} key={index} />
                    )
                })}
            </div>
        </div>
    )
} 