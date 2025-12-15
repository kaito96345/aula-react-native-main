import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function ParOuImpar() {
  const [valor1, setValor1] = useState('');
  
  const [resultado, setResultado] = useState<number | null>(0);

  console.log('Valor 1:', valor1);
  console.log('Resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, [valor1]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-4 p-4">
        <Text className="text-4xl text-gray-700">   impar ou par?</Text>

        <InputCustomizado
          placeholder="Numero"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor1(text)}
        />

        <ButtonCustomizado title="Verificar" onPress={() => {
          const num1 = parseFloat(valor1);
          if (num1 % 2 === 0) {
            setResultado(0);
          } else {
            setResultado(1);
          }
        }} />
        <Text>Resultado: {resultado === 0 ? 'Par' : resultado === 1 ? 'Ímpar' : '...'}</Text>

      </View>

    </View>
  );
}
