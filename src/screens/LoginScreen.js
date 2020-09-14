import React from "react"
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const LoginScreen = ({ history }) => {
    return (
        <>
            <TextInput
                className=""
                placeholder="CPF"
                onChangeText={(text) => console.log(text)}
                onEnterPressed={console.log('Input CPF')}
            />
            <TextInput
                className=""
                placeholder="Senha"
                onChangeText={(text) => console.log(text)}
                onEnterPressed={console.log('Input senha')}
            />

            <Button onPress={console.log('função de login')}>Entrar</Button>
            <Button onPress={() => history.push("/forgot-pass")}>Recuperar senha</Button>
        </>
    );
};

export default LoginScreen;