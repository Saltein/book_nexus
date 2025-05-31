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
            const response = await fetch(`${BASE_URL}/api/users/getFavorites`, {
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

            const data = await response.json()
            return data.Favorites.map(item => {
                const b = item.Book
                return {
                    id: b.id,
                    favorite_id: item.id,
                    name: b.name,
                    author: b.author,
                    year: b.year,
                    img_url: b.img_url,
                    description: b.description,
                    created_at: b.created_at,
                    updated_at: b.updated_at,
                    genre_id: b.genre_id,
                    lang_id: b.lang_id,
                    country_id: b.country_id,
                    Genre: b.Genre,
                    AuthorCountry: b.AuthorCountry,
                    BookLanguage: b.BookLanguage
                }
            })
        } catch (error) {
            console.error('Get my favorites error:', error)
            throw error
        }
    },

    async set(user_id, book_id) {
        try {
            const response = await fetch(`${BASE_URL}/api/favorites/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "user_id": user_id,
                    "book_id": book_id,
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Set as favorite failed')
            }
            return await response.json()
        } catch (error) {
            console.error('Set as favorite error:', error)
            throw error
        }
    },

    async delete(favorite_id) {
        try {
            const response = await fetch(`${BASE_URL}/api/favorites/${favorite_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Favorite deletion failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Favorite deletion error:', error);
            throw error;
        }
    }
}