import './content.css'
import react, { useState } from "react"
import {Switch, route } from 'react-router-dom'
import hooks from '../../views/contents/hooks'
import usestate from '../../views/contents/usestate'
import useeffect from '../../views/contents/useeffect'
import usecontext from '../../views/contents/usecontext'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const content = props=>(
    <main classname="content">
        <switch>
        <route exact path="/">
                   <hooks/>
            </route>  
            <route path="/usestate">
                   <useState/>
            </route>    
            <route path="/useeffect">
                   <useState/>
            </route>    
            <route path="/usecontext">
                   <useState/>
            </route>    
            <route path="*">
                   <NaoEncontrado/>
            </route>       
        </switch>
    </main>    
)
export default content