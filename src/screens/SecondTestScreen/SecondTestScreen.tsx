import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class SecondTestScreen extends React.PureComponent {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Second Test Screen</Text>
                <View style={styles.contentPlaceholder} />
            </View>
        );
    }
}

export default SecondTestScreen;
