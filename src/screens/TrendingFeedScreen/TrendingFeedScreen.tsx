import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {CompositeNavigationProp} from '@react-navigation/native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {FeedsTabsParamList, MainStackParamList} from '@Root/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
    navigation: CompositeNavigationProp<
        MaterialTopTabNavigationProp<FeedsTabsParamList, 'Trending'>,
        StackNavigationProp<MainStackParamList>
    >;
}

class TrendingFeedScreen extends React.PureComponent<Props> {
    private handleToStoryScreenButton = () => {
        this.props.navigation.navigate('Story');
    };

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trending Feed Screen</Text>
                <TouchableOpacity
                    style={styles.storyButtonContainer}
                    onPress={this.handleToStoryScreenButton}
                >
                    <Text style={styles.storyButtonText}>
                        Go to Story Screen
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TrendingFeedScreen;
