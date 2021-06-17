import './content.css'
import react from "react"
import {Switch, route } from 'react-router-dom'
import home from '../../views/contents/home'
import conteudo01 from '../../views/contents/conteudo01'
import conteudo02 from '../../views/contents/conteudo02'
import conteudo03 from '../../views/contents/conteudo03'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const content = props=>(
    <main classname="content">
        <switch>
            <route exact path="/">
                <home/>
            </route>
            <route path="/conteudo01/usuario">
                   <conteudo01/>
            </route>   
            <route path="/conteudo02">
                   <conteudo02/>
            </route>   
            <route path="/conteudo03">
                   <conteudo03/>
            </route>   
            <route path="*">
                   <NaoEncontrado/>
            </route>       
        </switch>

    </main>    
)
export default content