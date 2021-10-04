import React from 'react'
import { NativeBaseProvider, Box, Center } from 'native-base'
import MoviesContainer from '../Container/MoviesContainer'
import SearchContainer from '../Container/SearchContainer'
import TVShowsContainer from '../Container/TVShowsContainer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
        {/* <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.container}
        /> */}
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={MoviesContainer} 
            navigation={navigation}
            initialRouteName="Movies"
            screenOptions={{
              tabBarActiveTintColor: '#2c3e50',
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: 'powderblue' },
            }}/>

            <Tab.Screen name="Search" 
            navigation={navigation}
            screenOptions={{
                tabBarActiveTintColor: '#2c3e50',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'powderblue' },
              }}
              component={SearchContainer} />

            <Tab.Screen name="TV Shows" 
            navigation={navigation}
            screenOptions={{
              tabBarActiveTintColor: '#2c3e50',
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: 'powderblue' },
            }} component={TVShowsContainer} />
            
        </Tab.Navigator>
    </NativeBaseProvider>
  )
}

export default HomeScreen
