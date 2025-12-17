import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Lista } from '@/screens/lista';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Soma from '@/screens/soma';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
         <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={Lista} />
      </Stack.Navigator>
      </NavigationContainer>  
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
