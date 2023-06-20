import {BsGithub, BsWhatsapp, BsLinkedin, BsEnvelopeFill} from 'react-icons/bs'



export default function Body(){

    const linkPag = (p) =>{
        if(p == 1){
          window.open(window.location.href+'?1')
        } else if (p == 2){
          window.open(window.location.href+'?2')
        }
      }

    return(
        <div className="body">
            <div className="header">
                <a href="mailto:allef.moreira03@gmail.com" target="_blank"> <span> E-mail - </span> <icon><BsEnvelopeFill/></icon> </a>
                <a href="https://www.linkedin.com/in/allef-moreira-7b99b01b6/" target="_blank" > <span>Linkedin -</span> <icon><BsLinkedin/></icon> </a>
                <a href="https://github.com/AllefMoreira" target="_blank"> <span>Git Hub - </span> <icon><BsGithub/></icon> </a>
                <a href="https://wa.me/5513988677686" target="_blank"> <span>WhatsApp</span> <icon><BsWhatsapp/></icon> </a>
            </div>

            <div className="apresentation">
                <h1>Allef F. Moreira</h1>
                <h4>Desenvolvedor web</h4>
            </div>

            <div className="content"> 
                <a target="" href="http://localhost:3000?2">Projetos</a>
                <a target="" href="http://localhost:3000?1">Sobre</a>
            </div>
        </div>
    )
}