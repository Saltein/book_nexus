import { useMemo, useState } from 'react';
import { BookCard } from '../../entities/ui/BookCard/BookCard'
import styles from './BookCatalogBlock.module.css'

import book1 from './tempAssets/book1.jpg';
import book2 from './tempAssets/book2.jpg';
import book3 from './tempAssets/book3.jpg';
import book4 from './tempAssets/book4.jpg';

const data = [
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
    {
        id: 1,
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        bookYear: '1949',
        bookGenre: 'Фантастика',
    },
    {
        id: 2,
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        bookYear: '1833',
        bookGenre: 'Роман',
    },
    {
        id: 3,
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        bookYear: '1866',
        bookGenre: 'Роман',
    },
    {
        id: 4,
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        bookYear: '1943',
        bookGenre: 'Cказка',
    },
]

export const BookCatalogBlock = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12); // Количество книг на странице

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return data.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Функция для генерации списка номеров страниц с ограничением количества кнопок
    const getPageNumbers = () => {
        const maxPageButtons = 5; // Максимальное количество видимых кнопок
        let pages = [];
        const halfRange = Math.floor(maxPageButtons / 2);
        let startPage = Math.max(1, currentPage - halfRange);
        let endPage = startPage + maxPageButtons - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPageButtons + 1);
        }

        // Если начало не 1, показываем первую страницу и многоточие, если нужно
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push("...");
            }
        }

        // Основной диапазон страниц
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Если конец не равен totalPages, добавляем многоточие и последнюю страницу
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push("...");
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    const paginate = (pageNumber) => {
        if (pageNumber === '...' || pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookList}>
                {currentItems.map((book, index) => (
                    <div key={`${book.id}-${index}`}>
                        <BookCard {...book} />
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                <div className={styles.paginationButtons}>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;
                    </button>

                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(page)}
                            className={currentPage === page ? styles.active : ''}
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    );
};