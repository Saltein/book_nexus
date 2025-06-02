import { useEffect, useState } from 'react'
import { DefaultButton } from '../../../../shared/ui/Buttons/DefaultButton/DefaultButton'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { setSearchText } from '../../model/searchSlice'

export const SearchBar = () => {
    const [searchTextL, setSearchTextL] = useState('')

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setSearchTextL(e.target.value)
    }

    const handleDispatch = () => {
        dispatch(setSearchText(searchTextL))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleDispatch()
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setSearchText(''))
        }
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск"
                value={searchTextL}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <DefaultButton title="Найти" height="40px" onClick={handleDispatch} />
        </div>
    )
}
