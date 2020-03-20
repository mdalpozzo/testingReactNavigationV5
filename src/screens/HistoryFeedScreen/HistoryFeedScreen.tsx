import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class HistoryFeedScreen extends React.PureComponent<{}> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>History Feed Screen</Text>
            </View>
        );
    }
}

export default HistoryFeedScreen;
