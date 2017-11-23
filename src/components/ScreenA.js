import React from 'react'
import { Link } from 'react-router-dom'
const ScreenA = () =>(
    <div>
    <h1>This is screen A</h1>
    <li><Link to='/b'>Go to screen B</Link></li>
    </div>
)

export default ScreenA;