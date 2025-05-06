import { useEffect, useState } from 'react';
import './App.css'

const App = () => {
   const [data, setData] =useState([])
  useEffect(() =>{
     fetch('http://localhost:3000/students')
     .then(res => res.json())
     .then(data => setData(data))
     .catch(err => console.log(err));
  }, [])
  return ( 
    <div>
      <table>
      <thead>
         <th>id</th>
         <th>name</th>
         <th>email</th>
         <th>city</th>
         <th>phone_N</th>
      </thead>
      <tbody>
         {data.map((d, i) =>(
            <tr key={i}>
               <td>{d.id}</td>
               <td>{d.fullName}</td>
               <td>{d.email}</td>
               <td>{d.city}</td>
               <td>{d.phone_number}</td>
            </tr>
         ))}
      </tbody>
      </table>
    </div>
   );
}
 
export default App;

