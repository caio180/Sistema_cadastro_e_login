import { useState } from "react";

function Cadastro(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [ConfirmSenha, setConfirmsenha] = useState("");
    const regis_Cadastro = (e) => {
    e.preventDefault()
    
        if (nome === '' || email === '' || senha === '' || ConfirmSenha === ''){
            alert("Preencha todos os campos")
        }else if (!email.includes("@")){
            alert("Email inválido")

        }else if (senha.length < 8){
            alert("A senha precisa de no mínimo 8 caracteres")
        }else if (senha !== ConfirmSenha){
            alert("As senhas não coincidem")
        }
        else{

            fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                    
                })
            })
            
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            console.log("Cadastro realizado")
        }
    }
    return (<> 
    
        <div id="cadastro">
            <h2>Cadastro</h2>

            <form id="formCadastro" onSubmit={regis_Cadastro}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

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
                <input
                    type="password"
                    placeholder="Confime sua senha"
                    value={ConfirmSenha}
                    onChange={(e) => setConfirmsenha(e.target.value)}
                />

                <button id="bo_cadastro" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>

    </>);
}
export default Cadastro