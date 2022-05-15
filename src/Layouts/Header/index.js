
import React from 'react'
import logo from '../../Assets/logo.svg';
import discord from '../../Assets/discord-simple.svg'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    const navButtons = [
        { label: 'Home', url: '/' },
        { label: 'Whitepaper', url: '/' },
        { label: 'Tokenomics', url: '/' },
        { label: 'About project', url: '/about' }]

    return (
        <div className='flex py-4 rounded text-white'>
            <div className='flex flex-1'>
                <img src={logo} className="h-10 px-2 ml-6" alt="logo" />
                <div className='text-3xl flex flex-1'>
                    <p>Erebor</p>
                    <p className='text-gray ml-2'>| Where gaming pays off</p>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='ml-auto flex '>
                    {navButtons.map((value, index) => {
                        return (
                            <div key={index} className='flex items-center px-5 rounded-full mr-1 hover:cursor-pointer hover:text-gray hover:animate-shake'>
                                <Link to={value.url}>
                                    {value.label}
                                </Link>
                            </div>
                        )
                    })}
                    <div className='flex items-center mr-10 outline outline-2 rounded-full p-2 cursor-pointer hover:outline-gray'>
                        <img src={discord} className="h-5" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
