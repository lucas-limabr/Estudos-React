import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: false,
    data: null,
    error: null
}

function usuarioReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":

            return {
                loading: true,
                data: null,
                error: null
            }

        case "FETCH_SUCCESS":

        return {
                loading: false,
                data: action.payload,
                error: null
            }

        case "FETCH_ERROR":

            return {
                loading: false,
                data: null,
                error: action.payload
            }

        default:
            return state
    }
}

//jś está retornando uma Promise manualmente, não precisa de async function
function delay(ms)
{
    return new Promise((resolve) => { setTimeout(resolve, ms)})
}

export default function ExampleUseReducer() {

    const [state, dispatch] = useReducer(usuarioReducer, initialState)

    useEffect(() => {

        dispatch({ type: "FETCH_START" })

        async function fetchUser() {

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
                const data = await response.json()

                if (!response.ok) {
                    throw new Error("Erro ao buscar usuário")
                }

                //apenas para simular um atraso para dar tempo de ver a mensagem quando state.loading == true
                await delay(2000)
                
                dispatch({ type: "FETCH_SUCCESS", payload: data })
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message })
            }
        }

        fetchUser();

    }, [])

    if (state.loading) {
        
        return <p>Carregando...</p>
    }
    if (state.error) {
        return <p>{state.error}</p>
    }

    return (
        <div>
            {state.data &&
                 <>
                    <h2>Usuário encontrado</h2>
                    <p>Nome: {state.data.name}</p>
                    <p>Email: {state.data.email}</p>
                    <p>Empresa: {state.data.company.name}</p>
                </>
            }
        </div>
    )
}
