import React, { useState } from 'react'

import './dropdownNotification.css'

const DropdownNotification = () => {
     const [click, setclick] = useState(false)

     const handleClick = () => setclick(!click)
     return (
          <div>
               <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <div className='dropNotiTitle'>Notifications</div>
                    <div className='dropnNotiList'>
                         <div className='dropnNotiItem'>
                              <div className='dropNotiIma'>IMG</div>
                              <div className='dropNotiMiddle'>
                                   <div className='dropnNotiName'>Jon Wick</div>
                                   <div className='dropnNotiInfo'>Invited you to the group</div>
                                   <div className='dropnNotiMessage'>
                                        {/* Great Day! Really enjoying the work you gave me for this project */}
                                        \Don't forget youe meeting with Dr. Kayn at - 9:00 am.
                                   </div>
                              </div>
                              <div className='dropnNotiTime'>5mins ago</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default DropdownNotification
