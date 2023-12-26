import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Details ({route}) {
    const {id} = route.params;
    const [data, setData] = useState({})

    const navigation = useNavigation()
    useEffect(() => {
        fetchData( id )
    },[id])
    const fetchData = async (id) => {
        try {
            const res = await fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/1`)
            const data = await res.json()
            setData(data)
        } catch (error) {
           console.error(error) 
        }
        
    }
  return (
    <ScrollView>
        <Text>Detail Product </Text>
        {
        <ScrollView>
        {data?.map((data, index) => {
          return (
        
            key={index}>
              <Text>
              {data.ar} {data.id}
              </Text>
         
          );
        })}
    </ScrollView> 
        }
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}