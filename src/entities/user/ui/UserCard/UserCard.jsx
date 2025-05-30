import { useState } from 'react'
import { DefaultButton, ModalWindow } from '../../../../shared'
import { BanWindow } from './BanWindow/BanWindow'
import styles from './UserCard.module.css'

export const UserCard = ({ userData }) => {
    const [isOpen, setIsOpen] = useState(false)

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
                <DefaultButton title={'Изменить'} color={"#fa0"} brightText={false} />
                {!userData.is_blocked &&
                    <DefaultButton title={'Заблокировать'} color={"#d33"} onClick={() => setIsOpen(true)} />}
            </div>

            {isOpen &&
                <ModalWindow onClose={() => setIsOpen(false)}>
                    <BanWindow userData={userData} onClose={() => setIsOpen(false)} />
                </ModalWindow>}
        </div>
    )
}