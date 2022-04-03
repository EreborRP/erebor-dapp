import React from 'react'
import EventEmitter from '../../utils/EventEmitter'
import maiarDeFi from '../../assets/maiar-extension.svg'
import maiarApp from '../../assets/maiar-app.svg'
import maiarExtension from '../../assets/elrond-web.svg'

const options = [
    { id: 1, name: 'maiar_defi_wallet', icon: maiarDeFi, description: 'Maiar DeFi Wallet' },
    { id: 2, name: 'maiar_app', icon: maiarApp, description: 'Maiar App' },
    { id: 3, name: 'web_wallet', icon: maiarExtension, description: 'Web wallet' },
]

function renderConnectionOption(option) {
    return (
        <div className='flex bg-[#181a1e] mx-4 rounded mb-2 py-4 cursor-pointer hover:bg-[#1f2126] border border-transparent hover:border-[#243c5a]'>
            <img src={option.icon} className="h-6 px-2 ml-6" alt="logo" />
            <p>{option.description}</p>
        </div>
    )
}

function closeModal() {
    EventEmitter.emit('CloseConnectModal', {
        openModal: false
    })
}

function onConnectionClick(connection) {
    EventEmitter.emit('WalletConnectionTriggered', {openWalletConnection: true, data: connection})

    closeModal()
}

export default function WalletConnectChooseModal() {
    const closeConnectModal = () => {
        closeModal()
    }

    return (
        <div className='fixed bg-[#000000b3] w-full h-full flex items-center justify-center'>
            <div className='bg-[#282c34] text-white rounded w-[500px]'>
                <div className='flex flex-col'>
                    <div className='flex text-2xl shadow px-6 py-4'>
                        <h1 className='flex-1'>Connect to a wallet</h1>
                        <div className='ml-4 text-1xl bg-[#181a1e] hover:bg-[#071f6b] rounded pb-2 px-3 ml-auto cursor-pointer' onClick={closeConnectModal}>×</div>
                    </div>
                    <div className='px-6 pt-4'>
                        Please let us know which method you prefer to connect :
                    </div>
                    <div className='py-4'>
                        {options.map(option => <div key={option.id} onClick={() => onConnectionClick(option)}>{renderConnectionOption(option)}</div>)}
                    </div>
                </div>

            </div>
        </div>
    )
}
