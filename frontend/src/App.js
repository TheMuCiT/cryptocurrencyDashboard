import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'
import { Sidebar } from './components/sideBar/Sidebar'
import TopBar from './components/topBar/TopBar'

import './App.css'

function App() {
     return (
          <Router>
               <Sidebar />
               <TopBar />
               <div className='main'>
                    <Switch>
                         <Route exact path='/' component={Dashboard} />
                         <Route path='/about' component={Dashboard} />
                         <Route path='/contact' component={Dashboard} />
                    </Switch>
               </div>
          </Router>
     )
}

export default App
