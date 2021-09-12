import './usecontext.css'
import react, {useContext} from "react"

import {appcontexto} from '../../data/store'

const usecontext = props => {

   const [contextonome, setcontextonome] = usecontext (appcontexto)
   const [contextosenha, setcontextosenha] = usecontext (appcontexto)

   return (
       <div>
            <div classname = "titulo">
               <h1>usestate</h1>
               <h2>manipula estados em componentes funcionais </h2>
            
       </div>

       <div className = "conteudo">

  <label className="campo">acesso encapsulado ao contexto (store) </label>
  <p className="mensagem">nome: {contextonome}</p>
  <p className="mensagem">senha: {contextosenha}</p>
  </div>
  </div> 
)
}
export default usestate