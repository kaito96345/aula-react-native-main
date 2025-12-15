import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { View, Text } from 'react-native';

export function Media() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function calcularMedia() {
    const num1 = parseFloat(valor1) || 0;
    const num2 = parseFloat(valor2) || 0;

    const media = (num1 + num2) / 2;
    setResultado(media);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">
          Média de Dois Valores
        </Text>

        <InputCustomizado
          placeholder="Valor 01"
          keyboardType="decimal-pad"
          onChangeText={setValor1}
        />

        <InputCustomizado
          placeholder="Valor 02"
          keyboardType="decimal-pad"
          onChangeText={setValor2}
        />

        <ButtonCustomizado
          title="Calcular média"
          onPress={calcularMedia}
        />

        <Text>Resultado da Média: {resultado}</Text>
      </View>
    </View>
  );
}
