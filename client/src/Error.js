import React, { Component } from 'react'

export default function Error({ err, children }) {
    return (
        err ?
            <div>{err}</div>
            :
            children
    )
}
