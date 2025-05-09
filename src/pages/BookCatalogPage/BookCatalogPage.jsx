import { BookCatalogBlock } from '../../widgets/BookCatalogBlock/BookCatalogBlock'
import { FiltersBlock } from '../../widgets/FiltersBlock/FiltersBlock'
import styles from './BookCatalogPage.module.css'

export const BookCatalogPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.filters}>
                    <FiltersBlock />
                </div>
                <div className={styles.bookList}>
                    <BookCatalogBlock />
                </div>
            </div>
        </div>
    )
}