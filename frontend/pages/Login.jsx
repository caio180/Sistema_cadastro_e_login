import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const handleLogin = (e) => {
        e.preventDefalt()
    }
    
}