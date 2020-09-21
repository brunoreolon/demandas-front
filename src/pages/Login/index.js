import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

export default function Logon() {
    return (
        // <div className="logon-container">
        //     <section className="form">
        //         <form>
        //             <h1>Faça seu logon</h1>

        //             <input placeholder="Seu E-mail" />
        //             <input type="password" placeholder="Sua Senha" />
        //             <button className="button" type="submit">Entrar</button>

        //             <Link className="back-link" to="/cadastro-usuario">
        //                 <FiLogIn size={16} color="red"/>
        //                 Esqueceu sua senha
        //             </Link>
        //         </form>
        //     </section>
        // </div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}