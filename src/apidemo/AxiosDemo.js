import React, { useState, useEffect } from 'react';
import axios from 'axios'
export default function AxiosDemo() 
{
const [data,setData] = useState([])
 const [error,setError] = useState(null)
 const fetchdata = () => 
 {
  axios.get("https://jsonplaceholder.typicode.com/users"). // axios an 3rd party.
  then((responce) => {
    return responce.data
  }).catch((err) => {
    setError(err)
  });
 }


useEffect(() => {
  fetchdata()
 }, [])

return (
    <div>
      <h3> Axios API Demo using JSON Placeholder API - 2200030837</h3>
      {
        (data!=null) ?
        <div >
          {
            data.map ( (user) => 
            (
              <div key={user.id}>
                <h3> User : {user.id}</h3>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
              </div>
            )

            )
          }
        </div>:

        <p>Error</p>
      }
    </div>
  )
}
