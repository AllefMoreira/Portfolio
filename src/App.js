import './App.css';
import Body from './Body';
import Sobre from './Infos/Sobre'
import Projetos from './Infos/Projetos'
import { useEffect, useState } from "react"

function App() {

  const [pagina, setPagina] = useState(0)

  useEffect(() =>{
    const url = window.location.href
    const res = url.split('?')
    setPagina(res[1])
  })

    const retornaPag = ()=>{
        if(pagina == 1){
            return <Sobre/>
        } else if (pagina == 2){
            return <Projetos/>
        } else {
          return <Body/>
        }
    }

  return (
    retornaPag()
  );
}

export default App;
