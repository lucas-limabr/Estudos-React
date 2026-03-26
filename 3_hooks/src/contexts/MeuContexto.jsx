import { createContext, useState } from "react"

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

    const [mensagem, setMensagem] = useState("Mensagem inicial")

    const contextValue = {
        mensagem,
        setMensagem
    }

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}