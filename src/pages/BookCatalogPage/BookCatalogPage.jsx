import styles from './BookCatalogPage.module.css'

export const BookCatalogPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.filters}>
                    filters
                </div>
                <div className={styles.bookList}>
                    books
                </div>
            </div>
        </div>
    )
}