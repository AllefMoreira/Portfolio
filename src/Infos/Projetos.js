import projeto1 from '../img/Projeto1.png'
import projeto2 from '../img/Projeto2.png'
import projeto3 from '../img/Projeto3.png'


export default function Projeto(){

    function trocaElementoProj1(){
        let imagemProjeto = document.getElementById('img')
        imagemProjeto.style.opacity = '1'
        imagemProjeto.style.backgroundImage = `url(${projeto1})`
    }

    function trocaElementoProj2(){
        let imagemProjeto = document.getElementById('img')
        imagemProjeto.style.opacity = '1'
        imagemProjeto.style.backgroundImage = `url(${projeto2})`
    }

    function trocaElementoProj3(){
        let imagemProjeto = document.getElementById('img')
        imagemProjeto.style.opacity = '1'
        imagemProjeto.style.backgroundImage = `url(${projeto3})`
    }

    function voltaElemento(){
        let imagemProjeto = document.getElementById('img')
        imagemProjeto.style.opacity = '0'
    }
    return(
        <div>
            <div className="Body-projetos">
                <h1>Projetos</h1>
                <div className="projeto-content">
                    <div className="img-content">
                        <div id="img"></div>
                    </div>
                    <div id="nome" className="nome-content">
                        <ul>
                            <li title='Um pequeno projeto utilizando React e firebase, para entender melhor o firebase' 
                            onMouseOver={() => trocaElementoProj1()} onMouseOut={() => voltaElemento()}>
                                <a target='_blank' href='https://projeto-agenda-ad2bc.web.app'>Agenda</a></li>
                            <li title='Projeto durante a danki Code, com o objetivo de praticar o firebase. A intenção era de funcionar tanto a postagem de vídeo quanto a de fotos, com o foco no mobile.' 
                            onMouseOver={() => trocaElementoProj2()} onMouseOut={() => voltaElemento()}>
                                <a target='_blank' href='https://projeto-facebook-35a06.web.app'>Clone-Facebook</a>
                            </li>
                            <li title='Um projeto com o objetivo de praticar a autenticação do usuário, usando firebase.'
                            onMouseOver={() => trocaElementoProj3()} onMouseOut={() => voltaElemento()}>
                                <a target='_blank' href='https://projeto-instagram-8398d.web.app'>Projeto-Instagram</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="projetos-navegacao">
                        <a target="" href={window.location.href.split('/')[0] + '?0'}>Home</a>
                        <a target="" href={window.location.href.split('/')[0] + '?1'}>Sobre</a>
                    </div>
            </div>

            
        </div>
    )
}