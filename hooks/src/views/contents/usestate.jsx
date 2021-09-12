import './usestate.css'
import react, { usestate, useContext } from "react"

import {appcontexto} from '../../data/store'

const usestate = props => {

const {contextonome, setcontextonome}= usecontext(appcontexto)

   const [nome, setnome] = usestate ("")
   const [sobrenome, setsobrenome] = usestate ("")
   const [mensagem, setmensagem] = usestate ("")

function alteranomecontexto(nome){
    setcontextonome(nome)
}

return (
    <div>
         <div classname = "titulo">
            <h1>usecontext</h1>
            <h2>aceita um obejeto de contexto e retorna o valor atual do contexto  </h2>
         
    </div>

    <div className = "conteudo">

<label className="campo">acesso encapsulado ao contexto (store) </label>
<p className="mensagem">nome: {contextonome}</p>
<p className="mensagem">senha: {contextosenha}</p>
</div>
</div> 
)
}
export default usecontext