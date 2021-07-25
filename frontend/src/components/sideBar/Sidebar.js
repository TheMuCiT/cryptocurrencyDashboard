import React from 'react'
import { NavLink } from 'react-router-dom'

import Category from '../../icons/Category'
import Calendar from '../../icons/Calendar'
import ToDo from '../../icons/To-Do'
import Settings from '../../icons/Settings'
import Projects from '../../icons/Projects'

import './sidebar.css'

export const Sidebar = () => {
     return (
          <div className='SideBar'>
               <div className='sideBarLogo'>
                    <Category color='white' size={39} />
               </div>
               <NavLink exact activeClassName='active' to='/'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <Category color='#ffffff' size={24} />
                         </div>
                         <div className='sidebarLinkIconActive'>
                              <Category color='#485aff' size={24} />
                         </div>
                         <div className='sidebarLinkText'>Dashboard</div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/about'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <Calendar color='#ffffff' size={24} />
                         </div>
                         <div className='sidebarLinkIconActive'>
                              <Calendar color='#485aff' size={24} />
                         </div>
                         <div className='sidebarLinkText'>Calendar</div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/about'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <ToDo color='#ffffff' size={24} />
                         </div>
                         <div className='sidebarLinkIconActive'>
                              <ToDo color='#485aff' size={24} />
                         </div>
                         <div className='sidebarLinkText'>To-Do</div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/about'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <Settings color='#ffffff' size={24} />
                         </div>
                         <div className='sidebarLinkIconActive'>
                              <Settings color='#485aff' size={24} />
                         </div>
                         <div className='sidebarLinkText'>Settings</div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/about'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <Projects color='#ffffff' size={24} />
                         </div>
                         <div className='sidebarLinkIconActive'>
                              <Projects color='#485aff' size={24} />
                         </div>
                         <div className='sidebarLinkText'>Projects</div>
                    </div>
               </NavLink>
          </div>
     )
}
