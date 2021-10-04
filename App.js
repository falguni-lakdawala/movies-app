import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MediaDetails from './src/components/layout/MediaDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/components/layout/HomeScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Movies App" 
        options={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTitleStyle: {
            color: '#fff',
          }
        }} component={HomeScreen} />
        <Stack.Screen name="More Details"  options={
          ({ route }) => ({ title: route.params.label, 
            title: route.params.label,
              headerBackTitle: 'Back to List',
              headerStyle: {
                  backgroundColor: '#2c3e50'
              },
              headerTitleStyle: {
                  color: '#fff'
              },
              headerBackTitleStyle:{
                color: '#fff'
              }
           })} 
          component={MediaDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   scene: {
//     flex: 1,
//   },
// });