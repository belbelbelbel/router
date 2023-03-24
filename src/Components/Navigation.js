import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Navigation = () => {
    const navigate = useNavigate()
    return (
        <div><h1>navigation summary</h1>
            <button onClick={()=>navigate(-1)}> Go back</button>
            </div>

    )
}
