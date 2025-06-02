import { useEffect, useState } from 'react'
import { DefaultButton, DefaultDivider, ModalWindow } from '../../../../shared'
import { BanWindow } from './BanWindow/BanWindow'
import styles from './UserCard.module.css'
import { ChangeRoleWindow } from './ChangeRoleWindow/ChangeRoleWindow'
import { formatDate } from '../../../../shared/lib/date/formatDate'
import { reportsApi } from '../../../../shared/api/reportsApi'

export const UserCard = ({ userData, reportData, onClose, onSolution }) => {
    const [isBanOpen, setIsBanOpen] = useState(false)
    const [isChangeOpen, setIsChangeOpen] = useState(false)
    const [data, setData] = useState(userData)
    const [isReady, setIsReady] = useState(false)

    const handleVerdict = async (status) => {
        try {
            console.log('data.report_id, status:', data, status)
            const response = await reportsApi.changeStatus(data.report_id, status)
            onSolution()
            onClose()
        } catch (error) {
            console.error('Ошибка', error)
        }
    }

    useEffect(() => {
        if (reportData) {
            const temp = {
                report_id: reportData.id,
                reason: reportData.reason,
                created_at: reportData.created_at,
                id: reportData.reported.id,
                reported_email: reportData.reported.email,
                reported_role: reportData.reported.role,
                reported_name: reportData.reported.UserProfile.name,

                reporter_email: reportData.reporter.email,
                reporter_role: reportData.reporter.role,
                reporter_name: reportData.reporter.UserProfile.name,
            }
            setData(temp)
        } else {
            setData(userData)
        }
        setIsReady(true)
    }, [])

    if (!isReady) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className={styles.wrapper}>
            {!reportData
                ?
                <div className={styles.descriptionDiv}>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>ID: </span>{data.id}
                    </span>
                    <span className={`${styles.name} ${styles.value}`}>
                        <span className={styles.d}>Имя: </span>{data.UserProfile.name}

                    </span>
                    <span className={`${styles.email} ${styles.value}`}>
                        <span className={styles.d}>Email: </span>{data.email}

                    </span>
                    <span className={`${styles.phone} ${styles.value}`}>
                        <span className={styles.d}>Телефон: </span>{data.UserProfile.phone}

                    </span>
                    <span className={`${styles.city} ${styles.value}`}>
                        <span className={styles.d}>Город: </span>{data.UserProfile.city}
                    </span>
                    <span className={`${styles.birthday} ${styles.value}`}>
                        <span className={styles.d}>Дата рождения: </span>{data.UserProfile.birthdate}
                    </span>
                    <span className={`${styles.role} ${styles.value}`}>
                        <span className={styles.d}>Роль: </span>{data.role}
                    </span>
                    {data.is_blocked &&
                        <span className={`${styles.ban} ${styles.value}`}>
                            Заблокирован
                        </span>}
                </div>
                :
                <div className={styles.descriptionDiv}>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>ID жалобы: </span>{data.report_id}
                    </span>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Дата жалобы: </span>{formatDate(data.created_at, true)}
                    </span>
                    <DefaultDivider />
                    <h4>Подозреваемый</h4>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Имя: </span>{data.reported_name}
                    </span>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Email: </span>{data.reported_email}
                    </span>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Роль: </span>{data.reported_role}
                    </span>
                    <DefaultDivider />
                    <h4>Доносчик</h4>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Имя: </span>{data.reporter_name}
                    </span>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Email: </span>{data.reporter_email}
                    </span>
                    <span className={`${styles.id} ${styles.value}`}>
                        <span className={styles.d}>Роль: </span>{data.reporter_role}
                    </span>
                    <DefaultDivider />
                    <h4>Причина жалобы:</h4>
                    <span className={`${styles.id} ${styles.value}`}>
                        <div className={styles.reasonBox}>
                            {data.reason}
                        </div>
                    </span>
                </div>
            }
            <div className={styles.buttonsDiv}>
                {!reportData
                    ?
                    <DefaultButton title={'Изменить роль'} color={"#fa0"} brightText={false} onClick={() => setIsChangeOpen(true)} />
                    :
                    <DefaultButton title={'Помиловать'} color={"#fa0"} brightText={false} onClick={() => handleVerdict('dismissed')} />
                }
                {!data.is_blocked &&
                    <DefaultButton title={'Заблокировать'} color={"#d33"} onClick={() => setIsBanOpen(true)} />}
            </div>

            {
                isBanOpen &&
                <ModalWindow onClose={() => setIsBanOpen(false)}>
                    <BanWindow userData={data} onClose={() => setIsBanOpen(false)} onBan={() => handleVerdict('action_taken')} />
                </ModalWindow>
            }

            {
                isChangeOpen &&
                <ModalWindow onClose={() => setIsChangeOpen(false)}>
                    <ChangeRoleWindow currentRole={data.role} userId={data.id} onClose={() => setIsChangeOpen(false)} />
                </ModalWindow>
            }
        </div >
    )
}