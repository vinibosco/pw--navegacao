import react, {usestate} from 'react'

const contextoinicial = {
    contextonome: 'user',
    contextosenha: 123456
}
export const appcontexto = react.createContext(contextoinicial)

const store = props => {
    const [contexto, setcontexto]=usestate(contextoinicial)

 function atualizacontexto(key, value){
     setcontexto({
         ...contexto,
         [key]: value
     })
 }
 
 return(
     <appcontexto.provider value={{
         contextonome: contexto.contextonome,
         contextosenha: contexto.contextosenha,
         setcontextonome: novonome => atualizacontexto('contextonome', novonome),
         setcontextosenha: novesenha => atualizacontexto('contextosenha', novasenha)
     }}>
         {props.children}
     </appcontexto.provider>
 )
}
export default store