import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../pages/login';
import { Telas } from '../utils/enums/telas';

const Stack = createNativeStackNavigator();


function App() {

    function AuthStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={Telas.login} component={Login} />
            </Stack.Navigator>
        )
    };

    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
};

export default App;