import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Input, Button, Image, Avatar } from 'react-native-elements';

const HomeScreen = (props) => {
    console.log(props);
    const { navigation, profile } = props;
    return (
        <View style={styles.container}>
            <Text>Pick your side!</Text>
            <Button title="Elev" type="outline" />
            <Button title="Profesor" type="outline"
            onPress={() => navigation.navigate('Prof')} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    alignCenter: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
