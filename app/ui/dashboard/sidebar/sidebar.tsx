"use client"
import React from 'react'
import Styles from './sidebar.module.css'
import { MdDelete, MdFavorite, MdFileCopy, MdRestore, MdSettings, MdShare, MdTag } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { GrStorage } from 'react-icons/gr'
import { IoIosArrowForward } from 'react-icons/io'

const MenuItems = [
    {
        title:"All Files",
        path:"/dashboard",
        icons:<MdFileCopy />
    },
    {
        title:"Recent",
        path:"/dashboard/recent",
        icons:<MdRestore />
    },
    {
        title:"Favorites",
        path:"/dashboard/favorites",
        icons:<MdFavorite />
    },
    {
        title:"Shared",
        path:"/dashboard/shared",
        icons:<MdShare />
    },
    {
        title:"Tags",
        path:"/dashboard/tags",
        icons:<MdTag/>
    }

]

const setting = [
    {
        title:"Settings",
        path:"/dashboard/settings",
        icons:<MdSettings/>
    },
    {
        title:"Deleting Files",
        path:"/dashboard/deleting-files",
        icons:<MdDelete/>
    },
]
export default function Sidebar() {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <div className={Styles.container}>
      <ul className={Styles.list}>
        {MenuItems.map((data,key)=>(
            <Link href={data.path}>
            
            <li key={data.title} className={(pathName==data.path?Styles.isActive:"")}><span>{data.icons}</span>{data.title}</li>
            </Link>
        ))}
      </ul>
      <ul>
        {setting.map((data,key)=>(
            <li key={key}><span>{data.icons}</span>{data.title}</li>
        ))}
        <div className={Styles.storage}>
          <div className={Styles.storageTitle}>
            <div>
             <span><GrStorage color="#0c15f8"/></span>
             <p>Storage</p>
            </div>
             <span className={Styles.hoverEffect}><IoIosArrowForward color='#0c15f8'/></span>
          </div>
          <div className={Styles.input}>
            <input type="range"/>
            <p>42 GB used from 256 GB</p>
          </div>
        </div>
      </ul>
      
    </div>
  )
}
