"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from 'react'

import './text.css'

export const Text = () => {
    const [displayedText, setDisplayedText] = useState('');

    const message = `Querida Angely,

        Gracias por aceptar esta invitacion para celebrar juntos este 14 de febrero, espero verte muy pronto para ir al lugar acordado

        Con cariño,
        Adrian..`;

    useEffect(() => {

        for (let index = 0; index < message.length; index++) {
            setTimeout(() => {
                setDisplayedText(message.substring(0, index));
            }, index * 100);
        }
    }, [])

    //


    return (
        <div className="content  fade-in">
            <div className="notebook-page">
                <textarea id="msg" value={displayedText} readOnly />
            </div>
        </div>
    )
}
