import React, { useState } from 'react'
import api from '../../services/api'


export default function Login({ history }) {
    // email contém informação em tempo real
    // setEmail contém informação atualizada
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await api.post('/sessions', { email })

        const { _id } = response.data
        localStorage.setItem('user', _id) 
        
        history.push('/dashboard')
    }
    return (
        <>
            <p>
                Oferaça <strong>spots</strong> para os programadores e econtre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                id="email"
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}