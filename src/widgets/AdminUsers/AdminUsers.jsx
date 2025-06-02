import { useEffect, useMemo, useState } from 'react';
import { UserRow } from '../../entities/user/ui/UserRow/UserRow'
import { Pagination, SearchBar } from '../../shared'
import styles from './AdminUsers.module.css'
import { userApi } from '../../shared/api/userApi';
import { getSearchText } from '../../features/search/model/searchSlice';
import { useSelector } from 'react-redux';

const USERS_PER_PAGE = 10

export const AdminUsers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [users, setUsers] = useState([])

    const searchText = useSelector(getSearchText)

    const filteredUsers = useMemo(() => {
        if (!searchText.trim()) return users

        const lowerCaseSearch = searchText.toLowerCase()

        return users.filter(user => {
            const name = user.UserProfile?.name?.toLowerCase() || ''
            const email = user.email?.toLowerCase() || ''
            const phone = user.UserProfile?.phone || ''
            const city = user.UserProfile?.city?.toLowerCase() || ''

            return (
                name.includes(lowerCaseSearch) ||
                email.includes(lowerCaseSearch) ||
                phone.includes(lowerCaseSearch) ||
                city.includes(lowerCaseSearch)
            )
        })
    }, [searchText, users])

    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE)

    const paginatedUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * USERS_PER_PAGE
        const endIndex = startIndex + USERS_PER_PAGE
        return filteredUsers.slice(startIndex, endIndex)
    }, [currentPage, filteredUsers])

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