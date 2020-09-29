import React, { useState } from "react"
import Input from "../components/InputText"
import Button from "../components/Button"
import { forgotpass } from "../api/user"





const ForgotPassScreen = ({ history, dispatch }) => {
    const [cpf, setCpf] = useState("")



    const ReqForgotPass = async (cpf) => {
        await forgotpass(cpf)





    }

    return (
      
            <div className="modalLogin">

                <Input className="inputLogin inputPassword" onChangeText={(text) => setCpf(text)} placeholder="Insira seu CPF (123.456.789-00)" />
                <Button className="buttonLogin" onPress={ReqForgotPass} >Enviar</Button>

            </div>
    );
};

export default ForgotPassScreen;