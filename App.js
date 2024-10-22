


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Router from './Router';
import AuthProvider from './ContextAPI/AuthProvider';


export default function App() {
  let [fontsLoading] =  useFonts ({
    'outfit-regular':require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
  })

  if(!fontsLoading)
  {
     return <AppLoading></AppLoading> ;
  }















  return (
    <AuthProvider>
      <Router>

      </Router>
    </AuthProvider>
  )
};


