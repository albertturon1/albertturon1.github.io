import React from 'react'
import { Toaster } from 'react-hot-toast'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'

export default function Homepage() {
    return (
        <>
            <div><Toaster toastOptions={{
                className: '',
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
            }} /></div>
            <Navbar />
            <div className="relative flex flex-col items-center justify-between px-2 py-3">
                <div className="container px-4 mx-auto flex flex-col">
                    <Projects />
                    <Contact />
                </div>
            </div>
        </>
    )
}
