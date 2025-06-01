import styles from './AddWindow.module.css'
import { useEffect, useState } from 'react'
import { DefaultButton, DefaultDivider } from '../../../../shared'
import { useDispatch, useSelector } from 'react-redux'
import {
    resetAddBook,
    selectAuthor,
    selectCountry,
    selectCoverUrl,
    selectDescription,
    selectGenre,
    selectLanguage,
    selectTitle,
    selectYear,
    setAuthor,
    setBookCoverUrl,
    setCountry,
    setDescription,
    setGenre,
    setLanguage,
    setTitle,
    setYear
} from '../../model/addBookSlice'
import { getGenres } from '../../../../entities/dictionaries/genres/genresSlice'
import { getCountries } from '../../../../entities/dictionaries/countries/countriesSlice'
import { addBookApi } from '../../../../shared/api/addBookApi'
import { getId } from '../../../../entities/user/model/userSlice'
import { getLanguages } from '../../../../entities/dictionaries/languages/languagesSlice'

export const AddWindow = ({ onClose, onBookAdded, editBook }) => {
    const dispatch = useDispatch()

    const genres = useSelector(getGenres)
    const countries = useSelector(getCountries)
    const languages = useSelector(getLanguages)
    const user_id = useSelector(getId)

    const [bookData, setBookData] = useState({})

    const [coverUrl, setCoverUrl] = useState('')
    const [warning, setWarning] = useState('')

    const title = useSelector(selectTitle)
    const author = useSelector(selectAuthor)
    const year = useSelector(selectYear)
    const genre = useSelector(selectGenre)
    const country = useSelector(selectCountry)
    const language = useSelector(selectLanguage)
    const coverFromStore = useSelector(selectCoverUrl)
    const description = useSelector(selectDescription)

    const addBookData = {
        user_id: user_id,
        name: title,
        author: author,
        year: year,
        genre_id: genre,
        lang_id: language,
        country_id: country,
        img_url: coverFromStore,
        description: description,
    }

    const editBookData = {
        user_id: user_id,
        name: title,
        author: author,
        year: year,
        genre_id: genre,
        lang_id: language,
        country_id: country,
        img_url: coverFromStore,
        description: description,
        id: editBook?.id // если нужно для API
    }

    const allFieldsFilled = Object.values(bookData).every(
        (value) => value !== undefined && value !== null && value !== ''
    )

    const handleCoverUrlChange = (e) => {
        setCoverUrl(e.target.value)
        dispatch(setBookCoverUrl(e.target.value))
    }

    const handleAdd = async () => {
        if (allFieldsFilled) {
            try {
                const payload = editBook ? editBookData : addBookData

                const response = editBook ? await addBookApi.editBook(payload) : await addBookApi.addBook(payload)

                if (response) {
                    console.log('👍 Книга добавлена!', response)
                    dispatch(resetAddBook())
                    onBookAdded()
                    onClose()
                } else {
                    console.log("Неизвестная ошибка добавления книги")
                }
            } catch (error) {
                console.error("Ошибка добавления книги", error)
            }
        } else {
            setWarning('Заполните все поля')
        }
    }

    useEffect(() => {
        if (editBook) {
            dispatch(setTitle(editBook.name || ''))
            dispatch(setAuthor(editBook.author || ''))
            dispatch(setYear(editBook.year ? String(editBook.year) : ''))
            dispatch(setGenre(editBook.genre_id || ''))
            dispatch(setCountry(editBook.country_id || ''))
            dispatch(setLanguage(editBook.lang_id || ''))
            dispatch(setBookCoverUrl(editBook.img_url || ''))
            dispatch(setDescription(editBook.description || ''))

            setCoverUrl(editBook.img_url || '')

            setBookData({
                user_id: user_id,
                name: editBook.name || '',
                author: editBook.author || '',
                year: editBook.year || '',
                genre_id: editBook.genre_id || '',
                lang_id: editBook.lang_id || '',
                country_id: editBook.country_id || '',
                img_url: editBook.img_url || '',
                description: editBook.description || ''
            })
        } else {
            dispatch(resetAddBook())
            setCoverUrl('')
            setBookData({
                user_id: user_id,
                name: '',
                author: '',
                year: '',
                genre_id: 2,
                lang_id: '',
                country_id: '',
                img_url: '',
                description: ''
            })
        }
    }, [])

    useEffect(() => {
        if (!editBook) {
            setBookData(addBookData)
        } else {
            setBookData(editBookData)
        }
    }, [title, author, year, genre, country, language, coverFromStore, description])

    return (
        <div className={styles.wrapper}>
            {coverUrl &&
                <div className={styles.coverDiv}>
                    <img className={styles.cover} src={coverUrl} alt="Обложка книги" />
                </div>
            }
            <div className={styles.descriptionDiv}>
                <div className={styles.descBlock}>
                    <input
                        className={`${styles.author} ${styles.input}`}
                        placeholder='Автор'
                        maxLength={48}
                        onChange={(e) => dispatch(setAuthor(e.target.value))}
                        value={author}
                    />
                    <input
                        className={`${styles.title} ${styles.input}`}
                        placeholder='Название книги'
                        maxLength={48}
                        onChange={(e) => dispatch(setTitle(e.target.value))}
                        value={title}
                    />
                    <input
                        className={`${styles.d} ${styles.input}`}
                        placeholder='Год выпуска'
                        maxLength={4}
                        onChange={(e) => {
                            const onlyDigits = e.target.value.replace(/\D/g, '')
                            dispatch(setYear(onlyDigits))
                        }}
                        value={year}
                    />
                    <input
                        className={`${styles.description} ${styles.input}`}
                        placeholder='Описание'
                        maxLength={512}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                        value={description}
                    />

                    <DefaultDivider />

                    <select
                        className={`${styles.genre} ${styles.input}`}
                        value={genre}
                        onChange={(e) => dispatch(setGenre(e.target.value))}
                    >
                        <option value="" >Выберите жанр</option>
                        {genres.map((g) => (
                            <option key={g.id} value={g.id}>{g.name}</option>
                        ))}
                    </select>

                    <select
                        className={`${styles.input} ${styles.country}`}
                        value={country}
                        onChange={(e) => dispatch(setCountry(e.target.value))}
                    >
                        <option value="" >Выберите страну</option>
                        {countries.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>

                    <select
                        className={`${styles.input} ${styles.language}`}
                        value={language}
                        onChange={(e) => dispatch(setLanguage(e.target.value))}
                    >
                        <option value="" >Выберите язык</option>
                        {languages.map((l) => (
                            <option key={l.id} value={l.id}>{l.name}</option>
                        ))}
                    </select>

                    <DefaultDivider />

                    <input
                        className={`${styles.input} ${styles.cover_url}`}
                        placeholder='Ссылка на фото обложки книги'
                        maxLength={512}
                        onChange={handleCoverUrlChange}
                        value={coverFromStore}
                    />

                    {warning && <span className={styles.warning}>{warning}</span>}
                </div>
                <div className={styles.buttonsDiv}>
                    <DefaultButton
                        title={editBook ? 'Сохранить' : 'Добавить'}
                        color={"#fa0"}
                        brightText={false}
                        onClick={handleAdd}
                    />
                    <DefaultButton title={'Отменить'} color={"#d33"} onClick={onClose} />
                </div>
            </div>
        </div>
    )
}
