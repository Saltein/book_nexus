import styles from './ModeratorPage.module.css'
import { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { AdminBooks, AdminUsers } from '../../widgets'
import { AdminReports } from '../../widgets/AdminReports/AdminReports'
import { useSelector } from 'react-redux'
import { getRole } from '../../entities/user/model/userSlice'

export const ModeratorPage = () => {

    const [currentPage, setCurrentPage] = useState(0)

    const userRole = useSelector(getRole)

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.panel}>
                    <Link
                        className={`${styles.navButton} ${currentPage === 0 ? styles.current : ''}`}
                        to={'/moderation/books'}
                        onClick={() => setCurrentPage(0)}
                    >Объявления</Link>
                    {userRole === 'admin' &&
                        <Link
                            className={`${styles.navButton} ${currentPage === 1 ? styles.current : ''}`}
                            to={'/moderation/users'}
                            onClick={() => setCurrentPage(1)}
                        >Пользователи</Link>
                    }
                    <Link
                        className={`${styles.navButton} ${currentPage === 2 ? styles.current : ''}`}
                        to={'/moderation/reports'}
                        onClick={() => setCurrentPage(2)}
                    >Жалобы</Link>
                </div>
            </div>
            <div className={styles.widget}>
                <Routes>
                    <Route path="" element={<Navigate to="books" replace />} />

                    <Route path={'books'} element={<AdminBooks />} />
                    <Route path={'users'} element={<AdminUsers />} />
                    <Route path={'reports'} element={<AdminReports />} />
                </Routes>
            </div>
        </div>
    )
}