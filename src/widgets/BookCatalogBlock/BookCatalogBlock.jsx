import { useEffect, useMemo, useState } from 'react';
import { BookCard } from '../../entities/ui/BookCard/BookCard'
import styles from './BookCatalogBlock.module.css'
import { Pagination } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getFavorites, getFilteredBooks, setBooks, setFavorites } from './model/bookCatalogSlice';
import { bookCatalogApi } from '../../shared/api/bookCatalogApi';
import { favoritesApi } from '../../shared/api/favoritesApi';
import { getId } from '../../entities/user/model/userSlice';

export const BookCatalogBlock = ({ isAdmin = false, isFavorites = false }) => {
    const dispatch = useDispatch()
    const books = useSelector(getBooks)
    const filteredBooks = useSelector(getFilteredBooks)
    const favorites = useSelector(getFavorites)
    const userId = useSelector(getId)

    let booksData = isAdmin ? books : filteredBooks
    if (isFavorites) {
        booksData = favorites
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12) // Количество книг на странице

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        return booksData.slice(indexOfFirstItem, indexOfLastItem)
    }, [currentPage, itemsPerPage, booksData]);

    const totalPages = Math.ceil(booksData.length / itemsPerPage)

    const getBooksFunc = async () => {
        try {
            const response = isFavorites ? await favoritesApi.getMy(userId) : await bookCatalogApi.get()
            if (response) {
                if (isFavorites) {
                    dispatch(setFavorites(response))
                } else {
                    dispatch(setBooks(response))
                }
            } else {
                console.log("Неизвестная ошибка получения книг")
            }
        } catch (error) {
            console.log("Ошибка получения книг", error)
        }
    }

    useEffect(() => {
        getBooksFunc()
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [booksData])

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookList}>
                {currentItems.map((book, index) => (
                    <div key={`${book.id}-${index}`}>
                        <BookCard bookData={book} isAdmin={isAdmin} />
                    </div>
                ))}
            </div>

            {booksData.length > 0 &&
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => { setCurrentPage(page) }}
                />}
        </div>
    );
};