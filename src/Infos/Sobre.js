import { useState } from "react"
import curriculo from './docs/curriculo-Allef.pdf'

export default function Sobre(){

    const baixaCurriculo = () => {
        fetch(curriculo).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'curriculo-Allef.pdf';
                alink.click();
            })
        })
    }

    return(
            <div className="Sobre-content">
                <div className="content-principal">
                    <h1>Sobre </h1>
                    <p>Me chamo <strong>Allef</strong>, atualmente trabalho como Analista de Suporte Jr. na <strong>SMARapd</strong> e estudante da <strong>Unip</strong>, fazendo bacharelado em <strong> Ciências da Computação</strong>.
                    <br/>Tenho preferência pelo <strong>front-end</strong>, porém tenho conhecimentos com <strong>BDD</strong> e <strong>T-SQL</strong>.</p>
                    <h4>Tecnologias</h4>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>Microsoft SQL Server</li>
                        <li>MySQL</li>
                        <li>Oracle</li>
                    </ul>
                </div>

                <div className="Sobre-home">
                    <a target="" href="http://localhost:3000?0">Home</a>
                    <a id="curriculo" onClick={baixaCurriculo}>Currículo</a>
                    <a target="" href="http://localhost:3000?2">Projetos</a>
                </div>
            </div>   
    )
}