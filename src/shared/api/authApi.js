const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authApi = {
    async register(formData) {
        try {
            const response = await fetch(`${BASE_URL}/api/users/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
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
            const response = await fetch(`${BASE_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
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
    },

    async check() {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/check`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Check failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Check error:', error)
            throw error
        }
    },

    async logout() {
        try {
            const response = await fetch(`${BASE_URL}/api/users/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Logout failed')
            }
        } catch (error) {
            console.error('Logout error:', error)
            throw error
        }
    },

    async sendCode(email) {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/send-code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "email": email,
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Send code failed')
            }
            return true
        } catch (error) {
            console.error('Send code error:', error)
            throw error
        }
    },

    async confirmCode(email, code) {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/confirm-code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "email": email,
                    "code": code,
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Code confirmation failed')
            }
            return true
        } catch (error) {
            console.error('Code confirmation error:', error.message)
            throw error
        }
    }
}