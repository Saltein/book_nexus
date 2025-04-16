import { useMemo, useState } from 'react';
import { BookCard } from '../../entities/ui/BookCard/BookCard'
import styles from './BookCatalogBlock.module.css'

import book1 from './tempAssets/book1.jpg';
import book2 from './tempAssets/book2.jpg';
import book3 from './tempAssets/book3.jpg';
import book4 from './tempAssets/book4.jpg';
import { Pagination } from '../../shared';

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

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookList}>
                {currentItems.map((book, index) => (
                    <div key={`${book.id}-${index}`}>
                        <BookCard {...book} />
                    </div>
                ))}
            </div>

            <Pagination
                currentPage={currentPage} totalPages={totalPages}
                onPageChange={(page) => { setCurrentPage(page) }}
            />
        </div>
    );
};