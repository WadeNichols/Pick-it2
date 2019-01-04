import React, { Component } from 'react'

export default function Idle({ idle, children}) {
        return (
            idle ?
                <div />
                :
                children
    )
}
