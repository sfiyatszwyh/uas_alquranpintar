import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


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
   
    <ScrollView>
        <Text>Detail Product </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
          {dataQuran?.map((data, index) => {
            return (
              <View 
              style={styles.boxData}
              key={index}>
                <Text style={styles.data}>
                {data.ar}  {data.nomor}
                </Text>
                <Text style={styles.data}>
                {data.id}
                </Text>
              </View>   
            );
          })}
    </ScrollView>
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