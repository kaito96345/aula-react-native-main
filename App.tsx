import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Lista } from '@/screens/lista';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Soma from '@/screens/soma';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/interface/roolPages';
import { ListaNumScreens } from '@/screens/numeros';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
      {/*<NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}> 
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="soma" component={Soma} />
        <Stack.Screen name="lista" component={Lista} />
      </NavigationContainer>
      </Stack.Navigator>*/}
      <ListaNumScreens/>
      </SafeAreaView>


      <StatusBar style="auto" />
    </>
  );
}
