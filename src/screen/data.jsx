import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const data = ({ navigation }) => {
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
    <View style={{ flex: 1, backgroundColor: 'white', padding:15, }}>
      <ScrollView>
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
        <Text style={{ textAlign:'center', marginLeft:'auto', color: '#000000'}}>Al-Quran</Text>
      </View>
          {dataQuran?.map((data, index) => {
            return (
              <TouchableOpacity 
              onPress={() => navigateToDetails(data.nomor)}
              key={index}>
                <View style= {{ backgroundColor: '#D2B48C',
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
                      <Text style={{ fontSize:15, marginTop:10, marginBottom:5,  color: '#000000'}}>{data.nomor} </Text>
                      <Text style={{ fontSize:15, marginLeft:24, color: '#000000' }}>{data.nama}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                      <Text style={{marginLeft:35, fontSize:13, marginTop: -17, color: '#000000'}}>{data.type} | {data.ayat} Ayat</Text>
                      <Text style={{ textAlign:'right', marginLeft:'auto', marginTop: -31, fontSize:22, color: '#000000'}}>{data.asma}</Text>
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

