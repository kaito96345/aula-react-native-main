import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useEffect } from 'react';

export function ListaNumScreens() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);
 const [resultado, setResultado] = useState<number | null>(0);
  
    useEffect(() => {
      setResultado(0);
    }, [item]);
  

  function AdicionarLista() {
    if (item === '') return;
    const numero = Number(item);
    if (isNaN(numero)) return;

    setLista([...lista, numero]);
    setItem('');
  }

  function LimparLista() {
    setLista([]);
  }

  return (
    <View className="flex-1 items-center">
      <View className="w-full items-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">Lista de Números</Text>

        <InputCustomizado
          placeholder="Digite um número"
          keyboardType="numeric"
          value={item}
          onChangeText={setItem}
        />
        
        <ButtonCustomizado title="Adicionar Número" onPress={AdicionarLista} />
        <ButtonCustomizado title="Limpar Lista" onPress={LimparLista} />

        <Text>Total de itens: {lista.length}</Text>
      </View>

      <ScrollView className="mt-4 w-full px-4">
        {lista.map((numero, index) => (
          <Text key={index} className="text-gray-600 text-lg">
            {numero} {numero % 2 === 0 ? '(Par)' : '(Ímpar)'}
        </Text>
        ))}
             
      </ScrollView>
    </View>
  );
}