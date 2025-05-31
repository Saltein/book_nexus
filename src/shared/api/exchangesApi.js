const BASE_URL = process.env.REACT_APP_BASE_URL;

export const exchangesApi = {
    async getExchangesByStatus(user_id, status) {
        try {
            const response = await fetch(`${BASE_URL}/api/exchanges/getUserExchanges`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    user_id,
                    status
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get exchanges failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get exchanges error:', error)
            throw error
        }
    },

    async changeStatus(exchange_id, status) {
        try {
            const response = await fetch(`${BASE_URL}/api/exchanges/${exchange_id}`, {
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
                throw new Error(errorData.message || 'Exchange status change failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Exchange status change error:', error)
            throw error
        }
    },

    async delete(exchange_id) {
        try {
            const response = await fetch(`${BASE_URL}/api/exchanges/${exchange_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Exchange deletion failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Exchange deletion error:', error);
            throw error;
        }
    }
}