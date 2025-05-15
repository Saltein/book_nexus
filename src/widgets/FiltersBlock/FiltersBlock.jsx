import { DefaultDivider, FilterCBForm, FiltersDDList, FilterSlidebar } from '../../shared/ui'
import styles from './FiltersBlock.module.css'
import filterIcon from './assets/filter.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
    setFilterGenre,
    setFilterCountry,
    setFilterYearRange,
    setFilterLang,
} from '../BookCatalogBlock/model/bookCatalogSlice'

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
    const dispatch = useDispatch()
    const filters = useSelector(state => state.bookCatalog.filters)
    // const filterLists = useSelector TO DO

    var currentYear = new Date().getFullYear()

    const handleGenreChange = (selectedGenre) => {
        dispatch(setFilterGenre(selectedGenre))
    }
    const handleCountryChange = (selectedCountry) => {
        dispatch(setFilterCountry(selectedCountry))
    }
    const handleYearChange = (selectedYear) => {
        dispatch(setFilterYearRange(selectedYear))
    }
    const handleLangChange = ({ value, index }) => {
        dispatch(setFilterLang(
            filters.lang.map((flag, i) => i === index ? !flag : flag)
        ))
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
                <FilterSlidebar title={'Год выпуска'} min={1000} max={currentYear} step={100} value={1990} onChange={handleYearChange} />
                <DefaultDivider />
                <FilterCBForm title={'Язык'} optionsList={langOptionsList} onChange={handleLangChange} />
            </div>
        </div>
    )
}