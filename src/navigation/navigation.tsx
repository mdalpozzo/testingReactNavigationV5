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
import styles from './styles';
import FullScreenModule from '@Screens/FullScreenModal';
import ModalOverlay from '@Components/ModalOverlay';

export type FeedsTabsParamList = {
    Daily: undefined;
    Trending: undefined;
    History: undefined;
};

export type BottomTabsParamList = {
    Feeds: undefined;
    Profile: undefined;
    Settings: undefined;
};

export type MainStackParamList = {
    BottomTabs: undefined;
    Story: undefined | {backgroundColor: string};
    FirstTestScreen: undefined;
};

export type RootStackParamList = {
    Main: undefined;
    FullScreenModal: undefined;
};

const FeedTabs = createMaterialTopTabNavigator<FeedsTabsParamList>();
const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();
const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export function FeedTabsComponent() {
    const insets = useSafeArea();
    return (
        <FeedTabs.Navigator
            initialRouteName="Daily"
            initialLayout={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').height,
            }}
            style={[
                styles.feedsTabComponentWrapper,
                {
                    paddingTop: insets.top,
                },
            ]}
        >
            <FeedTabs.Screen name="Daily" component={DailyFeedScreen} />
            <FeedTabs.Screen name="Trending" component={TrendingFeedScreen} />
            <FeedTabs.Screen name="History" component={HistoryFeedScreen} />
        </FeedTabs.Navigator>
    );
}

export function BottomTabsComponent(): React.ReactElement {
    return (
        <BottomTabs.Navigator initialRouteName="Feeds">
            <BottomTabs.Screen name="Feeds" component={FeedTabsComponent} />
            <BottomTabs.Screen name="Profile" component={ProfileScreen} />
            <BottomTabs.Screen name="Settings" component={SettingsScreen} />
        </BottomTabs.Navigator>
    );
}

export function MainStackComponent() {
    return (
        <MainStack.Navigator initialRouteName="BottomTabs">
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
                options={{headerTitle: '', headerShown: false}}
            />
            <MainStack.Screen
                name="FirstTestScreen"
                component={FirstTestScreen}
            />
        </MainStack.Navigator>
    );
}

export function RootStackComponent() {
    return (
        <RootStack.Navigator
            mode="modal"
            screenOptions={{
                cardStyle: {backgroundColor: 'transparent'},
                cardOverlayEnabled: true,
                cardOverlay: () => <ModalOverlay />,
            }}
        >
            <RootStack.Screen
                name="Main"
                component={MainStackComponent}
                options={{headerShown: false}}
            />
            <RootStack.Screen
                name="FullScreenModal"
                component={FullScreenModule}
                options={{headerShown: false}}
            />
        </RootStack.Navigator>
    );
}
