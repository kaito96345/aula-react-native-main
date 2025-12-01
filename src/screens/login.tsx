import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { Text, View } from "react-native";

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className='w-full p-5 gap-5 items-center justify-center'> 
        <Text className='text-3xl'>Login</Text>
      <InputCustomizado 
        placeholder={"Login"}
      />
      <InputCustomizado 
        placeholder="Senha"
      />
      <ButtonCustomizado title="Entrar" />
      <Text className='text-blue-400'> esqueceu a Senha?</Text>
    </View>
    </View>
  )
}