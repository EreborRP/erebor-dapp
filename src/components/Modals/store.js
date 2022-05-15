import create from 'zustand'

const walletConnectChooseModalStore = create(set => ({
    walletConnection: {},
    setWalletConnection: (walletConnection) => set((state) => ({ ...state, walletConnection }))
}))

export default walletConnectChooseModalStore