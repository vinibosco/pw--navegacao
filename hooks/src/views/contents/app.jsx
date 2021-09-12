import './app.css'
import react from "react"
import {browserrouter as router} from 'react-router-dom'
import menu from '../componets/layout/menu'
import content from '../components/layout/contents'

import store from '../data/store'

const app = props=> {
    return(
        <store>
            <div className="app">
                <router>
                    <menu/>
                    <content/>
                </router>
            </div>
        </store> 
    )
}
export default app
