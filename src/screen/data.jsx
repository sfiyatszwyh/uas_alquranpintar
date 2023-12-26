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
  })
  return (
    <View>
      <Text>alquran</Text>
      <ScrollView>
          {dataQuran?.map((data, index) => {
            return (
              <TouchableOpacity 
              onPress={() => navigateToDetails(1)}
              style={styles.boxData}
              key={index}>
                <Text style={styles.data}>
                {data.nomor} {data.asma}
                </Text>
              </TouchableOpacity>   
            );
          })}
      </ScrollView>
    </View>
  );
};

export default data

const styles = StyleSheet.create({
  data: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  boxData: {
    borderWidth: 1,
  }
})