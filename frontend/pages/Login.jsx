import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const regis_Login = (e) => {
        e.preventDefalt()
        
    }
    
    return (<>
        <div id="login">
        <h2>tela login</h2>
        
        <form id="formLogin" onSubmit={regis_Login}>
            
            <input 
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button id="bo_login" type="submit">Login</button>
        </form>
    </div> 
    </>);

    
    
}
export default Login;