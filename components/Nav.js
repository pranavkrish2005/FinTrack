"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
    const [active, setActive] = useState("Home");
    return (
        <div className='bg-white w-[220px] h-full h-screen border-r-2 border-gray-300'>
            <Link href='/'>
                <div className='flex flex-row items-center justify-center py-8 w-full'>
                    <Image src="/assets/logos/FinTrackLogo.png"
                        height={40} width={60} alt="FinTrackLogo" className='mr-3.5' />
                    <h1 className="text-[20px] font-bold">FinTrack</h1>
                </div>
            </Link>
            <ul className='flex flex-col items-start text-center'>
                <li className='h-[55px] w-full mb-4'>
                    <Link href='/demo/home' onClick={() => { setActive('Home') }}>
                        {/* note that for the src of this image, we are writing a function and at the end, 
                    we have () to call the fucntion */}
                        <div className='flex flex-row items-center h-full relative'>
                            {(active === "Home") && <div className='absolute h-full w-1.5 bg-[#1A16F3]'></div>}
                            <div className='w-full items-center ml-6 flex flex-row'>
                            <Image src={(() => {
                                if (active === "Home") { return '/assets/logos/homeSelected.png' }
                                else { return '/assets/logos/home.png' }
                            })()} height={30} width={30} className='mr-4' />
                            <p>Home</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className='h-[55px] w-full mb-4'>
                    <Link href='/demo/transactions' onClick={() => { setActive('Transactions') }}>
                        <div className='flex flex-row items-center h-full relative'>
                            {(active === "Transactions") && <div className='absolute h-full w-1.5 bg-[#1A16F3]'></div>}
                            <div className='w-full items-center ml-6 flex flex-row'>
                            <Image src={(() => {
                                if (active === "Transactions") { return '/assets/logos/transactionsSelected.png' }
                                else { return '/assets/logos/transactions.png' }
                            })()} height={30} width={30} className='mr-4' />
                            <p>Transactions</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className='h-[55px] w-full mb-4'>
                    <Link href='/demo/settings' onClick={() => { setActive('Settings') }}>
                        <div className='flex flex-row items-center h-full relative'>
                            {(active === "Settings") && <div className='absolute h-full w-1.5 bg-[#1A16F3]'></div>}
                            <div className='w-full items-center ml-6 flex flex-row'>
                            <Image src={(() => {
                                if (active === "Settings") { return '/assets/logos/settingsSelected.png' }
                                else { return '/assets/logos/settings.png' }
                            })()} height={30} width={30} className='mr-4' />
                            <p>Settings</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
