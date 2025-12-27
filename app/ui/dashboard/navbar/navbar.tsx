import React from 'react'
import Styles from './navbar.module.css'
import { MdCalendarViewMonth, MdContacts, MdFileCopy, MdLocalActivity, MdNotificationAdd, MdOutlineCalendarViewWeek, MdOutlineContacts, MdOutlineLocalActivity, MdOutlineNotificationImportant, MdOutlineNotifications, MdOutlineNotificationsActive, MdSearch } from 'react-icons/md'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.tab}>
        <div className={Styles.files}>
          <span><MdFileCopy /></span>
          <p>Files</p>
        </div>
        <div>
          <span><MdOutlineLocalActivity /></span>
          <p>Activity</p>
        </div>
        <div>
          <span><MdOutlineCalendarViewWeek /></span>
          <p>Calendar</p>
        </div>
        <div>
          <span><MdOutlineContacts /></span>
          <p>Contact</p>
        </div>
      </div>
      <div className={Styles.search}>
        <div className={Styles.input}>
          <span><MdSearch /></span>
          <input type="text" placeholder='Search anything...' />
        </div>
        <div className={Styles.notification}>
          <MdOutlineNotificationsActive fontSize={30} />
        </div>
        <span className={Styles.images}>
          <Image
            className={Styles.imageController}
            src="/profile_1.png"
            alt=""
            height={'50'}
            width={'100'}
          />
        </span>
      </div>
    </div>
  )
}
