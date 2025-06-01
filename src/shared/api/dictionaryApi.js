const BASE_URL = process.env.REACT_APP_BASE_URL;

export const dictionaryApi = {
    async getGenres() {
        try {
            const response = await fetch(`${BASE_URL}/api/genres`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get genres failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get genres error:', error)
            throw error
        }
    },

    async getCountries() {
        try {
            const response = await fetch(`${BASE_URL}/api/countries`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get countries failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get countries error:', error)
            throw error
        }
    },

    async getDelivery() {
        try {
            const response = await fetch(`${BASE_URL}/api/delivery`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get delivery failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get delivery error:', error)
            throw error
        }
    },

    async getLanguages() {
        try {
            const response = await fetch(`${BASE_URL}/api/languages`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get languages failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get languages error:', error)
            throw error
        }
    }
}