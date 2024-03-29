import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Asmaul = ({ navigation }) => {
  const [dataQuran, setDataQuran] = useState(null);

  const getData = async () => {
    try {
      const respon = await fetch('https://raw.githubusercontent.com/mikqi/dzikir-counter/master/www/asmaul-husna.json');
      const hasil = await respon.json();
      setDataQuran(hasil);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Membagi data menjadi dua bagian
  const middleIndex = Math.ceil(dataQuran?.length / 2);
  const leftData = dataQuran?.slice(0, middleIndex);
  const rightData = dataQuran?.slice(middleIndex);

  return (
    <View style={{ flex: 1,
      backgroundColor: 'white', }}>
      <View style={{ flexDirection: 'row',
    overflow: 'hidden', }}>
      </View>
      <ScrollView style={{ paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,}}>
      <View style={{ flexDirection:'row', backgroundColor: '#ded0c1', borderRadius: 10,}}>
          <Image style={{ width: 100,
                                height: 100,
                                resizeMode: 'contain',
                                }} source={require('../images/lg.png')} />
          <Text style={{ padding:10,  marginLeft:'auto', color: '#000000', fontWeight: 'bold', fontSize:24,textAlignVertical: 'center', textAlign: 'center'}}>Al-Quran Pintar</Text>
      </View>
     <View style={{ flexDirection:'row', paddingBottom:10, paddingTop:15}}>
        <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => navigation.goBack()}>
            <Image source={require('../images/back.png')} style={{width:20, height:20}}/>
            <Text style={{ color: '#000000'}} >Back</Text>
        </TouchableOpacity>
        <Text style={{ textAlign:'center', marginLeft:'auto', color: '#000000'}}>Asmaul Husna</Text>
      </View>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flex: 1,
    marginRight: 10, }}>
            {leftData?.map((data, index) => (
              <View style={{ marginBottom: 20,
                padding: 15,
                backgroundColor: '#ded0c1',
                borderRadius: 10,
                elevation: 3, }} key={index}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', }}>{data.urutan}</Text>
                <Text style={{ fontSize: 16, color: '#555', fontStyle: 'italic',}}>{data.latin}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>{data.arab}</Text>
                <Text style={{ fontSize: 15, color: '#777', fontStyle: 'italic',}}>{data.arti}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1, marginLeft: 10, }}>
            {rightData?.map((data, index) => (
              <View style={{ marginBottom: 20,
                padding: 15,
                backgroundColor: '#ded0c1',
                borderRadius: 10,
                elevation: 3, }} key={index}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', }}>{data.urutan}</Text>
                <Text style={{ fontSize: 16, color: '#555', fontStyle: 'italic', }}>{data.latin}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>{data.arab}</Text>
                <Text style={{ fontSize: 15, color: '#777', fontStyle: 'italic', }}>{data.arti}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default Asmaul;
