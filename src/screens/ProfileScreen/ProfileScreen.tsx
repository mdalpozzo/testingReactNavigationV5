import * as React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

class ProfileScreen extends React.PureComponent<{}> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Profile Screen</Text>
            </View>
        );
    }
}

export default ProfileScreen;
