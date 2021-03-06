import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '@Root/navigation';
import {RouteProp} from '@react-navigation/native';

type FirstTestScreenRouteProp = RouteProp<
    MainStackParamList,
    'FirstTestScreen'
>;

type Props = {
    navigation: StackNavigationProp<MainStackParamList, 'FirstTestScreen'>;
    route: FirstTestScreenRouteProp;
};

class FirstTestScreen extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>First Test Screen</Text>
                {/* <Button
                    title="Second Screen"
                    onPress={() =>
                        this.props.navigation.navigate('SecondTestScreen')
                    }
                /> */}
            </View>
        );
    }
}

export default FirstTestScreen;
