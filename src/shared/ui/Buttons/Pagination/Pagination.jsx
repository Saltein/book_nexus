import React, { useMemo } from 'react';
import styles from './Pagination.module.css'; // Создайте или скопируйте стили для пагинации

export const Pagination = ({ currentPage, totalPages, onPageChange, maxPageButtons = 5 }) => {
    // Функция для генерации списка номеров страниц с ограничением количества кнопок
    const getPageNumbers = () => {
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

    const pageNumbers = useMemo(() => getPageNumbers(), [currentPage, totalPages, maxPageButtons]);

    const paginate = (pageNumber) => {
        if (pageNumber === '...' || pageNumber < 1 || pageNumber > totalPages) return;
        onPageChange(pageNumber);
    };

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationButtons}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &#8592;
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
                    &#8594;
                </button>
            </div>
        </div>
    );
};
