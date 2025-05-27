import { useDispatch } from 'react-redux';
import { GlobalPage } from '../pages';
import styles from './App.module.css'
import { dictionaryApi } from '../shared/api/dictionaryApi';
import { setGenres } from '../entities/dictionaries/genres/genresSlice';
import { setCountries } from '../entities/dictionaries/countries/countriesSlice';
import { setDelivery } from '../entities/dictionaries/delivery/deliverySlice';
import { useEffect } from 'react';
import { setFilterLists } from '../widgets/BookCatalogBlock/model/bookCatalogSlice';

function App() {

  const dispatch = useDispatch()

  const getDictionaries = async () => {
    try {
      const genres = await dictionaryApi.getGenres()
      const countries = await dictionaryApi.getCountries()
      const delivery = await dictionaryApi.getDelivery()

      if (genres) {
        dispatch(setGenres(genres))
      }
      if (countries) {
        dispatch(setCountries(countries))
      }
      if (delivery) {
        dispatch(setDelivery(delivery))
      }
      if (genres && countries && delivery) {
        dispatch(setFilterLists(
          {
            genre: genres,
            country: countries,
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
