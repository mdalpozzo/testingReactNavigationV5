import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {TestStackParamList} from '@Root/App';
import {RouteProp} from '@react-navigation/native';

type FirstTestScreenRouteProp = RouteProp<
    TestStackParamList,
    'FirstTestScreen'
>;

type Props = {
    navigation: StackNavigationProp<TestStackParamList, 'FirstTestScreen'>;
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
                <Button
                    title="Second Screen"
                    onPress={() =>
                        this.props.navigation.navigate('SecondTestScreen')
                    }
                />
            </View>
        );
    }
}

export default FirstTestScreen;
