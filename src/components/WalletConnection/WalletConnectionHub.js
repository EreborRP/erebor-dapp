import React from 'react'
import EventEmitter from '../../Services/Utils/EventEmitter';
import MaiarAppLogin from './MaiarApp/MaiarAppLogin';

function closeModal() {
    EventEmitter.emit('CloseConnectHubModal', { openWalletConnection: false, data: null })
}

function getContentOfUsingConnection(data) {
    switch (data.name) {
        case 'maiar_app': return (<MaiarAppLogin />)
        default: return (<> </>)
    }
}

export default function WalletConnectionHub({ data }) {
    const closeConnectHubModal = () => {
        closeModal()
    }

    return (
        <div className='fixed bg-[#000000b3] w-full h-full flex items-center justify-center'>
            <div className='bg-[#282c34] text-white rounded w-[500px]'>
                <div className='flex flex-col'>
                    <div className='flex text-2xl shadow px-6 py-4'>
                        <h1 className='flex-1'>Login using {data.description}</h1>
                        <div className='ml-4 text-1xl bg-[#181a1e] hover:bg-[#071f6b] rounded pb-2 px-3 ml-auto cursor-pointer' onClick={closeConnectHubModal}>×</div>
                    </div>
                    {getContentOfUsingConnection(data)}
                </div>
            </div>
        </div>
    )
}
