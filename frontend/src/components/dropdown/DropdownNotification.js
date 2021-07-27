import React, { useState } from 'react'

import WorkingIMG from '../../images/Working.jpg'
import DocumentIMG from '../../images/Document.jpg'
import DataIMG from '../../images/Data.jpg'

import './dropdownNotification.css'

const DropdownNotification = () => {
     const [click, setclick] = useState(false)

     const handleClick = () => setclick(!click)
     return (
          <div className='dropNoti'>
               <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <div className='dropNotiTitle'>Notifications</div>
                    <div className='dropnNotiList'>
                         <div className='dropnNotiItem'>
                              <div className='dropNotiIma'>
                                   <img src={WorkingIMG} alt='img' className='dropNotiImg' />
                              </div>
                              <div className='dropNotiMiddle'>
                                   <div className='dropnNotiName'>Jon Wick</div>
                                   <div className='dropnNotiInfo'>Invited you to the group</div>
                                   <div className='dropnNotiMessage'>
                                        Great Day! Really enjoying the work you gave me for this project
                                   </div>
                              </div>
                              <div className='dropnNotiTime'>5mins ago</div>
                         </div>
                         <div className='dropnNotiItem'>
                              <div className='dropNotiIma'>
                                   <img src={DocumentIMG} alt='img' className='dropNotiImg' />
                              </div>
                              <div className='dropNotiMiddle'>
                                   <div className='dropnNotiName'>DR. Kayn</div>
                                   <div className='dropnNotiInfo'>Breakfast</div>
                                   <div className='dropnNotiMessage'>
                                        Don't forget youe meeting with Dr. Kayn at - 9:00 am.
                                   </div>
                              </div>
                              <div className='dropnNotiTime'>35mins ago</div>
                         </div>
                         <div className='dropnNotiItem'>
                              <div className='dropNotiIma'>
                                   <img src={DataIMG} alt='img' className='dropNotiImg' />
                              </div>
                              <div className='dropNotiMiddle'>
                                   <div className='dropnNotiName'>Ana Peterson</div>
                                   <div className='dropnNotiInfo'>Solution</div>
                                   <div className='dropnNotiMessage'>
                                        Interview with Ana Peterson in LA, 5410 James.st 15 st, at 13:45 PM
                                   </div>
                              </div>
                              <div className='dropnNotiTime'></div>
                         </div>
                    </div>
                    <div className='dropNotiTitle'>Show all notifications</div>
               </div>
          </div>
     )
}

export default DropdownNotification
