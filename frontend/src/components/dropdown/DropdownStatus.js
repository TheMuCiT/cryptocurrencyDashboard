import React, { useState } from 'react'

import Analytics from '../../icons/Analytics'
import Profile from '../../icons/Profile'
import Settings from '../../icons/Settings'
import Star from '../../icons/Star'

import './dropdownStatus.css'

const DropdownStatus = () => {
     const [click, setclick] = useState(false)

     const handleClick = () => setclick(!click)
     return (
          <div className='dropStatus'>
               <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <div className='dropStatusList'>
                         <div className='dropStatusItem'>
                              <Profile color='black' size={25} />
                              <div className='dropStatusText'> Profile</div>
                         </div>
                         <div className='dropStatusItem'>
                              <Analytics color='black' size={25} />
                              <div className='dropStatusText'> Analytics</div>
                         </div>
                         <div className='dropStatusItem'>
                              <Settings color='black' size={25} />
                              <div className='dropStatusText'> Settings & Privacy</div>
                         </div>
                         <div className='dropStatusItem'>
                              <Star color='black' size={25} />
                              <div className='dropStatusText'> Help center</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default DropdownStatus
