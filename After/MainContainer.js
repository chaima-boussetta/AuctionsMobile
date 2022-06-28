import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native'

// Screens
import Home from './Home';
import Details from './Details';
import Add from './Add';
import Profile from './Profile';

//Screen names
const homeName = "Home";
const addName = "Add";
const profileName = "Profile"; 
const detailsName = "Details";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator 
      
        initialRouteName={homeName}
        screenOptions={({ route }) => ({


          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';

            } else if (rn === addName) {
              iconName = focused ? 'add-circle' : 'add-circle';

            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person';
            } else if (rn === detailsName) {
              iconName = focused ? 'list-circle' : 'list-circle'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
        })
      
    }
        tabBarOptions={{
          showLabel: false,
          activeTintColor: '#008E89',
          inactiveTintColor: '#2d2d2d',
          labelStyle: { paddingBottom: 8, fontSize: 10 },
          style: { padding: 0, height: 200, backgroundColor: 'blue',},
        }}
        
        >

        <Tab.Screen name={homeName} component={Home}  options={{headerShown:false}}/>
        <Tab.Screen name={detailsName} component={Details} options={{headerShown:false}}/>
        <Tab.Screen name={addName} component={Add} options={{headerShown:false}}/>
        <Tab.Screen name={profileName} component={Profile} options={{headerShown:false}}/>
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;