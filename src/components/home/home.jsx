import { useState } from 'react';
import Styles from './home.module.css';
import LOGO from '../navBar/logo.png';
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Login = ({setToken}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token)
    }

    return(
        <div className={Styles.formLogin}>
            <img src={LOGO} alt="Logo" />
            <form className={Styles.formulario} onSubmit={handleSubmit}>
                <label htmlFor="usuario">
                    <span>Usuario: </span>
                    <br />
                    <input type="text" name="usuario" onChange={e => setUsername(e.target.value)} className={Styles.inputForm} />
                </label>
                <label htmlFor="pass">
                    <span>Password: </span>
                    <br />
                    <input type="password" name="pass" onChange={e => setPassword(e.target.value)} className={Styles.inputForm}/>
                </label>
                {/* <button className={Styles.btnLogin} type="submit">Create Account</button> */}
                <button className={Styles.btnLogin} type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};