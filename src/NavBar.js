import React from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import DemoJSON1 from './jsondemo/DemoJSON1'
import DemoJSON2 from './jsondemo/DemoJSON2'
import PromiseDemo from './promisedemo/PromiseDemo'
import FetchAPIDemo from './apidemo/FetchAPIDemo'
import AxiosDemo from './apidemo/AxiosDemo'
import Demo1 from './asyncdemo/Demo1'
import Demo2 from './asyncdemo/Demo2'
import './navbar.css';

export default function NavBar() {
  return (
    <div >
      <ul className='navbar'>
  <li><Link to="/">Demo JSON 1</Link></li>
  <li><Link to="/demo2">Demo JSON 2</Link></li>
  <li><Link to="/promise">Promise</Link></li>
  <li><Link to="/fetchapi">FetchApi Demo</Link></li>
  <li><Link to="/axiosapi">Axios Api Demo</Link></li>
  <li><Link to="/test1">Fetch Api Demo (async/await)</Link></li>
  <li><Link to="/test2">Axios Api Demo (async/await)</Link></li>
</ul>

        <Routes>
            <Route path='/' element={<DemoJSON1/>}/>
            <Route path='/demo1' element={<DemoJSON1/>}/>
            <Route path='/demo2' element={<DemoJSON2/>}/>
            <Route path='/promise' element={<PromiseDemo/>}/>
            <Route path='/fetchapi' element={<FetchAPIDemo/>}/>
            <Route path='/axiosapi' element={<AxiosDemo/>}/>
            <Route path='/test1' element={<Demo1/>}/>
            <Route path='/test2' element={<Demo2/>}/>

        </Routes>

    </div>
  )
}
