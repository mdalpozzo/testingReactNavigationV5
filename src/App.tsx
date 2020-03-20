/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstTestScreen from '@Screens/FirstTestScreen';
import SecondTestScreen from '@Screens/SecondTestScreen';

export type TestStackParamList = {
    FirstTestScreen: undefined;
    SecondTestScreen: undefined;
};

const TestStack = createStackNavigator<TestStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <TestStack.Navigator initialRouteName="FirstTestScreen">
                <TestStack.Screen
                    name="FirstTestScreen"
                    component={FirstTestScreen}
                />
                <TestStack.Screen
                    name="SecondTestScreen"
                    component={SecondTestScreen}
                />
            </TestStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
