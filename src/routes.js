import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{ headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#FFF' }}>
                <Stack.Screen name='Main' component={Main} options={{ title: 'Dashboard' }} />
                <Stack.Screen name='User' component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
