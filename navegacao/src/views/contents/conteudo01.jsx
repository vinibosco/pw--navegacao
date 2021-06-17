import react from "react"
import { useparams} from 'react-router-dom'

const conteudo01 = props => {
    const{usuario} = useparams()
    return (
        <div>
            <h1>conteudo 01</h1>
            <h3>usuario: {usuario}</h3>
        </div>    
    )
}
export default conteudo01 