import { StatusBar } from 'expo-status-bar';
import Home from './src/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/Screen/About';
import Contact from './src/Screen/Contact';
import Course from './src/Screen/Course';
import UserData from './src/Screen/UserData';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';

import { Nunito_600SemiBold,Nunito_700Bold} from '@expo-google-fonts/nunito';


  function App() {
    const Stack = createNativeStackNavigator();

    let [fontsLoaded] = useFonts({
      JosefinSans_400Regular,
      JosefinSans_500Medium,
      JosefinSans_700Bold,
      Nunito_600SemiBold,
      Nunito_700Bold,
    });


    if(!fontsLoaded){
      <AppLoading />
    }
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home"  options={{headerShown : false}} component={Home} />

          {/*Contact */}
          <Stack.Screen name='Contact' component={Contact}
          options={{
            headerTitleStyle:{
            fontSize:25,
            JosefinSans_700Bold,
          },
           headerTitleAlign:"center",
          }}/>

          {/*Course */}
          <Stack.Screen 
          name='Course' component={Course}
          options={{
            headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
           headerTitle:"Courses",
           headerTitleAlign:"center",
          }} />

          {/*About */}
          <Stack.Screen name='About' component={About}
          options={{
            headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
        
           headerTitleAlign:"center",
          }}/>

          {/*UsrData */}
          <Stack.Screen name='Student' component={UserData}
          options={{
            headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
           headerTitle:"Students Data",
           headerTitleAlign:"center",
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    ); 
};

export default App;