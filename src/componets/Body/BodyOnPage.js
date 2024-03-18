import React from "react";
import "./BodyOnPage"
import './BodyOnPage.css'

function BodyOnPage() {
    const handleClickMind = () => {
        window.location.href = 'https://www.linkedin.com/company/mind-sciency-tecnologia-software-inovation/about/';
    };
    return (
        <div className="BodyOnPage" style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

            <img
                src="/FotoPerfil.jpeg"
                alt="Foto de Perfil"
                className="FotoPerfil"
                style={{
                    width: "250px",
                    height: '250px',
                    marginTop: 10,
                    borderRadius: 120,
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                }} />
            <div>
                <div className="text1" style={{
                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                    width: 500,
                    height: 100,
                    marginBottom: 25,
                }}>
                    <p className="paragrafo1">
                        Desenvolver se tornou uma prática comum, dês de que iniciei meus estudos na Faculdade. Dia após dia venha me aperfeiçoando, até que consiga me fixar no mercado de trabalho. Tive minha primeira experiência como desenvolvedor, na empresa <a onClick={handleClickMind}>Mind Sciency Tecnologia softwere Inovation</a>, atuando como Desenvolvedor Jr. Momento esse, que foi de grande valia para adquirir boas técnicas na área.
                    </p>
                </div>

                <div className="text2" style={{
                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                    width: 500,
                    height: 100,

                }}>
                    <p className="paragrafo2">
                        Como desenvolvedor, eu trabalho com várias tecnologias que me permitem criar projetos interessantes. Exemplo, uso <span>Python</span> para cuidar da parte do servidor e realizar tarefas mais complexas. No front-end, conto com o <span>React</span> para criar interfaces interativas e reutilizáveis. Também utilizo o <span>TypeScript</span>, que ajuda a organizar melhor o código JavaScript. Além disso, o <span>SQL</span> é essencial para interagir com bancos de dados e gerenciar informações.
                    </p>
                </div>                
            </div>

        </div>
    );
}

export default BodyOnPage;