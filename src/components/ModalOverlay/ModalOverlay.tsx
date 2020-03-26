import React from 'react';
import styles from './styles';
import {View} from 'react-native';

const ModalOverlay: React.FC<{}> = (): React.ReactElement => {
    return <View style={styles.container} />;
};

export default ModalOverlay;
