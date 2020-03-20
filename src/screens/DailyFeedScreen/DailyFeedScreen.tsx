import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
    navigation: StackNavigationProp<>;
}

class DailyFeedScreen extends React.PureComponent<Props> {
    private handleToStoryScreenButton = () => {
        this.props.navigation.navigate('Story');
    };

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Daily Feed Screen</Text>
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

export default DailyFeedScreen;
