import React, { useEffect, useState } from 'react'
import EventEmitter from '../utils/EventEmitter'
import AppLayout from './AppContent'
import Footer from '../Layouts/Footer/index'
import Greeting from './Greeting'
import WalletConnectChooseModal from './Modals/WalletConnectChooseModal'
import WalletConnectionHub from './WalletConnection/WalletConnectionHub'

const SHOULD_DISPLAY_GREETING = true

function LayoutToDisplay() {
    if (SHOULD_DISPLAY_GREETING) {
        return <Greeting />
    }

    return <AppLayout />
}

export default function Layout() {
    useEffect(() => {
        const onOpenCloseConnectModal = (eventData) => {
            setOpenModal(eventData.openModal)
        }

        const onWalletConnectionTrigger = (eventData) => {
            setOpenWalletConnectionHub(eventData)
        }

        const listenerConnectModal = EventEmitter.addListener('OpenConnectModal', onOpenCloseConnectModal)
        const listenerCloseConnectModal = EventEmitter.addListener('CloseConnectModal', onOpenCloseConnectModal)
        const listenerWalletConnectionTrigger = EventEmitter.addListener('WalletConnectionTriggered', onWalletConnectionTrigger)
        const listenerCloseConnectHubModal = EventEmitter.addListener('CloseConnectHubModal', onWalletConnectionTrigger)

        return () => {
            listenerConnectModal.remove()
            listenerCloseConnectModal.remove()
            listenerWalletConnectionTrigger.remove()
            listenerCloseConnectHubModal.remove()
        }
    }, [])

    const [openModal, setOpenModal] = useState(false)
    const [openWalletConnectionHub, setOpenWalletConnectionHub] = useState({ openWalletConnection: false, data: null })

    return (
        <div className='flex flex-col h-full'>
            {LayoutToDisplay()}
            <Footer />

            {openModal && <WalletConnectChooseModal />}
            {openWalletConnectionHub.openWalletConnection && <WalletConnectionHub data={openWalletConnectionHub.data} />}
        </div>
    )
}
