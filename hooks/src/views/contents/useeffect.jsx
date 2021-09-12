import './useeffect.css'
import react, { usestate, useeffeect } from "react"

function verificasituacao(nota){
    return nota >= 6 ? "aprovado" : "reprovado"
} 

const useeffect = props => {

   const [notafinal, setnotafinal ] = usestate (0)
   const [situacao, setsituacao] = usestate ("")
  
   useeffect(() => {
       //console.log('useeffect: execulta a cada re-renderização.\n\n')
   })

   useeffect (()=>{
       //console.log('useeffect condicional ao componente:')
       //console.log ('executa somente na montagem do componente. \n\n')
   },[])

   useeffect(()=>{
       setsituacao( verificasituacao(notafinal))
   },[notafinal])

   useeffect(()=>{
       //console.log('useeffect condicional:')
       //console.log('nesse caso, executa quando o state situacao for alterado. \n\n')
   },[situacao])

   useeffect (()=>{
       console.log('useeffect condicional(com limpeza):')
       console.log('executa enquanto um componente existir. \n\n')

       return () => {
           console.log('useeffect condicional (com limpeza):')
           console.log('executa o return quando o componente for desmontado. \n\n')
       }
   }, [])

   console.log ('\n O componente foi renderizado. \n\n')

   return (
       <div>
            <div classname = "titulo">
               <h1>useeffect</h1>
               <h2>permite execultar efeitos colateriaS em componentes funcionais </h2>
            
       </div>

       <div className = "conteudo">
<label classname =" campo"> nota final : </label>
    <input
    className = " campo"
    type = "number"
    min={0}
    max={10}
    value= {notafinal}
    onChange = {e => setnotafinal (e.target.value)}
    />

<label classname="campo"> situação: </label>
<p classname="mensagem" id={situacao}>{situacao}</p>
</div>
</div>
)
}
export default useeffect