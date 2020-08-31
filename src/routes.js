<<<<<<< HEAD
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Timelog from './components/Timelog'
import Reports from './components/Reports'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
import { Logout } from './components/Logout/Logout'
import Login from './components/Login'
import ForcePasswordUpdate from './components/ForcePasswordUpdate'
import ProtectedRoute from './components/common/ProtectedRoute'
import UpdatePassword from './components/UpdatePassword'
import Header from './components/Header'
import Projects from './components/Projects'
import UserManagement from './components/UserManagement'
import Members from './components/Projects/Members'
import WeeklySummariesReport from './components/WeeklySummariesReport'
import 'react-toastify/dist/ReactToastify.css'
import { UserRole } from './utils/enums'
=======
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Timelog from './components/Timelog';
import Reports from './components/Reports';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import { Logout } from './components/Logout/Logout';
import Login from './components/Login';
import ForcePasswordUpdate from './components/ForcePasswordUpdate';
import ProtectedRoute from './components/common/ProtectedRoute';
import UpdatePassword from './components/UpdatePassword';
import Header from './components/Header';
import Projects from './components/Projects';
import UserManagement from './components/UserManagement';
import Members from './components/Projects/Members';
import Teams from './components/Teams';
import 'react-toastify/dist/ReactToastify.css';
import { UserRole } from './utils/enums';
>>>>>>> WBS2.2.1

export default (
  <React.Fragment>
    <Header />
    <ToastContainer />
    <Switch>
<<<<<<< HEAD
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <ProtectedRoute path="/timelog/:userId" exact component={Timelog} />
      <ProtectedRoute path="/reports" exact component={Reports} />
      <ProtectedRoute path="/weeklysummariesreport" exact component={WeeklySummariesReport} allowedRoles={[UserRole.Administrator, UserRole.Manager, UserRole.CoreTeam]} />
      <ProtectedRoute path="/projects" exact component={Projects} />
      <ProtectedRoute path="/usermanagement" exact component={UserManagement} allowedRoles={[UserRole.Administrator]} />
      <ProtectedRoute path="/project/members/:projectId" component={Members} />

      <Route path="/login" component={Login} />

      <ProtectedRoute path="/userprofile/:userId" component={UserProfile} />
      <ProtectedRoute path="/updatepassword/:userId" component={UpdatePassword} />
      <Route path="/Logout" component={Logout} />
      <Route path="/forcePasswordUpdate/:userId" component={ForcePasswordUpdate} />
      <ProtectedRoute path="/" exact component={Dashboard} />
    </Switch>
  </React.Fragment>
)
=======
      <ProtectedRoute path='/dashboard' exact component={Dashboard} />
      <ProtectedRoute path='/timelog/:userId' exact component={Timelog} />
      <ProtectedRoute path='/reports' exact component={Reports} />
      <ProtectedRoute path='/projects' exact component={Projects} />
      <ProtectedRoute
        path='/usermanagement'
        exact
        component={UserManagement}
        allowedRoles={[UserRole.Administrator]}
      />
      <ProtectedRoute path='/project/members/:projectId' component={Members} />

      <ProtectedRoute path='/teams' component={Teams} />

      <Route path='/login' component={Login} />

      <ProtectedRoute path='/userprofile/:userId' component={UserProfile} />
      <ProtectedRoute path='/updatepassword/:userId' component={UpdatePassword} />
      <Route path='/Logout' component={Logout} />
      <Route path='/forcePasswordUpdate/:userId' component={ForcePasswordUpdate} />
      <ProtectedRoute path='/' exact component={Dashboard} />
    </Switch>
  </React.Fragment>
);
>>>>>>> WBS2.2.1
