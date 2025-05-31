import { BookCatalogBlock } from '../BookCatalogBlock/BookCatalogBlock'
import styles from './Favorites.module.css'

export const Favorites = () => {
    return (
        <div className={styles.wrapper}>
            <BookCatalogBlock isFavorites />
        </div>
    )
}