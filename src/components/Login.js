import React from 'react'
import '../assets/css/login.css'

function Login(){
    return (
        <div className="containerLogin">
            <div className="bg-login-image"></div>
            <div className="box-login">
                <div className="content-login">
                    <h1>SCFP :: SISTEMA DE CONTROLE FINANCEIRO PESSOAL</h1>
                    <form method="post" action="">
                        <label form="username">Login</label>
                        <input type="text" name="username" id="username" placeholder="type here your username" />
                        <label form="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="type here your password" />
                        <input type="submit" name="btn-access" className="btn-access" value="access" />
                    </form>
                    <h6>version: 1.0.0 2021</h6>
                </div>
            </div>
        </div>
    )
}

export default Login