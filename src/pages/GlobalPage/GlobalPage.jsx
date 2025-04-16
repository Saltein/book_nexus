import styles from './GlobalPage.module.css'
import { Footer, Header } from '../../widgets'
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { BookCatalogPage } from '../BookCatalogPage/BookCatalogPage';
import { BackToTopButton } from '../../shared';

export const GlobalPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <header>
                <Header />
            </header>
            <div className={styles.margin}/>
            <Routes>
                <Route path='/main' element={<MainPage />} />
                <Route path='/' element={<MainPage />} />

                <Route path='/catalog' element={<BookCatalogPage />} />
            </Routes>
            <BackToTopButton />
            <Footer />
        </div>
    )
}