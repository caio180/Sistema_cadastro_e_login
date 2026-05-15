import { useState } from "react";

function Cadastro(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [confirm_sen, setConfirmsenha] = useState("");
    const handleCadastro = (e) => {
    e.preventDefalt()
    
        if (nome === '' || email === '' || senha === '' || confirm_sen === ''){
            alert("Preencha todos os campos")
            return;
        }if (!email.includes("@")){
            alert("Email inválido")
            return;

        }if (senha.length < 8){
            alert("A senha precisa de no mínimo 8 caracteres")
            return;
        }if (senha !== confirm_sen){
            alert("As senhas não coincidem")
            return
        }
    };
    

    return (<> 
    
        <div id="cadastro">
            <h2>Cadastro</h2>

            <form id="formCadastro" onSubmit={handleCadastro}>
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
                    value={confirm_sen}
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