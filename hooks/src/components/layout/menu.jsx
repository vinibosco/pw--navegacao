import './menu.css'
import react from "react"
import {link} from 'react-router-dom'

const menu = props=>(
    <aside classname="menu">
        <nav>
            <ul>
                <li>
                    <link to="/">hooks</link>
                </li>
                <li>
                    <link to="usestate">usestate()</link>
                </li>
                <li>
                    <link to="/useeffect">useeffect() </link>
                </li>
                <li>
                    <link to="/usecontext">usecontext() </link>
                </li>
            </ul>
        </nav>
    </aside>        
)
export default menu