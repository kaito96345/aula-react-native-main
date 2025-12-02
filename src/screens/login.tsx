import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";

export function LoginScreen() {
  const [Login, setlogin ]= useState('');
  const [Senha, setSenha ]= useState('');
  return (
    <View className="flex-1 items-center justify-center">
      <View className='w-full p-5 gap-5 items-center justify-center'> 
        <Text className='text-3xl'>Login</Text>

      <InputCustomizado placeholder={"Login"} onChangeText={(text)=> {setlogin(text)}}/>
      <InputCustomizado placeholder={"Senha"}secureTextEntry={true}  onChangeText={(text)=> {setSenha(text)}}/>
    

      <ButtonCustomizado title="Entrar" onPress={() => console.log("login", Login, "senha", Senha)}/>
      <Text className='text-blue-400'> esqueceu a Senha?</Text>
    </View>
    </View>
  )
}