"use client";

import { useState } from 'react';
import { Envelope } from "./Envelope"
import { Text } from "./Text"
import { toast } from 'react-toastify';
export const Invitation = () => {
    const [isDeclinePressed, setIsDeclinePressed] = useState(1);
    const [accept, setAccept] = useState(false)
    const ButtonAccept = ({ onClick }: any) => (
        <button
            onClick={onClick}
            style={{
                width: `${50 * isDeclinePressed}px `,
                height: `${50 * isDeclinePressed}px `
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer }`}>
            Si
        </button>
    )

    const handleAccept = () => {
        setAccept(true)
        toast.success('Opcion correcta, te amo')
    }



    const ButtonDecline = ({ onClick }: any) => (
        <button onClick={onClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            No
        </button>
    )



    return (
        <div className="flex items-center justify-center flex-col w-max h-screen mx-auto  animate-fade" style={{ zIndex: 10000 }}>
            {!accept ? <>
                <Envelope />

                <p className="text-white my-6">
                    ¿Saldrías conmigo este 14 de febrero?
                </p>
                <div className="flex gap-3 flex-row">

                    <ButtonDecline onClick={() => {
                        toast.error('Opcion incorrecta, vuelva a intentar')
                        setIsDeclinePressed((prev => prev + 1))
                    }} />
                    <ButtonAccept onClick={handleAccept} />
                </div> </> : <Text />}




        </div>
    )
}


