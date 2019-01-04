import React from 'react'

export default function Loading({ loading, children}) {
    return (
        loading ? 
            <div>...Loading</div>
            :
            children 
    )
}

