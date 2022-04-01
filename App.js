import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './views/Landing';
import Tide from './views/Tide';
import DefaultForm from './views/DefaultForm'
import Tabs from './views/Tabs';
import CustomHeader from './components/CustomHeader';
import AppLoading from 'expo-app-loading';
import { useFonts, Cantarell_700Bold_Italic, Cantarell_400Regular } from '@expo-google-fonts/cantarell';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Cantarell_700Bold_Italic,
    Cantarell_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <CustomHeader />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        {/* First visit pages */}
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Tide" component={Tide} />
        <Stack.Screen name="DefaultForm" component={DefaultForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

