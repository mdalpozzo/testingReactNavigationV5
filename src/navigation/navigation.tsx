import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileScreen from '@Screens/ProfileScreen';
import DailyFeedScreen from '@Screens/DailyFeedScreen';
import TrendingFeedScreen from '@Screens/TrendingFeedScreen';
import HistoryFeedScreen from '@Screens/HistoryFeedScreen';
import SettingsScreen from '@Screens/SettingsScreen';
import {useSafeArea} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstTestScreen from '@Screens/FirstTestScreen';
import StoryScreen from '@Screens/StoryScreen';

const BottomTabs = createBottomTabNavigator();

export function BottomTabsComponent(): React.ReactElement {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Feeds" component={FeedTabsComponent} />
            <BottomTabs.Screen name="Profile" component={ProfileScreen} />
            <BottomTabs.Screen name="Settings" component={SettingsScreen} />
        </BottomTabs.Navigator>
    );
}

const FeedTabs = createMaterialTopTabNavigator();

export function FeedTabsComponent() {
    const insets = useSafeArea();
    return (
        <FeedTabs.Navigator
            initialLayout={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').height,
            }}
            style={{
                paddingTop: insets.top,
            }}
        >
            <FeedTabs.Screen name="Daily" component={DailyFeedScreen} />
            <FeedTabs.Screen name="Trending" component={TrendingFeedScreen} />
            <FeedTabs.Screen name="History" component={HistoryFeedScreen} />
        </FeedTabs.Navigator>
    );
}

const MainStack = createStackNavigator();

export function MainStackComponent() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="BottomTabs"
                component={BottomTabsComponent}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name="Story"
                component={StoryScreen}
                options={{headerTitle: null}}
            />
            <MainStack.Screen
                name="DummyMainStackScreen1"
                component={FirstTestScreen}
            />
        </MainStack.Navigator>
    );
}