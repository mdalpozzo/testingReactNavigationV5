import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class SettingsScreen extends React.PureComponent<{}> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings Screen</Text>
            </View>
        );
    }
}

export default SettingsScreen;
