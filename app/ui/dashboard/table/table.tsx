import React from 'react'
import Styles from './table.module.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaFolderClosed } from 'react-icons/fa6'
import TableData from './tableData/tableData'
export default function Table() {
    return (
        <div className={Styles.container}>
            <table className={Styles.table}>
                <thead>
                    <tr>
                        <th className={Styles.tableIcon}>
                            <p>Name</p>
                        </th>
                        <th>Sharing</th>
                        <th className={Styles.tableIcon}>
                            <p>Size</p>
                        </th>
                        <th className={Styles.tableIcon}> <p>Modified</p>  </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <TableData
                        name="Docs"
                        sharing='Public'
                        size='4.5 MB'
                        modified='Apr 10,2022'
                    />
                    <TableData
                        name="Fonts"
                        sharing='Private'
                        size='10 MB'
                        modified='Apr 10,2022'
                    />
                    <TableData
                        name="Sources"
                        sharing='Public'
                        size='14.5 MB'
                        modified='Dec 10,2022'
                    />
                    <TableData
                        name="Example"
                        sharing='Private'
                        size='16.5 MB'
                        modified='Dec 10,2022'
                    />
                    <TableData
                        name="Docs"
                        sharing='Public'
                        size='4.5 MB'
                        modified='Apr 10,2022'
                    />
                    <TableData
                        name="Fonts"
                        sharing='Private'
                        size='10 MB'
                        modified='Apr 10,2022'
                    />
                    <TableData
                        name="Sources"
                        sharing='Public'
                        size='14.5 MB'
                        modified='Dec 10,2022'
                    />
                    <TableData
                        name="Example"
                        sharing='Private'
                        size='16.5 MB'
                        modified='Dec 10,2022'
                    />
                    <TableData
                        name="Docs"
                        sharing='Public'
                        size='4.5 MB'
                        modified='Apr 10,2022'
                    />

                </tbody>
            </table>
        </div>
    )
}
