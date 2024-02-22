import React, { useEffect, useState } from 'react'
import students from './students.json'
export default function DemoJSON2() {
    const [data,setData] = useState([]) //empty array
    useEffect(()=>{
        setData(students)
    },[])
  return (
    <div align = 'left'>
        <h3>JSON Demo 2</h3>
        <h4><u>Students Records</u></h4>
        {
            data.map((student,index) => (
                <p key={index}>
                  ID: {student.sid} &nbsp;&nbsp;
                  Name: {student.sname}
                </p>
            )
            )
        }
    </div>
  )
}
