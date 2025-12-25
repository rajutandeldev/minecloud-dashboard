import React from 'react'
import Styles from '@/app/ui/dashboard/dashboard.module.css'
import { IoIosArrowForward, IoMdOptions } from 'react-icons/io'
import Card from '../ui/dashboard/card/card'
import { FaFolderClosed, FaPlus } from 'react-icons/fa6'
import { AiFillFilePpt, AiOutlineAppstore } from 'react-icons/ai'
import Table from '../ui/dashboard/table/table'
export default function Dashboard() {
    return (
        <div className={Styles.dashContainer}>
            <div className={Styles.mainContentContainer}>
                <div className={Styles.mainContent}>
                    <div className={Styles.titleDash}>
                        <h2>Quick Access</h2>
                        <span><IoMdOptions color='#0c15f8' /></span>
                    </div>
                    <div className={Styles.card}>
                        <Card title='Studio Work' fileSize='2.3GB' itemCount={23} component={<FaFolderClosed color='#0c15f8' size={30} />} />
                        <Card title='Source' fileSize='1.2 MB' itemCount={1} component={<FaFolderClosed color='#0c15f8' size={30} />} />
                        <Card title='Brand Assets' fileSize='241 MB' itemCount={8} component={<FaFolderClosed color='#0c15f8' size={30} />} />
                        <Card title='Great Studios Pitch..' fileSize='12.3 MB' itemCount={8} component={<AiFillFilePpt color='#E4A363FF' size={30} />} />
                        <Card title='Source' fileSize='1.2 MB' itemCount={1} component={<FaFolderClosed color='#0c15f8' size={30} />} />

                    </div>
                </div>
                <div className={Styles.pathContent}>
                    <div className={Styles.pathContainer}>
                        <div className={Styles.path}>
                            <span>Home</span>
                            <span><IoIosArrowForward /></span>
                            <span>Concept Font</span>
                            <span><IoIosArrowForward  /></span>
                            <span className={Styles.bold}>Maszeh</span>
                        </div>
                        <div className={Styles.btn}>
                            <span><AiOutlineAppstore size={30}/>
                            </span>
                            <button type='button'>
                                <span>
                                    <FaPlus />
                                </span>
                                Add New
                            </button>
                        </div>
                    </div>
                    <div>
                        <Table/>
                    </div>
                </div>

            </div>
            <div className={Styles.source}>
              
            </div>
        </div>
    )
}
