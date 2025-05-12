const BASE_URL = process.env.REACT_APP_BASE_URL;

export const bookCatalogApi = {
    async get() {
        try {
            const response = await fetch(`${BASE_URL}/api/books`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get books failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get books error:', error)
            throw error
        }
    },
}