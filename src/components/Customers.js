import React , {useState, useEffect }from 'react'
import axios  from 'axios';


export default function Customers() {
    const [customers, setcustomers] = useState([]);
    // const [updatedName, setUpdatedName] = useState('');
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/customers/Login/customerTable");
        const data = response.data;
        setcustomers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const deleteEmployee = async (id) => {
      try {
        await axios.delete(`http://localhost:8085/api/customers/deleteCustomer/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const updateEmployee = async (id, updatedData) => {
      try {
        await axios.put(`http://localhost:8085/api/customers/updateOneCustomer/${id}`, updatedData);
        fetchData();
      } catch (error) {
        console.error('Error:', error);
      }
    };
        
 
  return (
    <div className="employee-dashboard">
    <h2>Customers Table</h2>
    <table id="employeeTable" className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody>
        {customers.map(customer => (
          <tr key={customer.Customer_Id}>
            <td>{customer.Customer_Id}</td>
            <td>{customer.Customer_Name}</td>
            <td>{customer.Phone}</td>
            <td>{customer.Gender}</td>
            <td>{customer.Age}</td>
            <td>     
                <button className='DeleteButton' onClick={() => deleteEmployee(customer.Customer_Id)}>Delete</button>                          
                  {/* <button onClick={() => updateEmployee(employee.Emp_Id)}>Update</button> */}             
              <button className='EditButton' onClick={() => updateEmployee(customer.Customer_Id, { Customer_Id: 'Vishal' })}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
