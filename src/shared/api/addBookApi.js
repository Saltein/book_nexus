const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addBookApi = {
    async addBook(bookData) {
        try {
            const response = await fetch(`${BASE_URL}/api/books/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(bookData)
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Add book failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Add book error:', error)
            throw error
        }
    },

    async delete(book_id) {
        try {
            const response = await fetch(`${BASE_URL}/api/books/${book_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Book deletion failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Book deletion error:', error)
            throw error
        }
    },

    async editBook(edit_data) {
        try {
            const response = await fetch(`${BASE_URL}/api/books/${edit_data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        "name": edit_data.name,
                        "author": edit_data.author,
                        "year": edit_data.year,
                        "genre_id": edit_data.genre_id,
                        "lang_id": edit_data.lang_id,
                        "country_id": edit_data.country_id,
                        "img_url": edit_data.img_url,
                        "description": edit_data.description,
                    }
                )
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Book edit failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Book edit error:', error)
            throw error
        }
    }
}