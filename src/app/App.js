import { useDispatch, useSelector } from 'react-redux';
import { GlobalPage } from '../pages';
import styles from './App.module.css'
import { dictionaryApi } from '../shared/api/dictionaryApi';
import { setGenres } from '../entities/dictionaries/genres/genresSlice';
import { setCountries } from '../entities/dictionaries/countries/countriesSlice';
import { setDelivery } from '../entities/dictionaries/delivery/deliverySlice';
import { useEffect } from 'react';
import { setFilterLists } from '../widgets/BookCatalogBlock/model/bookCatalogSlice';
import { setLanguages } from '../entities/dictionaries/languages/languagesSlice';

function App() {

  const dispatch = useDispatch()


  const getDictionaries = async () => {
    try {
      const genres = await dictionaryApi.getGenres()
      const countries = await dictionaryApi.getCountries()
      const delivery = await dictionaryApi.getDelivery()
      const languages = await dictionaryApi.getLanguages()

      if (genres) {
        dispatch(setGenres(genres))
      }
      if (countries) {
        dispatch(setCountries(countries))
      }
      if (delivery) {
        dispatch(setDelivery(delivery))
      }
      if (languages) {
        dispatch(setLanguages(languages))
      }
      if (genres && countries && languages) {
        dispatch(setFilterLists(
          {
            genre: genres,
            country: countries,
            language: languages,
          }
        ))
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDictionaries()
  }, [])

  return (
    <div className={styles.wrapper}>
      <GlobalPage />
    </div>
  );
}

export default App;
