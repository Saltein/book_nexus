import { formatStatus } from '../../lib/status/formatStatus'
import styles from './StatusIcon.module.css'
import { ReactComponent as IconPending } from './assets/pending.svg'
import { ReactComponent as IconCompleted } from './assets/completed.svg'
import { ReactComponent as IconRejected } from './assets/rejected.svg'
import { ReactComponent as IconAccepted } from './assets/accepted.svg'

export const StatusIcon = ({ statusStr }) => {

    const statusCode = formatStatus(statusStr, 'int')

    return (
        <div className={styles.wrapper}>
            {statusCode === 0 && <IconPending className={styles.icon} />}
            {statusCode === 1 && <IconCompleted className={styles.icon} />}
            {statusCode === 2 && <IconRejected className={styles.icon} />}
            {statusCode === 3 && <IconAccepted className={styles.icon} />}
        </div>
    )
}