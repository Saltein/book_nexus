import { DefaultButton } from '../../../../shared'
import styles from './UserCard.module.css'

export const UserCard = ({ userData }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.descriptionDiv}>
                <span className={`${styles.id} ${styles.value}`}>
                    <span className={styles.d}>ID: </span>{userData.id}
                </span>
                <span className={`${styles.name} ${styles.value}`}>
                    <span className={styles.d}>Имя: </span>{userData.name}

                </span>
                <span className={`${styles.email} ${styles.value}`}> 
                    <span className={styles.d}>Email: </span>{userData.email}

                </span>
                <span className={`${styles.phone} ${styles.value}`}>
                    <span className={styles.d}>Телефон: </span>{userData.phone}

                </span>
                <span className={`${styles.city} ${styles.value}`}>
                    <span className={styles.d}>Город: </span>{userData.city}
                </span>
                <span className={`${styles.birthday} ${styles.value}`}>
                    <span className={styles.d}>Дата рождения: </span>{userData.birthday}
                </span>
                <span className={`${styles.role} ${styles.value}`}>
                    <span className={styles.d}>Роль: </span>{userData.role}
                </span>

                <DefaultButton title={'Посмотреть объявления'} height='30px' />
            </div>
            <div className={styles.buttonsDiv}>
                <DefaultButton title={'Изменить'} color={"#fa0"} brightText={false} />
                <DefaultButton title={'Заблокировать'} color={"#d33"} />
            </div>
        </div>
    )
}