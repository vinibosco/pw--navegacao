import './app.css'
import react from "react"
import {browserrouter as router} from 'react-router-dom'
import menu from '../componets/layout/content'

const app = props=> (
    <div classname="app">
        <router>
            <menu/>
            <content/>
        </router>
    </div>

)
export default app
