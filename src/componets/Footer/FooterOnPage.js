import React, { useEffect, useState } from "react";
import './FooterOnPage.css'
import arrayVersiculos from "../Serviços/ArrayVersiculos";

function FooterOnPage() {
    const handleClickLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/saul-vargas-68a97347/';
    };

    const handleClickWhats = () => {
        window.location.href = 'https://wa.me/5551985027412?text=Ol%C3%A1%2C+achei+sua+p%C3%A1gina+e+gostaria+de+conversar+sobre+assuntos+relacionados+a+sua+carreira.';
    };

    const [versiculoAleatorio, setVersiculoAleatorio] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * arrayVersiculos.length);
        const randomVersiculo = arrayVersiculos[randomIndex];
        setVersiculoAleatorio(randomVersiculo);
    }, []);

    const [verse, setVerse] = useState('');


    const generateVerse = () => {
        const books = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];


        const randomBook = books[Math.floor(Math.random() * books.length)];
        const randomChapter = Math.floor(Math.random() * 50) + 1;
        const randomVerse = Math.floor(Math.random() * 20) + 1;


        fetch(`https://bible-api.com/${randomBook}+${randomChapter}:${randomVerse}`)
            .then(response => response.json())
            .then(data => setVerse(`${data.reference}: ${data.text}`));
    };


    return (

        <div className="footerOnPage">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: "pointer"
            }} onClick={handleClickLinkedin}>
                <img src='./linkedin-svgrepo-com.svg' alt="linkedin" style={{
                    width: 100,
                    height: 100,
                    marginTop: 10
                }} />
                <p style={{
                    fontWeight: 'bold',
                    fontFamily: 'fantasy',
                }}>Acesse meu Linkedin</p>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: "pointer"
            }} onClick={handleClickWhats}>
                <img src='./whatsapp-color-svgrepo-com.svg' alt="whats" style={{
                    width: 100,
                    height: 100,
                    marginTop: 10
                }} />
                <p style={{
                    fontWeight: 'bold',
                    fontFamily: 'fantasy',
                }}>Entre em contato!</p>
            </div>
            <div>

                <h4>Alimento pra alma</h4>

                {versiculoAleatorio && (
                    <div>
                        <p>{versiculoAleatorio.versiculo}</p>
                        <p>Versículo: {versiculoAleatorio.biblia}</p>
                    </div>
                )}

            </div>

            {/* <div>
                <h1>Bible Verse Generator</h1>
                <button onClick={generateVerse}>Generate Verse</button>
                <p>{verse}</p>
            </div> */}

            <div>
                <div style={{ textAlign: 'center', backgroundColor: 'pink' }}>
                    <iframe
                        height="180"
                        marginheight="0"
                        src="https://www.internautascristaos.com/arquivos/versiculos/versiculos.html"
                        frameborder="no"
                        width="200"
                        scrolling="auto"
                        name="textos"
                        sandbox="allow-scripts"
                        cursorPoniter='nome'
                    ></iframe>
                </div>

            </div>

            {/* <div>
                <iframe
                    src="https://www.internautascristaos.com/bibliaonline/index.htm"
                    allowtransparency="true"
                    style={{ background: '#ffffff', width: '100%', height: '1200px' }}
                    frameborder="0"
                    scrolling="auto"
                ></iframe>
            </div> */}

        </div>
    )

}

export default FooterOnPage