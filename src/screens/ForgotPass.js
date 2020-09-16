import React,{useState,onChange} from "react"
import Input from "../components/InputText"
import Button from "../components/Button"
import Axios from "axios"


const ForgotPassScreen = ({ history }) => {
    
const [cpf,setCpf] = useState ("")
    
    const ReqForgotPass = async (cpf)=>{
        const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ 
    
        if(regexCpf.test('should ', () => {
            
        })
        (cpf)){
            
            // const resp = await Axios.get()
            return alert("Deu certo")
        }
        else{
            return alert("CPF inválido");
            

        }
          
            
        
        }
   
    return (
        <>
        <Input  onChangeText={(text)=> setCpf(text)} placeholder="Insira seu CPF (123.456.789-00)"/>
        <Button onPress={(e)=> ReqForgotPass(cpf)} >Enviar</Button>
        </>
    );
};

export default ForgotPassScreen;