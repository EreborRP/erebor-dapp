import create from 'zustand'

const headerStore = create(set => ({
    openModal: false,
    setOpenModal: (openModal) => set((state) => ({ ...state, openModal }))
}))

export default headerStore