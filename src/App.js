import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import Updateemp from './components/Updateemp';
import Customers from './components/Customers';
import PasswordChange from './components/PasswordChange';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import EmailSend from './components/EmailSend'
function App() { 
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/EmployeeDashboard" element ={<EmployeeDashboard/>}/>
        <Route path="/Updateemp" element ={<Updateemp/>}/>
        <Route path="/Customers" element ={<Customers/>}/>
        <Route path="/PasswordChange" element={<PasswordChange/>}/>
        <Route path="/EmployeeDetails" element={<EmployeeDetails/>}/>
        <Route path="/AddEmployee" element={<AddEmployee/>}/>
        <Route path="/EmailSend" element={<EmailSend/>}/>

      </Routes> 
    </BrowserRouter>
  {/* // make the above 4 four dropdowns in in one useState as below active Page in update emp 
  //   And make the home button work 1st page should load on cick of home icon*/}




    </div>
  );
}

export default App;
