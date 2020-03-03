import React ,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,FlatList,Image} from 'react-native'
import ResultsDetail from '../components/ResultsDetail'
import yelp from '../api/yelp'

const ResultShow = ({navigation}) => {
    const [result,setResult] = useState(null);
    const result_id = navigation.getParam('id');
    const getResultByID = async (id) =>{
        const response =  await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(()=>{
    getResultByID(result_id)
    },[]);
    if(!result){
        return null
    }


    return <>
    <Text style ={styles.TextStyle}>{result.name}</Text>
        <FlatList
            data ={result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item})=>{
                return <Image source ={{uri:item}} style ={styles.imageStyle}/>
            }}
        
        />
        
    </>
}
const styles = StyleSheet.create({
    imageStyle:{
        flex:1,
        height:200,
        marginBottom :15
        
    },
    TextStyle:{
        fontSize:25,
        fontWeight: 'bold'
    }
});

export default ResultShow;