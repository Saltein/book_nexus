import { useState } from 'react'
import styles from './ChangeRoleWindow.module.css'
import { DefaultButton } from '../../../../../shared'
import { userApi } from '../../../../../shared/api/userApi'

export const ChangeRoleWindow = ({ currentRole, userId, onClose }) => {
    const [newRole, setNewRole] = useState(currentRole)

    const handleSubmit = async () => {
        try {
            const response = userApi.changeRole(userId, newRole)
            if (!response) {
                console.log('Неизвестная ошибка смены роли')
                return
            }
            onClose()
        } catch (error) {
            console.error("Ошибка смены роли", error)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Выберите новую роль</h3>

            <div className={styles.rolesBox}>
                <div className={`${styles.newRole} ${newRole === 'user' ? styles.current : ''}`} onClick={() => setNewRole('user')}>
                    user
                </div>
                <div className={`${styles.newRole} ${newRole === 'moderator' ? styles.current : ''}`} onClick={() => setNewRole('moderator')}>
                    moderator
                </div>
                <div className={`${styles.newRole} ${newRole === 'admin' ? styles.current : ''}`} onClick={() => setNewRole('admin')}>
                    admin
                </div>
            </div>

            {currentRole === newRole
                ?
                <DefaultButton title={'Применить'} height='40px' border_radius='20px' active={false} />
                :
                <DefaultButton title={'Применить'} height='40px' border_radius='15px' onClick={handleSubmit} />
            }
        </div>
    )
}