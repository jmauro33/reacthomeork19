import React from "react";

function Table(props){
 return (<table class="table">
 <thead>
   <tr>
     <th scope="col">Name</th>
     <th scope="col">DOB</th>
     <th scope="col">Position</th>
    
   </tr>
 </thead>
 <tbody>
   <tr>
     <th scope="row">1</th>
     <td>Mark</td>
     <td>Otto</td>
     <td>@mdo</td>
   </tr>
   <tr>
     <th scope="row">2</th>
     <td>Jacob</td>
     <td>Thornton</td>
     <td>@fat</td>
   </tr>
   <tr>
     <th scope="row">3</th>
     <td>Larry</td>
     <td>the Bird</td>
     <td>@twitter</td>
   </tr>
 </tbody>
</table>)

}

export default Table;