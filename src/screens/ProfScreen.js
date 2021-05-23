import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Text, Input, Button, Image, Avatar} from 'react-native-elements';

const ProfScreen = (props) => {
    console.log(props);
    const {navigation, profile} = props;
    return (
        <View style={{...styles.alignCenter}}>
            <Text style={styles.text}>Manage tests</Text>
            <Button title="New Test" type="outline"
            onPress={() => navigation.navigate('CreateTest')}  />
            <Button title="View recent tests" type="outline" />
        </View>
    );
};

export default ProfScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    alignCenter: {
        alignItems: 'center'
    }
});
