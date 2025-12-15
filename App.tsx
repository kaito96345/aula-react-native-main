import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Media } from '@/screens/media';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ParOuImpar } from '@/screens/parouimpar';
import { Contador } from '@/screens/contador';
export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        {/*<LoginScreen />*/}
        {/*<Media/>*/}
      {/*<ParOuImpar/>*/}
      <Contador/>
     </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}