const BASE_URL = process.env.REACT_APP_BASE_URL;

export const favoritesApi = {
    async get() {
        try {
            const response = await fetch(`${BASE_URL}/api/favorites`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get favorites failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get favorites error:', error)
            throw error
        }
    },

    async getMy(userId) {
        try {
            const response = await fetch(`${BASE_URL}/api/favorites/findUserFav`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "user_id": userId
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get my favorites failed')
            }
            return await response.json()
        } catch (error) {
            console.error('Get my favorites error:', error)
            throw error
        }
    },
}