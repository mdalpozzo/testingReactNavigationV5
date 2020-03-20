import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {randomColor} from '@Utils/misc';

interface Props {
    navigation: StackNavigationProp<>;
    route: any;
}

class StoryScreen extends React.PureComponent<Props> {
    private handleToStoryScreenButton = () => {
        this.props.navigation.push('Story', {
            backgroundColor: randomColor(),
        });
    };

    private handleBackToFeedsButton = () => {
        this.props.navigation.popToTop();
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
