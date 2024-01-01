import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const tampilan = ({ navigation }) => {
    useEffect(() => {

        const timeout = setTimeout(() => {

            navigation.replace('menu');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={{ backgroundColor: '#FFEBCD',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center' }}>
            <Image style={{ width: 130,
                            height: 130,
                            resizeMode: 'contain', }} source={require('../images/lg.png')} />
            <Text style={{ fontSize: 12, color:'#000000' }}>Al-Quran Pintar</Text>
        </View>
    );
};



export default tampilan;
