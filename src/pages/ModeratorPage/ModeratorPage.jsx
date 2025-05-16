import styles from './ModeratorPage.module.css'
import { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { AdminBooks, AdminUsers } from '../../widgets'

export const ModeratorPage = () => {

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.panel}>
                    <Link
                        className={`${styles.navButton} ${currentPage === 1 ? styles.current : ''}`}
                        to={'/moderation/books'}
                        onClick={() => setCurrentPage(1)}
                    >Объявления</Link>
                    <Link
                        className={`${styles.navButton} ${currentPage === 0 ? styles.current : ''}`}
                        to={'/moderation/users'}
                        onClick={() => setCurrentPage(0)}
                    >Пользователи</Link>
                </div>
            </div>
            <div className={styles.widget}>
                <Routes>
                    <Route path="" element={<Navigate to="books" replace />} />

                    <Route path={'books'} element={<AdminBooks />} />
                    <Route path={'users'} element={<AdminUsers />} />
                </Routes>
            </div>
        </div>
    )
}