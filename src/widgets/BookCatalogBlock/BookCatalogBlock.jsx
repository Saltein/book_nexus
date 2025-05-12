import { useEffect, useMemo, useState } from 'react';
import { BookCard } from '../../entities/ui/BookCard/BookCard'
import styles from './BookCatalogBlock.module.css'
import { Pagination } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredBooks, setBooks } from './model/bookCatalogSlice';
import { bookCatalogApi } from '../../shared/api/bookCatalogApi';

export const BookCatalogBlock = () => {
    const dispatch = useDispatch()
    const booksData = useSelector(getFilteredBooks);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12); // Количество книг на странице

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return booksData.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, itemsPerPage, booksData]);

    const totalPages = Math.ceil(booksData.length / itemsPerPage);

    const getBooksFunc = async () => {
        try {
            const response = await bookCatalogApi.get()
            if (response) {
                dispatch(setBooks(response))
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
        setCurrentPage(1);
    }, [booksData]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookList}>
                {currentItems.map((book, index) => (
                    <div key={`${book.id}-${index}`}>
                        <BookCard img_url={book.img_url} name={book.name} author={book.author} year={book.year} Genre={book.Genre} />
                    </div>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => { setCurrentPage(page) }}
            />
        </div>
    );
};