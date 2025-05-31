import { useState } from 'react'
import { DefaultButton, ModalWindow } from '../../../../shared'
import { BanWindow } from './BanWindow/BanWindow'
import styles from './UserCard.module.css'
import { ChangeRoleWindow } from './ChangeRoleWindow/ChangeRoleWindow'

export const UserCard = ({ userData }) => {
    const [isBanOpen, setIsBanOpen] = useState(false)
    const [isChangeOpen, setIsChangeOpen] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.descriptionDiv}>
                <span className={`${styles.id} ${styles.value}`}>
                    <span className={styles.d}>ID: </span>{userData.id}
                </span>
                <span className={`${styles.name} ${styles.value}`}>
                    <span className={styles.d}>Имя: </span>{userData.UserProfile.name}

                </span>
                <span className={`${styles.email} ${styles.value}`}>
                    <span className={styles.d}>Email: </span>{userData.email}

                </span>
                <span className={`${styles.phone} ${styles.value}`}>
                    <span className={styles.d}>Телефон: </span>{userData.UserProfile.phone}

                </span>
                <span className={`${styles.city} ${styles.value}`}>
                    <span className={styles.d}>Город: </span>{userData.UserProfile.city}
                </span>
                <span className={`${styles.birthday} ${styles.value}`}>
                    <span className={styles.d}>Дата рождения: </span>{userData.UserProfile.birthdate}
                </span>
                <span className={`${styles.role} ${styles.value}`}>
                    <span className={styles.d}>Роль: </span>{userData.role}
                </span>
                {userData.is_blocked &&
                    <span className={`${styles.ban} ${styles.value}`}>
                        Заблокирован
                    </span>}

                {/* <DefaultButton title={'Посмотреть объявления'} height='30px' /> */}
            </div>
            <div className={styles.buttonsDiv}>
                <DefaultButton title={'Изменить роль'} color={"#fa0"} brightText={false} onClick={() => setIsChangeOpen(true)} />
                {!userData.is_blocked &&
                    <DefaultButton title={'Заблокировать'} color={"#d33"} onClick={() => setIsBanOpen(true)} />}
            </div>

            {isBanOpen &&
                <ModalWindow onClose={() => setIsBanOpen(false)}>
                    <BanWindow userData={userData} onClose={() => setIsBanOpen(false)} />
                </ModalWindow>}

            {isChangeOpen &&
                <ModalWindow onClose={() => setIsChangeOpen(false)}>
                    <ChangeRoleWindow currentRole={userData.role} userId={userData.id} onClose={() => setIsChangeOpen(false)} />
                </ModalWindow>}
        </div>
    )
}