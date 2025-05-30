import { useEffect, useMemo, useState } from 'react';
import { UserRow } from '../../entities/user/ui/UserRow/UserRow'
import { Pagination, SearchBar } from '../../shared'
import styles from './AdminUsers.module.css'
import { userApi } from '../../shared/api/userApi';

const USERS_PER_PAGE = 10

export const AdminUsers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [users, setUsers] = useState([])

    const totalPages = Math.ceil(users.length / USERS_PER_PAGE)

    const paginatedUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * USERS_PER_PAGE
        const endIndex = startIndex + USERS_PER_PAGE
        return users.slice(startIndex, endIndex)
    }, [currentPage, users])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const fetchUsers = async () => {
        const response = await userApi.getAll()
        setUsers(response)
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <div className={styles.wrapper}>
            <SearchBar />
            <div className={styles.users}>
                {paginatedUsers.map((user, index) => (
                    <UserRow key={`${index}-${user.id}`} userData={user} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                maxPageButtons={5}
            />
        </div>
    );
};