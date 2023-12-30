import { View, Text, ScrollView, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details ({route}) {
    const {id} = route.params;
    const [dataQuran, setData] = useState(null)

    const navigation = useNavigation()
    useEffect(() => {
        fetchData( id )
    },[id])
    const fetchData = async (id) => {
        try {
            const res = await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
           console.error(error) 
        }
        
    }
  return (
   <View style={{ flex: 1, backgroundColor: 'white', padding:15}}>
    <ScrollView >
      <View style={{ flexDirection:'row'}}>
        <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => navigation.goBack()}>
            <Image source={require('../images/back.png')} style={{width:20, height:20}}/>
            <Text >Back</Text>
        </TouchableOpacity>
        <Text style={{ textAlign:'center', marginLeft:'auto'}}>Surah</Text>
      </View>
        
          {dataQuran?.map((data, index) => {
            return (
              <View 
              style={styles.boxData}
              key={index}>
                <Text style={styles.data}>
               {data.nomor}
                </Text>
                <Text style={styles.data}>
                {data.ar} 
                </Text>
                <Text style={styles.data}>
                {data.id}
                </Text>
              </View>   
            );
          })}
    </ScrollView> 
   </View>
    
  )
}



const styles = StyleSheet.create({
    data: {
      fontSize: 21,
      fontWeight: 'bold'
    },
    boxData: {
      borderWidth: 1,
    }
  })