import styles from './AddWindow.module.css'
import { useState } from 'react'
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

export const AddWindow = ({ onClose, onBookAdded }) => {
    const dispatch = useDispatch()
    const genres = useSelector(getGenres)
    const countries = useSelector(getCountries)

    const addBookData = {
        user_id: useSelector(getId),
        name: useSelector(selectTitle),
        author: useSelector(selectAuthor),
        year: useSelector(selectYear),
        genre_id: useSelector(selectGenre),
        lang_id: useSelector(selectLanguage),
        country_id: useSelector(selectCountry),
        img_url: useSelector(selectCoverUrl),
        description: useSelector(selectDescription),
    }
    const allFieldsFilled = Object.values(addBookData).every(value => value !== undefined && value !== null && value !== '');

    const [coverUrl, setCoverUrl] = useState('')
    const [warning, setWarning] = useState('')

    const handleCoverUrlChange = (e) => {
        setCoverUrl(e.target.value)
        dispatch(setBookCoverUrl(e.target.value))
    }

    const handleAdd = async () => {
        if (allFieldsFilled) {
            console.log(addBookData)
            try {
                const response = await addBookApi.addBook(addBookData)
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

    return (
        <div className={styles.wrapper}>
            {coverUrl &&
                <div className={styles.coverDiv}>
                    <img className={styles.cover} src={coverUrl} />
                </div>
            }
            <div className={styles.descriptionDiv}>
                <div className={styles.descBlock}>
                    <input className={`${styles.author} ${styles.input}`} placeholder='Автор' maxLength={48}
                        onChange={(e) => dispatch(setAuthor(e.target.value))}
                    />
                    <input className={`${styles.title} ${styles.input}`} placeholder='Название книги' maxLength={48}
                        onChange={(e) => dispatch(setTitle(e.target.value))}
                    />
                    <input className={`${styles.d} ${styles.input}`} placeholder='Год выпуска' maxLength={4}
                        onChange={(e) => dispatch(setYear(e.target.value))}
                    />
                    <input className={`${styles.description} ${styles.input}`} placeholder='Описание' maxLength={512}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                    />

                    <DefaultDivider />

                    <select className={`${styles.genre} ${styles.input}`} defaultValue="" onChange={(e) => dispatch(setGenre(e.target.value))}>
                        <option value="" disabled>Выберите жанр</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>

                    <select className={`${styles.input} ${styles.country}`} defaultValue="" onChange={(e) => dispatch(setCountry(e.target.value))}>
                        <option value="" disabled>Выберите страну</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))}
                    </select>

                    <input className={`${styles.input} ${styles.language}`} placeholder='Язык книги' maxLength={48}
                        onChange={(e) => dispatch(setLanguage(1))} // TO DO e.target.value, но id TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO
                    />

                    <DefaultDivider />

                    <input
                        className={`${styles.input} ${styles.cover_url}`}
                        placeholder='Ссылка на фото обложки книги' maxLength={512}
                        onChange={handleCoverUrlChange}
                    />

                    {warning && <span className={styles.warning}>{warning}</span>}
                </div>
                <div className={styles.buttonsDiv}>
                    <DefaultButton title={'Добавить'} color={"#fa0"} brightText={false} onClick={handleAdd} />
                    <DefaultButton title={'Отменить'} color={"#d33"} onClick={handleAdd} />
                </div>
            </div>
        </div>
    )
}