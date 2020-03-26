import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {CompositeNavigationProp} from '@react-navigation/native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {FeedsTabsParamList, MainStackParamList} from '@Root/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
    navigation: CompositeNavigationProp<
        MaterialTopTabNavigationProp<FeedsTabsParamList, 'History'>,
        StackNavigationProp<MainStackParamList>
    >;
}

class HistoryFeedScreen extends React.PureComponent<Props> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>History Feed Screen</Text>
            </View>
        );
    }
}

export default HistoryFeedScreen;
