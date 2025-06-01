const BASE_URL = process.env.REACT_APP_BASE_URL;

export const reportsApi = {
    async getReports() {
        try {
            const response = await fetch(`${BASE_URL}/api/reports`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get reports failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get reports error:', error)
            throw error
        }
    },

    async newReport(reported_id, reporter_id, reason) {
        try {
            const response = await fetch(`${BASE_URL}/api/reports/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "reported_id": reported_id,
                    "reporter_id": reporter_id,
                    "reason": reason,
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Leave review failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Leave review error:', error)
            throw error
        }
    },

        async changeStatus(report_id, status) {
        try {
            const response = await fetch(`${BASE_URL}/api/reports/${report_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        "status": status
                    }
                )
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Report status change failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Report status change error:', error)
            throw error
        }
    },
}