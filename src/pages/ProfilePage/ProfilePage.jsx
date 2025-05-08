import { useDispatch } from 'react-redux'
import styles from './ProfilePage.module.css'
import { logout } from '../../app/model/authSlice'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MyAnnouncements, TransactionHistory } from '../../widgets'
import { DefaultDivider } from '../../shared'

export const ProfilePage = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.panel}>
                    <a className={styles.navButton} href={'/profile/history'}>История сделок</a>
                    <a className={styles.navButton} href={'/profile/announcements'}>Мои объявления</a>
                    <a className={`${styles.navButton} ${styles.logout}`} onClick={handleLogout}>Выйти из аккаунта</a>
                </div>
            </div>
            <div className={styles.widget}>
                <Routes>
                    <Route path="" element={<Navigate to="history" replace />} />

                    <Route path={'history'} element={<TransactionHistory />} />
                    <Route path={'announcements'} element={<MyAnnouncements />} />
                </Routes>
            </div>
        </div>
    )
}