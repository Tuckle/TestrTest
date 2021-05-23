import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Input, CheckBox, Button, Image, Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const CreateTestScreen = (props) => {
    console.log(props);
    const { navigation, profile } = props;
    const [sendCorrect, setSendCorrect] = useState(false)
    return (
        <View style={{ ...styles.alignCenter }}>
            <Text style={styles.text}>Create Test</Text>
            <Input
                placeholder='Test Name'
            />
            <CheckBox
                title='Send the correct answer after test'
                checked={sendCorrect}
                onPress={() => { setSendCorrect(!sendCorrect) }}
            />
            <Input
                label='Max Submission Time :'
            />

            <View style={{
            }}>
                <Text>Take photo?</Text>
                <Button
                    icon={
                        <Icon
                            name='camera'
                            type='feather'
                        />
                    }
                    title=""
                    type="clear"
                    onPress={() => navigation.navigate('UploadNewTestScreen')}
                />
            </View>
        </View>
    );
};

export default CreateTestScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    alignCenter: {
        alignItems: 'center'
    }
});
