import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaFolderClosed } from 'react-icons/fa6'
import Styles from '../table.module.css'
export default function TableData({ name, sharing, size, modified }: { name: string, sharing: string, size: string, modified: string }) {
    return (
        <tr>
            <td className={Styles.icons}><FaFolderClosed color='#0c15f8' size={20} /> {name}</td>
            <td>{sharing}</td>
            <td>{size}</td>
            <td>{modified}</td>
            <td><BiDotsHorizontalRounded /></td>
        </tr>
    )
}
