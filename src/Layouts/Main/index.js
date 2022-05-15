import React from 'react'
import AppLayout from './AppContent'
import Greeting from './Greeting'

const SHOULD_DISPLAY_GREETING = false

function LayoutToDisplay() {
    if (SHOULD_DISPLAY_GREETING) {
        return <Greeting />
    }

    return <AppLayout />
}

export default function Layout() {
    return (
        <div className='flex flex-col h-full'>
            {LayoutToDisplay()}
        </div>
    )
}
