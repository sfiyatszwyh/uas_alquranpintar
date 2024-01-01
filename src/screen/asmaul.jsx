import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'


const asmaul = ({navigation}) => {
    const [dataQuran, setDataQuran] = useState(null);
     const getData = async () => {
    try{
      const respon = await fetch ('https://raw.githubusercontent.com/mikqi/dzikir-counter/master/www/asmaul-husna.json');
      const hasil = await respon.json();
      setDataQuran(hasil);
      //console.log(hasil.data);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getData();
  }, [])

  

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding:15}}>
      <ScrollView>
      <Image source={require('../images/baru.jpg')} style={{height:100,
          width:290,
          borderRadius: 10,
     }}/>
     <View style={{ flexDirection:'row', paddingBottom:10, paddingTop:15}}>
        <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => navigation.goBack() }>
            <Image source={require('../images/back.png')} style={{width:20, height:20}}/>
            <Text style={{ color: '#000000'}} >Back</Text>
        </TouchableOpacity>
        <Text style={{ textAlign:'center', marginLeft:'auto', color: '#000000'}}>Asmaul Husna</Text>
      </View>
          {dataQuran?.map((data, index) => {
            return(
                <View key={index}>
                  <Text>
                    {data.urutan}
                  </Text>
                  <Text>
                    {data.latin}
                  </Text>
                  <Text>
                    {data.arab}
                  </Text>
                  <Text>
                    {data.arti}
                  </Text>
                </View>
            )
          }
          )}
      </ScrollView>
    </View>
  )
}

export default asmaul