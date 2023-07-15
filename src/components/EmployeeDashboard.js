import React , {useState, useEffect }from 'react'
import axios  from 'axios';
import EmployeeDetails from './EmployeeDetails';
import AddEmployee from './AddEmployee';
// import { Link} from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export default function EmployeeDashboard() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeCount, setEmployeeCount] = useState(0);
   const [addingEmployee,setaddingEmployee] = useState();

   const handleaddEmployee =(page) =>{
    setaddingEmployee(page);
   }
   
    useEffect(() => {   
      fetchData();
      countOfEmployee();
    }, []);
  
    const countOfEmployee = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/employees/count/countOfEmployee");
        const count = response.data.count;
        setEmployeeCount(count);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/employees/getAllEmployees");
      const data = response.data;
      setEmployees(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    const deleteEmployee = async (id) => {
      try {
        await axios.delete(`http://localhost:8085/api/employees/deleteEmployee/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    // let Location =useLocation()
  // console.log("57location", Location)

    const updateEmployee = async (id, updatedData) => {
      try {
        await axios.put(`http://localhost:8085/api/employees/updateOneEmployee/${id}`, updatedData)
        .then((res)=>{
        fetchData();
        console.log("62res :",res)
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };
        
  return (
      <div className="employee-dashboard">
        {selectedEmployee ? (
          <EmployeeDetails
            employee={selectedEmployee}
            updateEmployee={updateEmployee}        
          />

        ) : addingEmployee ==='adding Employee' ? (
          <AddEmployee/>
        ) : (
    <div className="employee-dashboard">
      <h2>Employee Table</h2>
    <div className='add-and-count-employee'>

      <div className='totalEmployee'>Total Employees: {employeeCount}</div>
      <div className='addEmployee'>
       <button onClick={()=>{handleaddEmployee('adding Employee')}}>Add Employee</button>
        </div>
    </div>

    <table id="employeeTable" className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.Emp_Id}>
            <td>{employee.Emp_Id}</td>
            <td>{employee.Emp_Name}</td>
            <td>{employee.Phone}</td>
            <td>{employee.Email}</td>
            <td>    

            <button className='DeleteButton' onClick={() => deleteEmployee(employee.Emp_Id)}>Delete</button>                          
               
            <button className='EditButton' onClick={() => selectEmployee(employee)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )}
</div>
  )
}

