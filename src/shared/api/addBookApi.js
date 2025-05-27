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
}