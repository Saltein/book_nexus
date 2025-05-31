import styles from './BookCard.module.css'
import { DefaultButton, DefaultDivider, ModalWindow } from '../../../shared/ui'
import { useState } from 'react'
import { BookCardModal } from './BookCardModal/BookCardModal'
import heartIcon from './assets/heart.svg'
import heartFillIcon from './assets/heart_fill.svg'
import { useSelector } from 'react-redux'
import { favoritesApi } from '../../../shared/api/favoritesApi'
import { getId } from '../../user/model/userSlice'

export const BookCard = ({ bookData, isMyBook = false, isAdmin = false }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const userId = useSelector(getId)

    const onClose = () => {
        setIsOpen(false)
    }

    const handleFavorite = async () => {
        if (!isFavorite) {
            try {
                await favoritesApi.set(userId, bookData.id)
                setIsFavorite(true)
            } catch (error) {
                console.log('Set as favorite error:', error)
                if (error && error.message.includes('favorites_user_id_book_id_key')) {
                    setIsFavorite(true)
                }
            }
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }

    return (
        <div className={styles.wrapper_of_wrapper} onClick={() => setIsOpen(true)}>
            <div className={styles.wrapper}>

                <div className={styles.coverWrapper}>
                    {!isMyBook && !isAdmin &&
                        <div className={styles.favorite}
                            onClick={(event) => {
                                event.stopPropagation()
                                handleFavorite()
                            }}
                        >
                            {showAlert && <span className={styles.alert}>Удалить из избранного можно во вкладке профиль</span>}
                            <img className={styles.heartIcon} src={isFavorite ? heartFillIcon : heartIcon} />
                        </div>
                    }
                    <img
                        className={styles.cover}
                        src={bookData.img_url}
                        onError={(e) => {
                            e.target.onerror = null // предотвращает бесконечный цикл в случае, если заглушка тоже не загрузится
                            e.target.src = 'https://imgholder.ru/400x700/8493a8/adb9ca&text=Фото+обложки&font=kelson' // путь к заглушке
                        }}
                        alt={bookData.name}
                    />
                </div>

                <div className={styles.bookInfo}>
                    <div className={styles.title_author}>
                        <h3 className={styles.title}>{bookData.name}</h3>
                        <p className={styles.author}>{bookData.author}</p>
                    </div>
                    <span className={styles.year}>{bookData.year}</span>
                    <DefaultDivider />
                    <span className={styles.genre}>{bookData.Genre.name}</span>
                </div>

                {!isMyBook && !isAdmin &&
                    <div className={styles.buttonCon}>
                        <DefaultButton title={'Забронировать'} />
                    </div>
                }

                {isOpen ?
                    <ModalWindow onClose={onClose}>
                        <BookCardModal bookData={bookData} isMyBook={isMyBook} isAdmin={isAdmin} isInCatalog={!isMyBook && !isAdmin} />
                    </ModalWindow>
                    : <></>
                }
            </div>
        </div>
    )
}