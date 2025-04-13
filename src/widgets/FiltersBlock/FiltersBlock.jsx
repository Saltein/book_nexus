import { DefaultButton } from '../../shared/ui/Buttons/DefaultButton/DefaultButton'
import { FilterCBForm } from '../../shared/ui/CheckboxForms/FilterCBForms/FilterCBForm'
import { FiltersDDList } from '../../shared/ui/DropdownLists/FiltersDDList/FiltersDDList'
import { FilterSlidebar } from '../../shared/ui/Slidebars/FilterSlidebar/FilterSlidebar'
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

    return (
        <div className={styles.wrapper}>

            <div className={styles.titleBlock}>
                <img className={styles.filterImg} src={filterIcon} />
                <h5 className={styles.title}>
                    Фильтры
                </h5>
            </div>

            <div className={styles.filtersBlock}>
                <FiltersDDList title={'Жанр'} optionsList={genreOptionsList} />
                <FiltersDDList title={'Страна'} optionsList={countryOptionsList} />
                <FilterSlidebar title={'Год выпуска'} min={1900} max={currentYear} step={10} value={1990} />
                <FilterCBForm title={'Язык'} optionsList={langOptionsList}/>
            </div>

            <DefaultButton title={'Применить фильтры'} />

        </div>
    )
}