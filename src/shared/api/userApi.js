const BASE_URL = process.env.REACT_APP_BASE_URL;

export const userApi = {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/api/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get users failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get users error:', error)
            throw error
        }
    },

    async ban(user_id, reason) {
        try {
            const response = await fetch(`${BASE_URL}/api/users/${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        "is_blocked": true,
                        "blocked_at": Date.now(),
                        "blocked_reason": reason
                    }
                )
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ban user failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Ban user error:', error)
            throw error
        }
    },

    // async getBanReason(user_id) {
    //     try {
    //         const response = await fetch(`${BASE_URL}/api/users/${user_id}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             credentials: 'include',
    //         })
    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(errorData.message || 'Get ban reason failed')
    //         }

    //         return await response.json()
    //     } catch (error) {
    //         console.error('Get ban reason error:', error)
    //         throw error
    //     }
    // },

    async changePass(user_id, new_password) {
        try {
            const response = await fetch(`${BASE_URL}/api/users/${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        "password": new_password
                    }
                )
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Password change failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Password change error:', error)
            throw error
        }
    },

    async changeRole(user_id, new_role) {
        try {
            const response = await fetch(`${BASE_URL}/api/users/${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        "role": new_role
                    }
                )
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Role change failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Role change error:', error)
            throw error
        }
    },

    async getIdByEmail(user_email) {
        try {
            const response = await fetch(`${BASE_URL}/api/users/getWithMail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    "email": user_email
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get id failed')
            }

            return await response.json()
        } catch (error) {
            console.error('Get id error:', error)
            throw error
        }
    }
}