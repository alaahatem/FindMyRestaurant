import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term,OnTermChange,OnTermSubmit})=>{
    return(<View style ={styles.style}> 
        <Feather style ={styles.iconStyle}name ='search'></Feather>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect = {false}
        style ={styles.inputStyle} 
        placeholder ='search'
        value ={term}
        onChangeText = {OnTermChange} 
        onEndEditing = {OnTermSubmit}
        ></TextInput>
        
    </View>
    );
}

const styles = StyleSheet.create({
   style : {
       backgroundColor : 'white',
       marginHorizontal: 15,
       height:40,
       borderRadius:5,
       flexDirection: 'row',
       marginTop:10,
       marginBottom:10
   },
   inputStyle:{
       flex:1,
       fontSize:18

   },
   iconStyle:{
       fontSize:30,
       alignSelf: 'center',
       marginHorizontal: 15
   }

})

export default SearchBar;