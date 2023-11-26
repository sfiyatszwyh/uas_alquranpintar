import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

const data = () => {
  const [dataQuran, setDataQuran] = useState(null);
  const getData = async () => {
    try{
      const respon = await fetch ('https://equran.id/api/v2/surat');
      const hasil = await respon.json();
      setDataQuran(hasil.data);
    }catch(error){
      console.log(error);
    }
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
              style={styles.boxData}
              key={index}>
                <Text style={styles.data}>
                {data.nomor} - {data.nama}
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