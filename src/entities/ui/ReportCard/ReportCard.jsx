import { useState } from 'react'
import { formatDate } from '../../../shared/lib/date/formatDate'
import styles from './ReportCard.module.css'
import { ModalWindow } from '../../../shared'
import { UserCard } from '../../user/ui/UserCard/UserCard'

export const ReportCard = ({ reportData, onSolution }) => {
    const [isOpen, setIsOpen] = useState()

    return (
        <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
            <span className={`${styles.id} ${styles.field}`}>{reportData.id}</span>
            <span className={`${styles.reason} ${styles.field}`}>{reportData.reason}</span>
            <span className={`${styles.reported_name} ${styles.field}`}>{reportData.reported.UserProfile.name}</span>
            <span className={`${styles.reported_email} ${styles.field}`}>{reportData.reported.email}</span>
            <span className={`${styles.role} ${styles.field}`}>{reportData.reported.role}</span>
            <span className={`${styles.created_at} ${styles.field}`}>{formatDate(reportData.created_at, true)}</span>

            {isOpen &&
                <ModalWindow onClose={() => setIsOpen(false)}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <UserCard reportData={reportData} isReport onClose={() => setIsOpen(false)} onSolution={onSolution} />
                    </div>
                </ModalWindow>
            }
        </div>
    )
}