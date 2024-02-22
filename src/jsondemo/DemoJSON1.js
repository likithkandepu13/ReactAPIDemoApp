import React, { useEffect, useState } from 'react'
import student from './data.json'
export default function DemoJSON1()
{
    const [data,setData] = useState({})
    // setData(student)
    useEffect(() => // use effect is used to contineously refresh the page.
    {
      setData(student)
    },[])

  return (
    <div align='left'>
        <h3>JSON demo 1</h3>
        <h3><u>Student Data</u></h3>
        <p>Student ID: {data.sid}</p>
        <p>Student Name: {data.sname}</p>
        <p>Student Age: {data.sage}</p>
        <p>Student Status: {data.status}</p>
        <p>Student Location: {data.location}</p>
    </div>
  )
}
