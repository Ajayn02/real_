import React, { createContext, useState } from 'react'

export const userProfileContext = createContext()

function UserProfileContext({ children }) {
     const [userId, setUserId] = useState('')
    return (
        <>
            <userProfileContext.Provider value={{ userId, setUserId }}>
                { children }
            </userProfileContext.Provider>
        </>
    )
}

export default UserProfileContext