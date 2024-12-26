import React from 'react'
import { Tunnel_quarter } from './Tunnel_quarter'

export default function Tunnel() {
    return (
        <>
            <Tunnel_quarter scale={[+1,+1,+1]} position={[0, 0, 0]}/>
            <Tunnel_quarter scale={[+1,+1,-1]} position={[0, 0, 0]}/>

            <Tunnel_quarter scale={[-1,+1,+1]} position={[467, 0, 0]}/>
            <Tunnel_quarter scale={[-1,+1,-1]} position={[467, 0, 0]}/>

            <Tunnel_quarter scale={[+1,+1,+1]} position={[240, 0, 0]}/>
            <Tunnel_quarter scale={[+1,+1,-1]} position={[240, 0, 0]}/>
            
            <Tunnel_quarter scale={[-1,+1,+1]} position={[707, 0, 0]}/>
            <Tunnel_quarter scale={[-1,+1,-1]} position={[707, 0, 0]}/>
        </>
    )
}
