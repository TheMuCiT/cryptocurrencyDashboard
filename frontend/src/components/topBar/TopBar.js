import React from 'react'
import { NavLink } from 'react-router-dom'

import Search from '../../icons/Search'
import Star from '../../icons/Star'
import Bookmark from '../../icons/Bookmark'
import Notification from '../../icons/Notification'
import Profile from '../../icons/Profile'

import './topbar.css'
const TopBar = () => {
     return (
          <div className='topbar'>
               <div className='topbarLeft'>
                    <div className='topbarSearchContainer'>
                         <div className='topbarSearchIcon'>
                              <Search color='black' size='20' />
                         </div>
                         <input type='text' className='topbarInput' placeholder='Search...' />
                    </div>
               </div>
               <div className='topbarRight'>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Star color='black' />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Bookmark color='black' />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Notification color='black' />
                         </div>
                    </NavLink>
                    <NavLink activeClassName='topActive' to='/'>
                         <div className='topbarRightIcon'>
                              <Profile color='black' />
                         </div>
                    </NavLink>

                    <div className='topbarRightArrow'>
                         <Star color='blue' />
                    </div>
               </div>
          </div>
     )
}

export default TopBar
