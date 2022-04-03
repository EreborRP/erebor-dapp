
import React from 'react'
import logo from '../assets/logo.svg';
import EventEmitter from '../utils/EventEmitter';

export default function NavigationBar() {

    const openConnect = () => {
        EventEmitter.emit('OpenConnectModal', {
            openModal: true
        })
    }

    return (
        <div className='flex flex-row py-4 shadow-lg rounded text-white'>
            <img src={logo} className="h-10 px-2 ml-6" alt="logo" />
            <div className='text-3xl flex'>
                <p>Erebor</p>
                <p className='text-[gray] ml-2'>| Exchange</p>
            </div>
            <div className='flex-1 text-center'>

            </div>
            <div className='ml-auto pt-2 px-10 rounded mr-10 bg-[#181a1e] hover:bg-[#071f6b] hover:cursor-pointer' onClick={openConnect}>
                Connect
            </div>

        </div>
    )
}
