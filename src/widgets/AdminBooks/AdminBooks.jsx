import { SearchBar } from '../../shared'
import { BookCatalogBlock } from '../BookCatalogBlock/BookCatalogBlock'
import styles from './AdminBooks.module.css'

export const AdminBooks = () => {
    return (
        <div className={styles.wrapper}>
            <BookCatalogBlock isAdmin />
        </div>
    )
}