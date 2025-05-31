import { useDispatch } from 'react-redux'
import styles from './ProfilePage.module.css'
import { logout } from '../../app/model/authSlice'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { MyAnnouncements, ExchangesHistory, Favorites } from '../../widgets'
import { useState } from 'react'

export const ProfilePage = () => {

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(0)

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logout())
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.panel}>
                    <Link
                        className={`${styles.navButton} ${currentPage === 0 ? styles.current : ''}`}
                        to={'/profile/history'}
                        onClick={() => setCurrentPage(0)}
                    >История обменов</Link>
                    <Link
                        className={`${styles.navButton} ${currentPage === 1 ? styles.current : ''}`}
                        to={'/profile/announcements'}
                        onClick={() => setCurrentPage(1)}
                    >Мои объявления</Link>
                    <Link
                        className={`${styles.navButton} ${styles.favorites} ${currentPage === 2 ? styles.current : ''}`}
                        to={'/profile/favorites'}
                        onClick={() => setCurrentPage(2)}
                    >Избранное</Link>
                    <a className={`${styles.navButton} ${styles.logout}`} onClick={handleLogout}>Выйти из аккаунта</a>
                </div>
            </div>
            <div className={styles.widget}>
                <Routes>
                    <Route path="" element={<Navigate to="history" replace />} />

                    <Route path={'history'} element={<ExchangesHistory />} />
                    <Route path={'announcements'} element={<MyAnnouncements />} />
                    <Route path={'favorites'} element={<Favorites />} />
                </Routes>
            </div>
        </div>
    )
}