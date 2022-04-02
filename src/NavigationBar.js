import React from 'react'
import logo from './logo.svg';

export default function NavigationBar() {
    return (
        <div className='flex flex-row py-4 shadow-lg rounded text-white'>
            <img src={logo} className="h-10 px-2 ml-6" alt="logo" />
            <div className='text-3xl flex'>
                <p>Erebor</p>
                <p className='text-[gray] ml-2'>| Exchange</p>
            </div>
            <div className='flex-1 text-center'>
                
            </div>
            <div className='ml-auto pt-2 px-10 rounded mr-10 bg-[#48d6d275] hover:bg-[#48d6d2bf]'>
                Connect
            </div>
        </div>
    )
}
