import styles from './GlobalPage.module.css'
import { Header } from '../../widgets'
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';

export const GlobalPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Routes>
                <Route path='/main' element={<MainPage />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </div>
    )
}