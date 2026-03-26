import React from 'react'

export default function UserInfo({user}) {
  
    return (
    <>
    <h2>UserInfo</h2>
    <p>Nome: {user.name}</p>
    <p>Naturalidade: {user.naturality}</p>
      </>
  )
}
