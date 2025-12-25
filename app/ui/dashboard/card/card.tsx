import React from 'react'
import Styles from './card.module.css'
import { FaFolderClosed } from 'react-icons/fa6'
export default function Card({title,fileSize,itemCount,component}:{title:string, fileSize:string,itemCount:number,component:React.ReactNode}) {
  return (
    <div className={Styles.container}>
        {component}
      {/* <FaFolderClosed color='#0c15f8' size={30}/> */}
      <p className={Styles.title}>{title}</p>
      <p className={Styles.subtitle}>{fileSize}<span>|</span>{itemCount} item</p>
    </div>
  )
}
