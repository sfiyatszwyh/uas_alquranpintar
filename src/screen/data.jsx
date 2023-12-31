import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const data = () => {
  const navigations = useNavigation ()
  const [dataQuran, setDataQuran] = useState(null);
  const getData = async () => {
    try{
      const respon = await fetch ('https://api.npoint.io/99c279bb173a6e28359c/data');
      const hasil = await respon.json();
      setDataQuran(hasil);
    }catch(error){
      console.log(error);
    }
  };
  const navigateToDetails = (id) => {
    navigations.navigate('details', { id });
  }; 
  useEffect(()=>{
    getData();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding:15}}>
      <ScrollView>
          {dataQuran?.map((data, index) => {
            return (
              <TouchableOpacity 
              onPress={() => navigateToDetails(data.nomor)}
              key={index}>
                <View style= {{ backgroundColor: '#FFFDD0',
                                borderRadius: 10,
                                marginVertical: 10,
                                padding: 20,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                elevation: 5, }}>
                    <View style={{ flexDirection:'row'}}>
                      <Text style={{ fontSize:15, marginTop:10, marginBottom:5}}>{data.nomor} </Text>
                      <Text style={{ fontSize:15, marginLeft:24 }}>{data.nama}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                      <Text style={{marginLeft:35, fontSize:13, marginTop: -17}}>{data.type} | {data.ayat} Ayat</Text>
                      <Text style={{ textAlign:'right', marginLeft:'auto', marginTop: -31, fontSize:22}}>{data.asma}</Text>
                    </View>
                </View>
              </TouchableOpacity>   
            );
          })}
      </ScrollView>
    </View>
  );
};

export default data

