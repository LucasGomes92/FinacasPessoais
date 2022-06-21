import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sacar from '../screens/Sacar'
import Depositar from '../screens/Depositar'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
             <Stack.Screen
                name="Home"
                component={Home}
                 
            />
            <Stack.Screen
                name="Depositar"
                component={Depositar}
               
            />
            <Stack.Screen
                name="Sacar"
                component={Sacar}
                
            />
          
        </Stack.Navigator>
      </NavigationContainer>

  );
}