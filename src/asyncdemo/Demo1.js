import React, { useEffect, useState } from 'react';
export default function Demo1()
{
    const [data,setData] = useState([]) // empty array to data state object)
    const [error, setError] = useState(null)
    const fetchdata = async () => { // using async we use promise
        try
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")     // fetch is an API
            const result = await response.json() // responce lo unnadi manam json lo ki marustunnam , adi manam result lo store chestam
            setData(result) // await is used to send the responce and return the promise
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
    return <div>
        <h3> Fetch Demo function 1 using async/await</h3>
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
                    </ul>
                ))
               }
            </div>:
            <p> {error}</p>
        }

    </div>
}
