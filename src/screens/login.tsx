import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "@/interface/roolPages";

export function LoginScreen() {
  const [Login, setlogin] = useState('');
  const [Senha, setSenha] = useState('');
  const navigation = useNavigation< ProfileScreenNavigationProp>();

  function Logar() {
    console.log("Login", Login, "senha", Senha)
    navigation.navigate('soma');
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className='w-full p-5 gap-5 items-center justify-center'>
        <Text className='text-3xl'>Login</Text>

        <InputCustomizado placeholder={"Login"} onChangeText={(text) => { setlogin(text) }} />
        <InputCustomizado placeholder={"Senha"} secureTextEntry={true} onChangeText={(text) => { setSenha(text) }} />


        <ButtonCustomizado title="Entrar" onPress={Logar} />
        <View className='flex-row gap-5'>
          <Text className='text-blue-400 text-lg' > Cadastre-se</Text>
          <Text>|</Text>
          <Text className='text-blue-400 text-lg'> esqueceu a Senha?</Text>
        </View>
      </View>
    </View>
  )
}