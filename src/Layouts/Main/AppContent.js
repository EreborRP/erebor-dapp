import React from 'react'

export default function AppContent() {

    var cards = [{
        value: '2 000 000 000',
        name: 'Supply'
    }, {
        value: '$0',
        name: 'ERB Price'
    }, {
        value: '9,072',
        name: 'Circulating Supply'
    }]

    cards = []

    return (
        <>
            <div className='flex flex-col justify-center h-full items-center'>
                <div className='text-white mt-40 py-4 text-2xl'>Exchange In-game currency for Erebor tokens
                </div>

                <div className='flex mt-auto my-20'>
                    {cards.map((cardInfo, index) => {
                        return (<div key={index} className='flex flex-col hover:animate-shake text-center font-medium w-60 bg-blue-primary text-white p-8 outline outline-1 outline-gold-secondary rounded mr-6 shadow-md hover:shadow-gold-primary'>
                            <div>{cardInfo.value} </div>
                            <div>{cardInfo.name} </div>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}
