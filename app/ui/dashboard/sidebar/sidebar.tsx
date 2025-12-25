"use client"
import React from 'react'
import Styles from './sidebar.module.css'
import { MdDelete, MdFavorite, MdFileCopy, MdRestore, MdSettings, MdShare, MdTag } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
            
            <li key={key} className={(pathName==data.path?Styles.isActive:"")}><span>{data.icons}</span>{data.title}</li>
            </Link>
        ))}
      </ul>
      <ul>
        {setting.map((data,key)=>(
            <li key={key}><span>{data.icons}</span>{data.title}</li>
        ))}
      </ul>
    </div>
  )
}
