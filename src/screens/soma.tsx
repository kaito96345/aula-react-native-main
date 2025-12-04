import { View, Text } from "react-native";
import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';

export default function Soma() {
  const [valor1, setvalor1] = useState('');
  const [valor2, setvalor2] = useState('');
  const [resultado, setResultado] = useState<number | null >(null);

  console.log("valor1", valor1);
  console.log("valor2", valor2);

  useEffect(() => {
    setResultado(null);
  }, [valor1, valor2]);

  function Somar() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 + num2);
  }
  return (
    <View className="flex-1 justify-center">
      <View className="w-fulll intems-center gap-4 p-4">

        <InputCustomizado placeholder="Valor 1" keyboardType="decimal-pad" onChangeText={text => setvalor1(text)} />
        <InputCustomizado placeholder="Valor 2" keyboardType="decimal-pad" onChangeText={text => setvalor2(text)} />
        <ButtonCustomizado title="somar" onPress={Somar} />


        <Text className="text-2xl">Resultado: {resultado ?? '...' }</Text>

      </View>
    </View>
  )
}