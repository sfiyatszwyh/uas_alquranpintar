import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const tampilan = ({ navigation }) => {
    useEffect(() => {

        const timeout = setTimeout(() => {

            navigation.replace('data');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')} />
            <Text>Al-Quran Pintar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
});

export default tampilan;
