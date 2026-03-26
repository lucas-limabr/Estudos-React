import React, { useState } from 'react'
import useOnlineStatus from '../hooks/useOnlineStatus'

export default function SignInSignOut() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const { userStatus, user, msgErro, setButtonEvent } = useOnlineStatus(userName, email)

    return (
        <div>
            {(userStatus && msgErro == null) ? (
                <>
                    <h3>Logged in user</h3>
                    <h4>User Info</h4>
                    <p>Name: {user.name}</p>
                    <p>Company: {user.companyName}</p>
                    <button onClick={() => setButtonEvent(false)}>Logout</button>
                </>
            ) :
                (
                    <>
                        {msgErro && (
                            <p>{msgErro}</p>
                        )}
                        <h3>Logged out user</h3>
                        <h4>Faça o login</h4>
                        <div style={{ marginBottom: '10px' }}>
                            <label style={{ marginRight: '10px' }} htmlFor="name">Username:</label>
                            <input type="text" name="name" id="name" onChange={(e) => setUserName(e.target.value)} />
                        </div>

                        <div>
                            <label style={{ marginRight: '10px' }} htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        {/* tentativa de login */}
                        <button onClick={() => setButtonEvent(true)}>Login</button>
                    </>
                )
            }
        </div>
    )
}
