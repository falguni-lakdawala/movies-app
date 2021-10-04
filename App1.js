import React from 'react';
// import { NativeBaseProvider, Box, Center } from 'native-base'
// import { NavigationContainer } from '@react-navigation/native'
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  Text
} from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabView, SceneMap } from 'react-native-tab-view';
// import  TVShowsContainer from './src/components/Container/TVShowsContainer';
// import   MoviesContainer  from './src/components/Container/MoviesContainer';


// const Stack = createNativeStackNavigator()

const initialLayout = { width: Dimensions.get('window').width };

// const MovieRoute = () => <MoviesContainer></MoviesContainer> ;

// const TVShowRoute = () => <TVShowsContainer></TVShowsContainer>;
const renderScene1 = SceneMap({
  movie: MovieRoute,
  tv: TVShowRoute,
});



const MovieRoute = () => (
    <Text>This is Tab 1</Text>
);
const TVShowRoute = () => (
      <Text>This is Tab 2</Text>
      );

// const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

// const FourthRoute = () => <Center flex={1}>This is Tab 4 </Center>;


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'movie', title: 'Movies 1' },
    { key: 'tvshow', title: 'TV Shows 2' },
  ]);

  // const renderTabBar = (props) => {
  //   const inputRange = props.navigationState.routes.map((x, i) => i);
  //   return (
  //     <Box flexDirection="row">
  //       {props.navigationState.routes.map((route, i) => {
  //         const opacity = props.position.interpolate({
  //           inputRange,
  //           outputRange: inputRange.map((inputIndex) =>
  //             inputIndex === i ? 1 : 0.5
  //           ),
  //         });
  //         const color = index === i ? '#1f2937' : '#a1a1aa';
  //         const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

  //         return (
  //           <Box
  //             borderBottomWidth="3"
  //             borderColor={borderColor}
  //             flex={1}
  //             alignItems="center"
  //             p="3"
  //             cursor="pointer">
  //             <Pressable
  //               onPress={() => {
  //                 console.log(i);
  //                 setIndex(i);
  //               }}>
  //               <Animated.Text style={{ color }}>{route.title}</Animated.Text>
  //             </Pressable>
  //           </Box>
  //         );
  //       })}
  //     </Box>
  //   );
  // }
  
  return (

    
  //   <NativeBaseProvider>
  //     <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name='Movies'
  //         component={MoviesContainer}
  //         options={{
  //           title: 'Movies App',
  //           headerStyle: {
  //             backgroundColor: '#2c3e50'
  //           },
  //           headerTitleStyle: {
  //             color: '#fff'
  //           }
  //         }}
  //       />
  //       <Stack.Screen
  //         name='Show'
  //         component={TVShowsContainer}
  //         options={{
  //           headerStyle: {
  //             backgroundColor: '#2c3e50'
  //           },
  //           headerTitleStyle: {
  //             color: '#fff'
  //           }
  //         }}
  //       />
  //       {/* <Stack.Screen
  //         name='Web'
  //         component={WebScreen}
  //         options={({ route }) => ({
  //           title: route.params.label,
  //           headerBackTitle: 'Back to Show'
  //         })}
  //       /> */}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  //     <StatusBar style='light' />
  // </NativeBaseProvider>
    // <NativeBaseProvider>
  <View>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene1}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ marginTop: StatusBar.currentHeight }}
    />
  </View>
    
    // </NativeBaseProvider>
  );
}
