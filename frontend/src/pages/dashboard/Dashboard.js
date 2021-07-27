import React, { useState } from 'react'
import DropdownNotification from '../../components/dropdown/DropdownNotification'
import Calendar from '../../components/calendar/Calendar'
import DropdownStatus from '../../components/dropdown/DropdownStatus'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

import Search from '../../icons/Search'
import BackArrow from '../../icons/BackArrow'
import LogsIcon from '../../icons/LogsIcon'
import SalaryFundIcon from '../../icons/SalaryFundIcon'
import ActsIcon from '../../icons/ActsIcon'
import WorkersIcon from '../../icons/WorkersIcon'
import AddIcon from '../../icons/AddIcon'
import DropDownArrowIcon from '../../icons/DropDownArrowIcon'

import WorkingIMG from '../../images/Working.jpg'
import DocumentIMG from '../../images/Document.jpg'
import DataIMG from '../../images/Data.jpg'

import './dashboard.css'

const Dashboard = () => {
     const [dropdown, setdropdown] = useState(false)
     const [dropdownStatus, setdropdownStatus] = useState(false)

     const onMouseEnter = () => {
          setdropdown(true)
     }
     const onMouseLeave = () => {
          setdropdown(false)
     }
     const onMouseEnterStatus = () => {
          setdropdownStatus(true)
     }
     const onMouseLeaveStatus = () => {
          setdropdownStatus(false)
     }

     return (
          <div className='dashboardLevel'>
               <div className='dashboard'>
                    <div className='dashboardLeftTop'>
                         <BackArrow />
                         <div className='dashboardTitle'>Dashboard</div>
                    </div>
                    <div className='dashboardRightTop'>
                         <div className='dashboardDropdownWrapper'>
                              <div
                                   className='dashboardDropdown plus'
                                   onMouseEnter={onMouseEnter}
                                   onMouseLeave={onMouseLeave}
                              >
                                   {dropdown && <DropdownNotification />}
                                   <div className='buttonDropdown'>All Products</div>
                                   <div className='dashboardDropdownArrow'>
                                        <DropDownArrowIcon size={15} />
                                   </div>
                              </div>
                              <div
                                   className='dashboardDropdown'
                                   onMouseEnter={onMouseEnterStatus}
                                   onMouseLeave={onMouseLeaveStatus}
                              >
                                   {dropdownStatus && <DropdownStatus />}
                                   <div className='buttonDropdown'>Status</div>
                                   <div className='dashboardDropdownArrow'>
                                        <DropDownArrowIcon size={15} />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='dashboardSecond'>
                    <div className='dashboardLeft'>
                         <div className='dashboardSmallTitle'>Overview</div>
                         <div className='dashboardOverview'>
                              <div className='dashboardOverviewBox border'>
                                   <div className='dashboardOverviewTitle'>
                                        <LogsIcon />
                                        <div className='dashboardOverviewTitleText'>Logs</div>
                                   </div>
                                   <div className='dashboardOverviewBoxText'>437</div>
                                   <ProgressBar width={'90%'} height={'7px'} percentComplete={20} />
                              </div>
                              <div className='dashboardOverviewBox border '>
                                   <div className='dashboardOverviewTitle'>
                                        <ActsIcon />
                                        <div className='dashboardOverviewTitleText'>Acts</div>
                                   </div>

                                   <div className='dashboardOverviewBoxText'>32</div>
                                   <ProgressBar width={'90%'} height={'7px'} percentComplete={35} />
                              </div>
                              <div className='dashboardOverviewBox border'>
                                   <div className='dashboardOverviewTitle'>
                                        <WorkersIcon />
                                        <div className='dashboardOverviewTitleText'>Workers</div>
                                   </div>

                                   <div className='dashboardOverviewBoxText'>68</div>
                                   <ProgressBar width={'90%'} height={'7px'} percentComplete={55} />
                              </div>
                              <div className='dashboardOverviewBox'>
                                   <div className='dashboardOverviewTitle'>
                                        <SalaryFundIcon />
                                        <div className='dashboardOverviewTitleText'>Salary fund</div>
                                   </div>

                                   <div className='dashboardOverviewBoxText'>2461$</div>
                                   <ProgressBar width={'90%'} height={'7px'} percentComplete={70} />
                              </div>
                         </div>
                    </div>
                    <div className='dashboardRight'>
                         <div className='dashboardSmallTitle'>Calendar</div>
                         <div className='dashboardCalendarFilter2'>
                              <div style={{ color: '#485aff', fontWeight: 'bold' }}>Filter</div>
                         </div>
                         <div className='dashboardCalendarWrapper'>
                              <div className='dashboardCalendar'>
                                   <Calendar />
                              </div>
                              <div className='dashboardCalendarMeetings'>
                                   <div className='dashboardCalendarFilter'>
                                        <div style={{ color: '#485aff', fontWeight: 'bold' }}>Filter</div>
                                   </div>
                                   <div className='dashboardCalendarEvent'>
                                        <div
                                             className='verticalProgressBar'
                                             style={{ backgroundColor: 'rgb(141, 170, 211)' }}
                                        />
                                        <div className='dashboardCalendarEventWrapper'>
                                             <div className='dashboardCalendarEventTitle'>Meeting with Mark</div>
                                             <div className='dashboardCalendarEventTime'>
                                                  Meeting at 9:00 AM - 11:00 AM
                                             </div>
                                        </div>
                                   </div>
                                   <div className='dashboardCalendarEvent'>
                                        <div
                                             className='verticalProgressBar'
                                             style={{ backgroundColor: 'rgb(80, 135, 212)' }}
                                        />
                                        <div className='dashboardCalendarEventWrapper'>
                                             <div className='dashboardCalendarEventTitle'>Lunch berak</div>
                                             <div className='dashboardCalendarEventTime'>
                                                  Meeting at 11:00 AM - 13:00 AM
                                             </div>
                                        </div>
                                   </div>
                                   <div className='dashboardCalendarEvent'>
                                        <div
                                             className='verticalProgressBar'
                                             style={{ backgroundColor: 'rgb(57, 120, 209)' }}
                                        />
                                        <div className='dashboardCalendarEventWrapper'>
                                             <div className='dashboardCalendarEventTitle'>Call to car service</div>
                                             <div className='dashboardCalendarEventTime'>
                                                  Call to car service at 13:30 PM
                                             </div>
                                        </div>
                                   </div>
                                   <div className='dashboardCalendarEvent'>
                                        <div
                                             className='verticalProgressBar'
                                             style={{ backgroundColor: 'rgb(28, 103, 209)' }}
                                        />
                                        <div className='dashboardCalendarEventWrapper'>
                                             <div className='dashboardCalendarEventTitle'>Lock the Office</div>
                                             <div className='dashboardCalendarEventTime'>
                                                  Lock the office 14:30 PM
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='dashboardThird'>
                    <div className='dashboardLeft up'>
                         <div className='dashboardSmallTitle'>Tasks</div>
                         <div className='dashboardTasks'>
                              <div className='dashboardSearchContainer'>
                                   <div className='dashboardSearchIcon'>
                                        <Search color='black' size={20} />
                                   </div>
                                   <input
                                        type='text'
                                        className='dashboardSearchInput'
                                        placeholder='Search task....'
                                   />
                              </div>
                              <div className='dashboardTaskList'>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={WorkingIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={DocumentIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img src={DataIMG} alt='img' className='dashboardTaskItemIMG' />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={WorkingIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={WorkingIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={DocumentIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img src={DataIMG} alt='img' className='dashboardTaskItemIMG' />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={WorkingIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img
                                                       src={DocumentIMG}
                                                       alt='img'
                                                       className='dashboardTaskItemIMG'
                                                  />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <div className='dashboardTaskItemIMGWrapper'>
                                                  <img src={DataIMG} alt='img' className='dashboardTaskItemIMG' />
                                             </div>
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size={20} />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='dashboardRight'>
                         <div className='dashboardSmallTitle'>Show task info</div>
                         <div className='dashboardShowtaskinfoWrapper'>
                              <div className='dashboardShowtaskinfoTasktitle'>
                                   <div className='dashboardShowtaskinfoTasktitleLeft'>Task Title...</div>
                                   <div className='dashboardShowtaskinfoTasktitleRight'>...</div>
                              </div>
                              <div className='dashboardShowtaskinfoList'>
                                   <div className='dashboardShowtaskinfoListLeft'>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Assignee</div>
                                             <div className='dashboardShowtaskinfoItemAction'>No assignee</div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Due data</div>
                                             <div className='dashboardShowtaskinfoItemAction'>No due date</div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Projects</div>
                                             <div className='dashboardShowtaskinfoItemAction'>In progess</div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Dependencies</div>
                                             <div className='dashboardShowtaskinfoItemAction'>
                                                  Add dependencies
                                             </div>
                                        </div>
                                   </div>
                                   <div className='dashboardShowtaskinfoListRight'>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Effort</div>
                                             <div className='dashboardShowtaskinfoItemAction'>-</div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Priority</div>
                                             <div className='dashboardShowtaskinfoItemAction'>-</div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem'>
                                             <div className='dashboardShowtaskinfoItemName'>Description</div>
                                             <div className='dashboardShowtaskinfoItemAction'>
                                                  Add more details to this task...
                                             </div>
                                        </div>
                                        <div className='dashboardShowtaskinfoListItem button'>
                                             <div className='dashboardShowtaskinfoListItemAdd'>+</div>
                                             <div className='dashboardShowtaskinfoItemName'>Add subtask</div>
                                        </div>
                                   </div>
                              </div>
                              <div className='dashboardShowInfoAdd'>
                                   <div className='dashboardShowInfoAddIcon'>
                                        <img src={DataIMG} alt='img' className='dashboardShowInfoAddIMG' />
                                   </div>
                                   <div className='dashboardShowInfoAddDetails'>
                                        <div className='dashboardShowInfoAddDetailsText'>
                                             Add more details to this task...
                                        </div>
                                        <div className='dashboardShowInfoAddDetailsArrow'>
                                             <AddIcon size={20} />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Dashboard
