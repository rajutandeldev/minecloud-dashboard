import React from 'react'
import Styles from '@/app/ui/dashboard/dashboard.module.css'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import { IoLogoXbox } from 'react-icons/io'
export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className={Styles.container}>
            <div className={Styles.menu}>
                <div className={Styles.title}>
                    <span><IoLogoXbox /></span>
                    <p>minecloud</p>
                </div>
                <Sidebar />
            </div>
            <div className={Styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
