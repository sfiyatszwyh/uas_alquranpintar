import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import menu from './screen/menu'
import data from './screen/data'
import Details from './screen/Details'
import tampilan from './screen/tampilan'
import asmaul from './screen/asmaul'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName= "tampilan">
                <Stack.Screen name="menu" component={menu} />
                <Stack.Screen name="data" component={data} />
                <Stack.Screen name="details" component={Details} />
                <Stack.Screen name="tampilan" component={tampilan} />
                <Stack.Screen name="asmaul" component={asmaul} />
            </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App