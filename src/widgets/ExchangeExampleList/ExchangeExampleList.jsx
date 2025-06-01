import styles from './ExchangeExampleList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ExchangeExample } from '../../entities'
import { exchangeExamplesApi } from '../../shared/api/exchangeExamplesApi';
import { getExamples, setExamples } from './model/examplesSlice';
import { useEffect } from 'react';

export const ExchangeExampleList = () => {

    const dispatch = useDispatch()
    const examplesData = useSelector(getExamples)

    const getExamplesFunc = async () => {
        try {
            const response = await exchangeExamplesApi.get()
            if (response) {
                console.log("Данные получены", response)
                dispatch(setExamples(response))
            } else {
                console.log("Неизвестная ошибка получения примеров")
            }
        } catch (error) {
            console.log("Ошибка получения примеров", error)
        }
    }

    useEffect(() => {
        getExamplesFunc()
    }, [])

    return (
        <div className={styles.wrapper}>
            <p className={styles.txt}>Примеры обменов</p>
            <div className={styles.exchangeList}>
                {[...examplesData].reverse().map((exchange, index) => {
                    return (
                        <div key={exchange.id || index}>
                            <ExchangeExample {...exchange} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}