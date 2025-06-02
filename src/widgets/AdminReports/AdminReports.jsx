import { useCallback, useEffect, useMemo, useState } from 'react'
import { reportsApi } from '../../shared/api/reportsApi'
import styles from './AdminReports.module.css'
import { Pagination, SearchBar } from '../../shared'
import { ReportCard } from '../../entities'
import { useSelector } from 'react-redux'
import { getSearchText } from '../../features/search/model/searchSlice'

const REPORTS_PER_PAGE = 10

export const AdminReports = () => {
  const [reports, setReports] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const searchText = useSelector(getSearchText)

  // 1) Фильтрация по searchText
  const filteredReports = useMemo(() => {
    if (!searchText.trim()) return reports

    const lowerCaseSearch = searchText.toLowerCase()

    return reports.filter(report => {
      const reason = report.reason?.toLowerCase() || ''
      const reportedEmail = report.reported?.email?.toLowerCase() || ''
      const name = report.reported?.UserProfile?.name?.toLowerCase() || ''

      return (
        reason.includes(lowerCaseSearch) ||
        reportedEmail.includes(lowerCaseSearch) ||
        name.includes(lowerCaseSearch)
      )
    })
  }, [searchText, reports])

  // 2) Перерасчёт количества страниц на основе отфильтрованного списка
  const totalPages = Math.ceil(filteredReports.length / REPORTS_PER_PAGE)

  // 3) Пагинация по filteredReports
  const paginatedReports = useMemo(() => {
    const startIndex = (currentPage - 1) * REPORTS_PER_PAGE
    const endIndex = startIndex + REPORTS_PER_PAGE
    return filteredReports.slice(startIndex, endIndex)
  }, [currentPage, filteredReports])

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
      // Оставляем только жалобы со статусом "pending"
      const pendingReports = response.filter(report => report.status === 'pending')
      setReports(pendingReports)
    } catch (error) {
      console.error('Ошибка получения жалоб', error)
    }
  }, [])

  useEffect(() => {
    fetchReports()
  }, [fetchReports])

  // 4) При изменении текста поиска сбрасываем страницу на 1
  useEffect(() => {
    setCurrentPage(1)
  }, [searchText])

  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <div className={styles.reportsList}>
        {paginatedReports.map((report, index) => (
          <ReportCard
            key={`${index}-${report.id}`}
            reportData={report}
            onSolution={fetchReports}
          />
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
