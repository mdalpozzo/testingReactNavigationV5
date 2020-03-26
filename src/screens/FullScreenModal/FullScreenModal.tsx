import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {RootStackParamList} from '@Root/navigation';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'FullScreenModal'>;
    route: RouteProp<RootStackParamList, 'FullScreenModal'>;
}

class FullScreenModule extends React.PureComponent<Props> {
    private handleBackButton = () => {
        this.props.navigation.pop();
    };

    private handlePopToTop = () => {
        this.props.navigation.popToTop();
    };

    private handleToModal = () => {
        this.props.navigation.push('FullScreenModal');
    };

    public render() {
        return (
            <View style={[styles.container]}>
                <Text style={styles.title}>Full Modal Screen</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handleToModal}
                >
                    <Text style={styles.buttonText}>Open Another Modal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handleBackButton}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handlePopToTop}
                >
                    <Text style={styles.buttonText}>Pop to Top</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FullScreenModule;
