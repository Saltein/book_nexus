const BASE_URL = process.env.REACT_APP_BASE_URL;

export const reviewsApi = {
    async getReviews() {
        try {
            const response = await fetch(`${BASE_URL}/api/reviews`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get reviews failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get reviews error:', error)
            throw error
        }
    },

    async leave(user_id, rating, message) {
        try {
            const response = await fetch(`${BASE_URL}/api/exchanges/getUserExchanges`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    user_id,
                    rating,
                    message,
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
}