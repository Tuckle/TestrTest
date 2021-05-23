import React, { useCallback, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import { Text, Input, Button, Avatar } from 'react-native-elements';
import Cameraa from '../components/Camera';

const UploadNewTestScreen = (props) => {
    console.log(props);
    const { navigation, profile } = props;
    const [img, setImage] = useState(null);

    // function onPicture({ uri }) {
    //     setImage(uri);
    // }
    const onPicture = useCallback(uri => {
        setImage(uri)
    }, [setImage])

    function onBackToCamera() {
        setImage(null);
    }

    return (
        <>
            {img ? (
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Validate detected options</Text>
                    {/* <TouchableHighlight
                        // style={{ flex: 1 }}
                        onPress={() => {
                            onBackToCamera();
                        }}> */}
                    <Image source={{ uri: img }} style={{flex: 1}}/>
                    {/* </TouchableHighlight> */}
                    <Button
                        title="Confirm" type="outline"
                    />
                </View>
            ) : (
                <Cameraa onPicture={onPicture} />
            )}
            {/* <Button title="Contiune" type="outline" /> */}
        </>
    );
};

export default UploadNewTestScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    alignCenter: {
        alignItems: 'center'
    },
    flex: 1
});
