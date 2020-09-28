import React, { useState } from "react"
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { login } from "../api/user"

const LoginScreen = ({ history }) => {

    const [CPF, setCPF] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = async () => {
        try {
            if (!CPF /* validação de CPF */) {
                return alert("CPF inválido");
            }
            if (!password /* validação de CPF */) {
                return alert("Senha inválida");
            }
            const userData = await login(CPF, password);

            localStorage.setItem("userData", JSON.stringify(userData));

            history.push("/admin");
        } catch (e) {
            alert("Deu ruim " + e.message);
        }
    };

    return (
        
            <div className="modalLogin">

                <TextInput
                    className="inputLogin"
                    placeholder="CPF"
                    onChangeText={(text) => setCPF(text)}
                    onEnterPressed={console.log('Input CPF')}
                />
                <TextInput
                    className="inputLogin inputPassword"
                    type="password"
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                    onEnterPressed={console.log('Input senha')}
                />

                <Button className="buttonLogin" onPress={doLogin}>Entrar</Button>
                <Button className="buttonLogin">Recuperar senha</Button>

            </div>
        
    );
};

export default LoginScreen;

