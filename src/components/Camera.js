import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

// https://snack.expo.io/@xeteke8423/camera-permission

export default function Cameraa({ navigation, onPicture }) {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);

    console.log(onPicture);
    console.log("SET IMAGE");
    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const setPic = useCallback(uri => {
        setImageUri(uri);
        onPicture(uri);
    }, [setImageUri, onPicture]);

    const permisionFunction = async () => {
        // here is how you can get the camera permission
        const cameraPermission = await Camera.requestPermissionsAsync();

        setCameraPermission(cameraPermission.status === 'granted');

        if (
            cameraPermission.status !== 'granted'
        ) {
            alert('Permission for media access needed.');
        }
    };

    useEffect(() => {
        permisionFunction();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            console.log(data.uri);
            setPic(data.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={(ref) => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                />
            </View>

            <Button title={'Take Picture'} onPress={takePicture} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
    button: {
        flex: 0.1,
        padding: 10,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
});