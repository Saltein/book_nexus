const BASE_URL = process.env.REACT_APP_BASE_URL;

export const exchangeExamplesApi = {
    async get() {
        try {
            const response = await fetch(`${BASE_URL}/api/exchanges/getExamples`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get examples failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get examples error:', error)
            throw error
        }
    },
}