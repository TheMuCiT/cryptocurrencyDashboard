import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import Search from '../../icons/Search'
import Star from '../../icons/Star'
import Bookmark from '../../icons/Bookmark'
import Notification from '../../icons/Notification'
import Profile from '../../icons/Profile'
import DropDownArrow from '../../icons/DropDownArrow'
import Category from '../../icons/Category'
import Calendar from '../../icons/Calendar'
import ToDo from '../../icons/To-Do'
import Settings from '../../icons/Settings'
import Projects from '../../icons/Projects'

import './topbar.css'
const TopBar = () => {
     const [mobileActive, setmobileActive] = useState(false)
     const [mobile, setmobile] = useState(false)

     const WindowChange = () => {
          if (window.innerWidth < 960) {
               setmobile(true)
          } else {
               setmobile(false)
          }
     }

     const mobileActiveHandler = () => setmobileActive(!mobileActive)

     useEffect(() => {
          WindowChange()
     }, [])

     window.addEventListener('resize', WindowChange)

     return (
          <div className='topbar'>
               <div onClick={mobileActiveHandler} className='topbarMobileMenu'>
                    ---
                    <div className={mobileActive ? 'topbarSide active' : 'topbarSide'}>
                         <div className='topbarSideLogo'>
                              <Category size={80} />
                         </div>
                         <div className='topbarSideLinks'>
                              <Link to='/' className='topbarSideItem'>
                                   <div className='topbarSideItemIcon'>
                                        <Category size={40} />
                                   </div>
                                   <div className='topbarSideItemText'>Dashboard</div>
                              </Link>
                              <Link to='/about' className='topbarSideItem'>
                                   <div className='topbarSideItemIcon'>
                                        <Calendar size={40} color={'white'} />
                                   </div>
                                   <div className='topbarSideItemText'>Calendar</div>
                              </Link>
                              <Link to='/about' className='topbarSideItem'>
                                   <div className='topbarSideItemIcon'>
                                        <ToDo size={40} color={'white'} />
                                   </div>
                                   <div className='topbarSideItemText'>To-Do</div>
                              </Link>
                              <Link to='/about' className='topbarSideItem'>
                                   <div className='topbarSideItemIcon'>
                                        <Settings size={40} color={'white'} />
                                   </div>
                                   <div className='topbarSideItemText'>Settings</div>
                              </Link>
                              <Link to='/about' className='topbarSideItem'>
                                   <div className='topbarSideItemIcon'>
                                        <Projects size={40} color={'white'} />
                                   </div>
                                   <div className='topbarSideItemText'>Projects</div>
                              </Link>
                         </div>
                    </div>
               </div>
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
