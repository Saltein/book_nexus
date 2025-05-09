import { formatStatus } from '../../lib/status/formatStatus'
import styles from './StatusIcon.module.css'
import { ReactComponent as IconPending } from './assets/pending.svg'
import { ReactComponent as IconCompleted } from './assets/completed.svg'
import { ReactComponent as IconCancelled } from './assets/cancelled.svg'

export const StatusIcon = ({ statusStr }) => {

    const statusCode = formatStatus(statusStr, 'int')

    return (
        <div className={styles.wrapper}>
            {statusCode === 0 && <IconPending className={styles.icon} />}
            {statusCode === 1 && <IconCompleted className={styles.icon} />}
            {statusCode === 2 && <IconCancelled className={styles.icon} />}
        </div>
    )
}