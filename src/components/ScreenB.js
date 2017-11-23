import React from 'react'
import { Link } from 'react-router-dom'
const ScreenB = () => (
    <div>
        <h1>This is screen B</h1>
        <li><Link to='/'>Go to Screen A</Link></li>
    </div>
)

export default ScreenB;