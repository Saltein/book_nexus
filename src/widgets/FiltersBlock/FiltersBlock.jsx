import { useEffect, useState } from 'react'
import { DefaultButton, DefaultDivider, FilterCBForm, FiltersDDList, FilterSlidebar } from '../../shared/ui'
import styles from './FiltersBlock.module.css'
import filterIcon from './assets/filter.svg'

const genreOptionsList = [
    {
        value: "all",
        title: "Все жанры",
    },
    {
        value: "fantastic",
        title: "Фантастика",
    },
    {
        value: "detective",
        title: "Детектив",
    },
    {
        value: "novel",
        title: "Роман",
    },
    {
        value: "fantasy",
        title: "Фэнтези",
    },
    {
        value: "scientific",
        title: "Научная литература",
    },
    {
        value: "biography",
        title: "Биография",
    },
    {
        value: "fairytale",
        title: "Сказка",
    },
]

const countryOptionsList = [
    {
        value: 'all',
        title: 'Все страны',
    },
    {
        value: 'russia',
        title: 'Россия',
    },
    {
        value: 'usa',
        title: 'США',
    },
    {
        value: 'greatbritain',
        title: 'Великобритания',
    },
    {
        value: 'france',
        title: 'Франция',
    },
    {
        value: 'japan',
        title: 'Япония',
    },
]

const langOptionsList = [
    {
        value: 'ru',
        title: 'Русский',
    },
    {
        value: 'en',
        title: 'Английский',
    },
    {
        value: 'other',
        title: 'Другие',
    },
]

export const FiltersBlock = (props) => {
    var currentYear = new Date().getFullYear()

    const [genre, setGenre] = useState('')
    const [country, setCountry] = useState('')
    const [year, setYear] = useState([])
    const [lang, setLang] = useState([false, false, false])

    useEffect(() => {
        console.log("Состояние genre изменилось на", genre)
    }, [genre])
    useEffect(() => {
        console.log("Состояние country изменилось на", country)
    }, [country])
    useEffect(() => {
        console.log("Состояние year изменилось на", year)
    }, [year])
    useEffect(() => {
        console.log("Состояние lang изменилось на", lang)
    }, [lang])

    const handleGenreChange = (selectedGenre) => {
        setGenre(selectedGenre)
    }
    const handleCountryChange = (selectedCountry) => {
        setCountry(selectedCountry)
    }
    const handleYearChange = (selectedYear) => {
        setYear(selectedYear)
    }
    const handleLangChange = ({ value, index }) => {
        setLang(prevLang => {
            const newLang = [...prevLang]; // Создаем копию массива
            newLang[index] = !newLang[index]; // Инвертируем значение по индексу
            return newLang;
        });
    }

    const handleSubmit = () => {

    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.titleBlock}>
                <img className={styles.filterImg} src={filterIcon} />
                <h5 className={styles.title}>
                    Фильтры
                </h5>
            </div>

            <div className={styles.filtersBlock}>
                <FiltersDDList title={'Жанр'} optionsList={genreOptionsList} onChange={handleGenreChange} />
                <DefaultDivider />
                <FiltersDDList title={'Страна'} optionsList={countryOptionsList} onChange={handleCountryChange} />
                <DefaultDivider />
                <FilterSlidebar title={'Год выпуска'} min={1900} max={currentYear} step={10} value={1990} onChange={handleYearChange} />
                <DefaultDivider />
                <FilterCBForm title={'Язык'} optionsList={langOptionsList} onChange={handleLangChange} />
            </div>
            <DefaultDivider />
            <DefaultButton title={'Применить фильтры'} onClick={handleSubmit} />

        </div>
    )
}