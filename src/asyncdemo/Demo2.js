import React, { useEffect, useState } from 'react';
import axios from 'axios'
export default function Demo2()
{
    const [data,setData] = useState([]) // empty array to data state object)
    const [error, setError] = useState(null)

    const fetchdata = async () => { // using async we use promise
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")  
            setData(response.data)
            // try catch is easy than then and catch.
        }
        catch(e)
        {
            setError(e.message) // it gives message as throw in java

        }
    }
    useEffect(() => {
        fetchdata() 
    }, []);
//async to return 
    return <div>
        <h3> Axios Demo function 2 using async/await</h3>
        {
            data.length>0?
            <div>
               {
                 data.map( (todo,index) => (
                    
                    <ul key={index}>
                        <h4> ID: {todo.id}</h4>
                        <li>User ID: {todo.userId}</li>
                        <li> Title : {todo.title}</li>
                        <li>status: {todo.completed ? 
                        <font style={{color:"green"}}>Completed</font> : 
                        <font style={{color:"red"}}>Not Completed</font> }</li>
                        <hr></hr>
                    </ul>
                ))
               }
            </div>:
            <p> {error}</p>
        }

    </div>
}
