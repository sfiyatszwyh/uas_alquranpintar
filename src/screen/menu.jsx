import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const menu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFEBCD', padding:15, alignItems: 'center', }}>
        <Image style={{ width: 130,
                            height: 130,
                            resizeMode: 'contain', 
                            marginTop:70,
                            marginBottom:20
                            }} source={require('../images/lg.png')} />
    <TouchableOpacity onPress={() => navigation.navigate('data')}>
        <View>
            <Text style={{ borderWidth: 1,
                paddingHorizontal: 50,
                borderColor: '#000000',
                marginBottom: 20,
                paddingTop:10,
                paddingBottom:10,
                color:'#000000' }}>Baca Al-Quran</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('asmaul')}>
        <View>
            <Text style={{ borderWidth: 1,
                paddingHorizontal: 50,
                borderColor: '#000000',
                marginBottom: 20,
                paddingTop:10,
                paddingBottom:10,
                color:'#000000' }}>Asmaul Husna</Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}

export default menu