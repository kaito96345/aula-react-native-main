import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  login: undefined;
  soma: undefined;
  lista: undefined;
};


 export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
  
>;