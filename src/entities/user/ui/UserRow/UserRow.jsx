import { useState } from 'react'
import styles from './UserRow.module.css'
import { ModalWindow } from '../../../../shared'
import { UserCard } from '../UserCard/UserCard'

export const UserRow = ({ userData }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
            <span className={`${styles.id} ${styles.value}`}>{userData.id}</span>
            <span className={`${styles.name} ${styles.value}`}>{userData.name}</span>
            <span className={`${styles.email} ${styles.value}`}>{userData.email}</span>
            <span className={`${styles.phone} ${styles.value}`}>{userData.phone}</span>
            <span className={`${styles.city} ${styles.value}`}>{userData.city}</span>
            <span className={`${styles.birthday} ${styles.value}`}>{userData.birthday}</span>
            <span className={`${styles.role} ${styles.value}`}>{userData.role}</span>

            {isOpen &&
                <ModalWindow onClose={onClose}>
                    <UserCard userData={userData} />
                </ModalWindow>}
        </div>
    )
}