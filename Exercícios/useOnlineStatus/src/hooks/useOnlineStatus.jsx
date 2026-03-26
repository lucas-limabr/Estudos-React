import React, { useEffect, useState } from 'react'

export default function useOnlineStatus(userName, email) {

  //online (true) ou offline (false)
  const [userStatus, setUserStatus] = useState(false)
  const [user, setUser] = useState({
    name: null,
    companyName: null
  })
  //ação de login (true) ou  ação de logout (false)
  const [buttonEvent, setButtonEvent] = useState(false)
  const [msgErro, setMsgErro] = useState(null)

  useEffect(() => {

    async function fetchUser() {

      const uri = 'https://jsonplaceholder.typicode.com/users/'

      try {

        const response = await fetch(`${uri}?email=${email}&username=${userName}`)
        const user = await response.json()

        console.log(user)

        if (!response.ok) {
          throw new Error("Não foi possível buscar o usuário");

        }

        if (user.length == 0) {
          throw new Error("Credenciais de usuário inválidas")
        }

        setUser({
          name: user[0].name,
          companyName: user[0].company.name
        })

        setUserStatus(true)
        setMsgErro(null)

      } catch (error) {
        setButtonEvent(false)
        setMsgErro(error.message)
      }
    }

    if (buttonEvent) {
      fetchUser()
    }
    else {
      setUserStatus(false)
      setUser({
        name: null,
        companyName: null
      })
    }

  }, [buttonEvent])

  return { userStatus, user, msgErro, setButtonEvent }
}
