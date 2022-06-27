import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Consult from './Consult';
import DetailsOut from './DetailsOut'
import Test from './Test'

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Test'>
                <Stack.Screen name ='Consult' component={Consult} options={{headerShown:false}} />
                <Stack.Screen name='DetailsOut' component={DetailsOut} options={{headerShown:false}}/>
                <Stack.Screen name='Test' component={Test} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;
