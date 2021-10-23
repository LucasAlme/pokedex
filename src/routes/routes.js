import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from '../pages/login';
import Main from '../pages/main';
import { persistor, store } from '../store';
import { Telas } from '../utils/enums/telas';

const Stack = createNativeStackNavigator();

function App() {

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
            </Stack.Navigator>
        )
    }

    function AuthStack() {
        const isLogin = useSelector(state => state.isLogin);
        return (
            <>
                <Stack.Navigator>
                    {!isLogin ?
                        <Stack.Screen options={{ headerShown: false }} name={Telas.login} component={Login} />
                        :
                        <Stack.Screen options={{ headerShown: false }} name={Telas.home} component={MainStack} />
                    }
                </Stack.Navigator>
            </>
        )
    };

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <AuthStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
};

export default App;