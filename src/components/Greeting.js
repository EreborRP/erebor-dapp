import React from 'react'
import logo from '../assets/logo.svg';
import discord from '../assets/discord.svg'

// eslint-disable-next-line no-unused-vars
const UNDERGOING_MAINTENANGE = 'We are performing undergoing maintenance ...'
// eslint-disable-next-line no-unused-vars
const COMMING_SOON = 'Comming Soon ...'

const GREETING_TITLE = 'Erebor Exchange'
const GREETING_STATUS = COMMING_SOON

export default function Greeting() {
    return (
        <div className='flex flex-col justify-center text-white text-center pt-20'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='text-7xl'>
                {GREETING_TITLE}
            </div>
            <div className='text-2xl mt-10'>
                {GREETING_STATUS}
            </div>

            <div className='text-2xl mt-20 flex justify-center'>
                Keep in touch on our <a href="https://discord.gg/dtsePTaquT" className='underline ml-4'> <img src={discord} className="h-10" alt="logo" /></a>
            </div>
        </div>
    )
}
