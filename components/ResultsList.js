import React from 'react';
import {View,Text,StyleSheet,FlatList , TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation';


const ResultsList = ({title,List,navigation}) =>{
    if(!List.length){
        return null
    }
    return <View>
        <Text style ={styles.TextStyle}>
        {title}
        </Text>

        <FlatList 
        horizontal
        showsHorizontalScrollIndicator ={false}
        data ={List}
        keyExtractor = {(List)=>List.id}
        renderItem = {({item})=>{
            return (
            <TouchableOpacity onPress = {()=>navigation.navigate("ResultShow" ,{id:item.id})}>    
            <ResultsDetail result ={item} ></ResultsDetail>
            </TouchableOpacity>
            )
        }}
        />
    </View>
    
    
}

const styles  = StyleSheet.create({
    TextStyle:{
        fontSize:25,
        fontWeight: "bold",
        marginLeft:15
    }
})

export default  withNavigation(ResultsList);