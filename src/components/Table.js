import React from "react";

function Table(props){
    console.log(props);
 return (<table class="table">
 <thead>
   <tr>
     <th scope="col">Name</th>
     <th scope="col">Email</th>

    
   </tr>
 </thead>
 <tbody>
     { (props.employees.results) && props.employees.results.map( employee =>{
       return (  <tr>
           <td>{employee.name.first}</td>
           <td>{employee.email}</td>
      </tr>) 
     })}
 
 </tbody>
</table>)

}

export default Table;