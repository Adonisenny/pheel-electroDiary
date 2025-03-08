import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DiaryEntryList from './Screens/DiaryEntryList.js';
import { ViewContent } from './Screens/ViewContent.js';
import { Login } from './Screens/login.js';
import { Register } from './Screens/registerscreen.js';
import { ContentContextProvider } from './assets/TheContext/contentContent.js';
import { ThreadContextProvider } from './assets/TheContext/threadContext.js';

import { AuthContext, AuthContextProvider } from './assets/TheContext/authContext.js';
import { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';





const Drawer = createDrawerNavigator()

export default function App() {

  return (

<AuthContextProvider>

<ContentContextProvider>
  <ThreadContextProvider>

   <NavigationContainer>
   
    <RootNavigator />
    
     </NavigationContainer>
   </ThreadContextProvider>
   </ContentContextProvider>
   
   </AuthContextProvider>
  
   

  )}

  const RootNavigator = () => {
    const {user,dispatch} =useContext(AuthContext)
    useEffect(() => {
      let timeout;
      if(user){
        timeout = setTimeout(() => {
          dispatch({type:"LOGOUT"});
          AsyncStorage.removeItem('user');

        }, 5 * 60 * 1000)
      }
      return () => clearTimeout(timeout)
    },[user])
return(
  <Drawer.Navigator>
    
   {!user? ( 
    <>
    <Drawer.Screen name='Register' component={Register}
               options={{
                headerTitleAlign:'center',
               drawerActiveTintColor:'#ffffff',
                drawerLabel:'Register',
                drawerActiveTintColor:'#ffffff',
                drawerInactiveTintColor:'#ffffff',
                drawerContentStyle:{
                  backgroundColor:'#184b29',
                 },
               }}
               />


<Drawer.Screen 
               name='Login' 
               component={Login}
               
              
               options={{
                headerTitleAlign:'center',
               drawerActiveTintColor:'#ffffff',
                drawerLabel:'Login',
                drawerActiveTintColor:'#ffffff',
                drawerInactiveTintColor:'#ffffff',
                drawerContentStyle:{
                  backgroundColor:'#184b29',
                 
                 
                
              },
               }}
               />
               </>
            ):(

              <>
               <Drawer.Screen name='DiaryEntry' component={DiaryEntryList}
      options={{
        headerTitleAlign:'center',
       drawerActiveTintColor:'#ffffff',
       
        drawerActiveTintColor:'#ffffff',
        drawerInactiveTintColor:'#ffffff',
        drawerContentStyle:{
          backgroundColor:'#184b29',      
        
      },
       }}
      
      />

<Drawer.Screen name='ViewContent' component={ViewContent}
                options={{
                headerTitleAlign:'center',
               drawerActiveTintColor:'#ffffff',
                drawerLabel:'View Content',
                drawerActiveTintColor:'#ffffff',
                drawerInactiveTintColor:'#ffffff',
                drawerContentStyle:{
                  backgroundColor:'#184b29',
                 
                 
                
              },
               }}
               />
 
             
               
          
        
              </>

             
               )}


  </Drawer.Navigator>
)

  }


    