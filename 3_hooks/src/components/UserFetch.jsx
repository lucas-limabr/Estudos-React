import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function UserFetch({ userId }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                const userData = await response.json()

                if (!response.ok) {
                    throw new Error("Falha ao buscar o usuário");
                }

                setUser(userData)
            } catch (error) {
                return <p>{error.message}</p>
            }
        }

        if (userId) {
            fetchUser();
        }
    }, [userId])

    if (user == null) {
        return <p>Carregando usuário...</p>
    }

    return (
        <>
            {user &&
                (
                    <div>
                        <h2>Informações do usuário</h2>
                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )
            }
        </>
    )
}
