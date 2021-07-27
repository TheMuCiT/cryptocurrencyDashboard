import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Search from '../../icons/Search'
import Star from '../../icons/Star'
import Bookmark from '../../icons/Bookmark'
import Notification from '../../icons/Notification'
import Profile from '../../icons/Profile'
import DropDownArrow from '../../icons/DropDownArrow'

import './topbar.css'
const TopBar = () => {
     const [mobile, setmobile] = useState(false)

     const WindowChange = () => {
          if (window.innerWidth < 960) {
               setmobile(true)
          } else {
               setmobile(false)
          }
     }

     useEffect(() => {
          WindowChange()
     }, [])

     window.addEventListener('resize', WindowChange)

     return (
          <div className='topbar'>
               <div className='topbarLeft'>
                    <div className='topbarSearchContainer'>
                         <div className='topbarSearchIcon'>
                              <Search color={mobile ? 'white' : 'black'} size={20} />
                         </div>
                         <input type='text' className='topbarInput' placeholder='Search...' />
                    </div>
               </div>
               <div className='topbarRight'>
                    <NavLink activeClassName='topActive mobile' to='/'>
                         <div className='topbarRightIcon'>
                              <Star color='black' />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive mobile' to='/'>
                         <div className='topbarRightIcon'>
                              <Bookmark color='black' />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Notification color={mobile ? 'white' : 'black'} />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Profile color={mobile ? 'white' : 'black'} />
                         </div>
                    </NavLink>

                    <div className='topbarRightArrow'>
                         <DropDownArrow size={15} color={mobile ? 'white' : '#485aff'} />
                    </div>
               </div>
          </div>
     )
}

export default TopBar
