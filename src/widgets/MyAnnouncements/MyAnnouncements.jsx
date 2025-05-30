import styles from './MyAnnouncements.module.css'
import { BookCard } from '../../entities'
import { ReactComponent as AddIcon } from './assets/add.svg'
import { ModalWindow } from '../../shared'
import { useEffect, useState } from 'react'
import { AddWindow } from '../../features/book/ui/AddWindow/AddWindow'
import { useDispatch, useSelector } from 'react-redux'
import { resetAddBook } from '../../features/book/model/addBookSlice'
import { bookCatalogApi } from '../../shared/api/bookCatalogApi'
import { getId } from '../../entities/user/model/userSlice'

export const MyAnnouncements = () => {
    const dispatch = useDispatch()
    const userId = useSelector(getId)

    const [isOpen, setIsOpen] = useState(false)
    const [books, setBooks] = useState([])

    const handleClose = () => {
        setIsOpen(false)
        dispatch(resetAddBook())
    }

    const handleAddBook = () => {
        setIsOpen(true)
    }

    const getBooksFunc = async () => {
        try {
            const response = await bookCatalogApi.getMy(userId)
            if (response) {
                setBooks(response)
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

    return (
        <div className={styles.wrapper}>
            <div className={styles.addBook} onClick={handleAddBook}>
                <AddIcon className={styles.addIcon} />
            </div>
            
            {books.reverse().map((book, index) => (
                <div key={`${book.id}-${index}`}>
                    <BookCard
                        bookData={book}
                        isMyBook
                    />
                </div>
            ))}

            {isOpen &&
                <ModalWindow onClose={handleClose}>
                    <AddWindow onClose={handleClose} onBookAdded={getBooksFunc} />
                </ModalWindow>
            }
        </div>
    )
}