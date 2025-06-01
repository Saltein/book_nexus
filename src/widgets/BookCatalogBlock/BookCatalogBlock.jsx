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
    console.log('books', books)
    const filteredBooks = useSelector(getFilteredBooks)
    const rawFavorites = useSelector(getFavorites)
    const userId = useSelector(getId)

    const favorites = Array.isArray(rawFavorites) ? rawFavorites : []

    const [booksData, setBooksData] = useState([])
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
            if (isFavorites) {
                const response = await favoritesApi.getMy(userId);
                // пусть response точно будет массивом; если нет — ставим пустой
                const arr = Array.isArray(response) ? response : [];
                dispatch(setFavorites(arr));
            } else {
                const response = await bookCatalogApi.get();
                // ожидаем, что response — массив книг в нужном формате
                dispatch(setBooks(response));
            }
        } catch (error) {
            console.error('Ошибка получения книг', error);
        }
    }

    useEffect(() => {
        getBooksFunc()
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [booksData])

    useEffect(() => {
        if (isFavorites) {
            setBooksData(favorites)
        } else if (isAdmin) {
            setBooksData(books)
        } else {
            setBooksData(filteredBooks)
        }
    }, [favorites, books, filteredBooks, isFavorites, isAdmin])

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookList}>
                {currentItems.map((book, index) => (
                    <div key={`${book.id}-${index}`}>
                        <BookCard bookData={book} isAdmin={isAdmin} isFavorites={isFavorites} onBookAdded={getBooksFunc} />
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