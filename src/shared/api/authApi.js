const BASE_URL = process.env.REACT_APP_BASE_URL;;

export const authApi = {
    async register(formData) {
        try {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed')
            }

            return await response.json();
        } catch (error) {
            console.error('Registration error:', error)
            throw error
        }
    },

    async login(formData) {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Login error:', error)
            throw error
        }
    }
}