import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import data from './screen/data'
import Details from './screen/Details'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName= "Welcome">
                <Stack.Screen name="data" component={data} />
                <Stack.Screen name="details" component={Details} />
            </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App