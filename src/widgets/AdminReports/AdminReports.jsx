import { useCallback, useEffect, useMemo, useState } from 'react'
import { reportsApi } from '../../shared/api/reportsApi'
import styles from './AdminReports.module.css'
import { Pagination } from '../../shared'
import { ReportCard } from '../../entities'

const REPORTS_PER_PAGE = 10

export const AdminReports = () => {
    const [reports, setReports] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(reports.length / REPORTS_PER_PAGE)

    const paginatedReports = useMemo(() => {
        const startIndex = (currentPage - 1) * REPORTS_PER_PAGE
        const endIndex = startIndex + REPORTS_PER_PAGE
        return reports.slice(startIndex, endIndex)
    }, [currentPage, reports])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const fetchReports = useCallback(async () => {
        try {
            const response = await reportsApi.getReports()
            if (!response) {
                console.log('Неизвестная ошибка получения жалоб')
                return
            }
            const pendingReports = response.filter(report => report.status === 'pending')
            setReports(pendingReports)
        } catch (error) {
            console.error('Ошибка получения жалоб', error)
        }
    }, [])

    useEffect(() => {
        fetchReports()
    }, [])

    return (
        <div className={styles.div}>
            <div className={styles.reportsList}>
                {paginatedReports.map((report, index) => (
                    <ReportCard key={`${index}-${report.id}`} reportData={report} onSolution={fetchReports} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                maxPageButtons={5}
            />
        </div>
    )
}
