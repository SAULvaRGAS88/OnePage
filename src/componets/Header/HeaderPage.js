import React from 'react';
import './HeaderPage.css';

function HeaderPage() {
    return (
        <div className='header'
            style={{
                position: "relative",
                // display: 'inline-block',
                width: '100%',
                height: '150px',
                display: 'flex',
                justifyContent: 'center',
                // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            }}>
            <img
                className='fundo_header'
                src="/plano_de_fundo_header.jpg"
                alt="fundo"
                style={{
                    opacity: '0.9',
                    objectFit: 'cover',
                    position: 'absolute',
                    width: '100%',
                    height: '150px'
                }}

            />
            <p style={{
                margin: 0,
                textalign: 'center',
                fontSize: 40,
                position: "absolute",
                color: 'white',
                marginTop: '10px',
                fontWeight: 'bold',
                fontFamily: "fantasy"
            }}>
                Saul Vargas
            </p>
            <p style={{
                margin: 0,
                textalign: 'center',
                fontSize: 40,
                position: "absolute",
                color: 'white',
                marginTop: '85px',
                fontWeight: 'bold',
                fontFamily: "fantasy"

            }}>
                Desenvolvedor Full Stack
            </p>

        </div >

    );
}

export default HeaderPage;