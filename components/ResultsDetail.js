import React from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

const ResultsDetail = ({result})=>{
    return <View style ={styles.container}>
        <Image style={styles.image}source={{uri: result.image_url}}></Image>
        <Text style ={styles.text}>{result.name}</Text>
        <Text >{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}
const styles = StyleSheet.create({
    image :{
        height:200,
        width: 250,
        borderRadius:5,
        overlayColor:"black"
    },
    text :{
        fontSize:14,
        fontWeight:"bold"
    },
    container:{
        marginLeft:15,
        marginBottom:15
    }
});
export default ResultsDetail;