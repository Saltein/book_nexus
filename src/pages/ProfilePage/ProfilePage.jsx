import { useDispatch } from 'react-redux'
import styles from './ProfilePage.module.css'
import { logout } from '../../app/model/authSlice'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { MyAnnouncements, ExchangesHistory } from '../../widgets'

export const ProfilePage = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logout())
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.panel}>
                    <Link className={styles.navButton} to={'/profile/history'}>История обменов</Link>
                    <Link className={styles.navButton} to={'/profile/announcements'}>Мои объявления</Link>
                    <a className={`${styles.navButton} ${styles.logout}`} onClick={handleLogout}>Выйти из аккаунта</a>
                </div>
            </div>
            <div className={styles.widget}>
                <Routes>
                    <Route path="" element={<Navigate to="history" replace />} />

                    <Route path={'history'} element={<ExchangesHistory />} />
                    <Route path={'announcements'} element={<MyAnnouncements />} />
                </Routes>
            </div>
        </div>
    )
}