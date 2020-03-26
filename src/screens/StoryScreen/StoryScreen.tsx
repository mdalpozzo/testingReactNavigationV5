import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {randomColor} from '@Utils/misc';
import {MainStackParamList} from '@Root/navigation';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
    navigation: StackNavigationProp<MainStackParamList, 'Story'>;
    route: RouteProp<MainStackParamList, 'Story'>;
}

class StoryScreen extends React.PureComponent<Props> {
    private handleToStoryScreenButton = () => {
        this.props.navigation.push('Story', {
            backgroundColor: randomColor(),
        });
    };

    private handleToModalButton = () => {
        this.props.navigation.push('FullScreenModal');
    };

    private handleBackToFeedsButton = () => {
        this.props.navigation.popToTop();
    };

    private handleBackToLastStory = () => {
        this.props.navigation.pop();
    };

    public render() {
        const {
            route: {params: {backgroundColor} = {backgroundColor: null}},
        } = this.props;
        return (
            <View
                style={[
                    styles.container,
                    backgroundColor ? {backgroundColor} : null,
                ]}
            >
                <Text style={styles.title}>Story Screen</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handleToStoryScreenButton}
                >
                    <Text style={styles.buttonText}>Go to Next Story</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.toModalButton]}
                    onPress={this.handleToModalButton}
                >
                    <Text style={styles.buttonText}>
                        Open Full Screen Modal
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        styles.backToLastStoryButton,
                    ]}
                    onPress={this.handleBackToLastStory}
                >
                    <Text style={styles.buttonText}>Back to Last Story</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.backToFeedsButton]}
                    onPress={this.handleBackToFeedsButton}
                >
                    <Text style={styles.buttonText}>Back to Feeds</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default StoryScreen;
