import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Consult from './Consult';
import DetailsOut from './DetailsOut';
import Login from './Login';
import SignUp from './SignUp';
import MainContainer from '../After/MainContainer'
import Test from './Test'

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='MainContainer'>
                <Stack.Screen name ='Consult' component={Consult} options={{headerShown:false}} />
                <Stack.Screen name='DetailsOut' component={DetailsOut} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
                <Stack.Screen name='MainContainer' component={MainContainer} options={{headerShown:false}}/>
                <Stack.Screen name='Test' component={Test} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;
