import React from 'react'

import Search from '../../icons/Search'
import Calendar from '../../components/calendar/Calendar'

import './dashboard.css'

const Dashboard = () => {
     return (
          <div className='dashboardLevel'>
               <div className='dashboard'>
                    <div className='dashboardLeftTop'>
                         <div className='dashboardTitle'>Dashboard</div>
                    </div>
                    <div className='dashboardRightTop'>
                         <div className='dashboardDropdownWrapper'>
                              <div className='dashboardDropdown'>
                                   <button onclick='myFunction()' className='buttonDropdown'>
                                        All Products
                                   </button>
                                   <div id='myDropdown' className='dashboardDropdown-content'>
                                        <a href='/'>First</a>
                                        <a href='/'>Second</a>
                                        <a href='/'>third</a>
                                   </div>
                              </div>
                              <div className='dashboardDropdown'>
                                   <button onclick='myFunction()' className='buttonDropdown'>
                                        Status
                                   </button>
                                   <div id='myDropdown' className='dashboardDropdown-content'>
                                        <a href='/'>First</a>
                                        <a href='/'>Second</a>
                                        <a href='/'>third</a>
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
                                   Logs
                                   <div className='dashboardOverviewBoxText'>437</div>
                                   <div className='progress'>
                                        <div className='progress-done' data-done='70' />
                                   </div>
                              </div>
                              <div className='dashboardOverviewBox border '>
                                   Acts<div className='dashboardOverviewBoxText'>32</div>
                                   <div className='progress'>
                                        <div className='progress-done' data-done='70' />
                                   </div>
                              </div>
                              <div className='dashboardOverviewBox border'>
                                   Workers<div className='dashboardOverviewBoxText'>68</div>
                                   <div className='progress'>
                                        <div className='progress-done' data-done='70' />
                                   </div>
                              </div>
                              <div className='dashboardOverviewBox'>
                                   Salary fund<div className='dashboardOverviewBoxText'>2461$</div>
                                   <div className='progress'>
                                        <div className='progress-done' data-done='70' />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='dashboardRight'>
                         <div className='dashboardSmallTitle'>Calendars</div>
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
                                        <Search color='black' size='20' />
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
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Barton waited twenty always repair in within we do. an delighted
                                                  offending curiosity my is dashwoods at.
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Through studied shyness evening bed
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemTextSmall'>Nov 18</div>
                                        </div>
                                   </div>
                                   <div className='dashboardTaskItem'>
                                        <div className='dashboardTaskItemLeft'>
                                             <Search color='black' size='20' />
                                             <div className='dashboardTaskItemText'>
                                                  Tolerably earnestly middleton extremely distrusts she boy now
                                                  not...
                                             </div>
                                        </div>
                                        <div className='dashboardTaskItemRight'>
                                             <Search color='black' size='20' />
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
                                   <div className='dashboardShowtaskinfoListItem'>
                                        <div className='dashboardShowtaskinfoItemName'>Assignee</div>
                                        <div className='dashboardShowtaskinfoItemProgress'>No assignee</div>
                                        <div className='dashboardShowtaskinfoItemSubtask'>Effort</div>
                                        <div className='dashboardShowtaskinfoItemDetails'>-</div>
                                   </div>
                                   <div className='dashboardShowtaskinfoListItem'>
                                        <div className='dashboardShowtaskinfoItemName'>Due date</div>
                                        <div className='dashboardShowtaskinfoItemProgress'>No due date</div>
                                        <div className='dashboardShowtaskinfoItemSubtask'>Priority</div>
                                        <div className='dashboardShowtaskinfoItemDetails'>-</div>
                                   </div>
                                   <div className='dashboardShowtaskinfoListItem'>
                                        <div className='dashboardShowtaskinfoItemName'>Projects</div>
                                        <div className='dashboardShowtaskinfoItemProgress'>In progess</div>
                                        <div className='dashboardShowtaskinfoItemSubtask'>Description</div>
                                        <div className='dashboardShowtaskinfoItemDetails'>
                                             Add more details to this task...
                                        </div>
                                   </div>
                                   <div className='dashboardShowtaskinfoListItem'>
                                        <div className='dashboardShowtaskinfoItemName'>Dependencies</div>
                                        <div className='dashboardShowtaskinfoItemProgress'>Add dependencies</div>
                                        <div className='dashboardShowtaskinfoItemSubtask'>Add subtask</div>
                                        <div className='dashboardShowtaskinfoItemDetails'></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Dashboard
