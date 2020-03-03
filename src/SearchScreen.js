import React , {useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = ()=>{
    const [term,SetTerm] = useState('');
    const[searchApi,results] = useResults();
    const FilterResultsByPrice= (price) =>{
       return results.filter(result => {
            if (result.price === price){
                return result
                

            }
        })

    }

    return (<>
        <SearchBar term ={term} 
        OnTermChange={(newTerm) => SetTerm(newTerm)}
        OnTermSubmit = {()=>searchApi(term)}
        ></SearchBar>
    <ScrollView>    
    <ResultsList  title ="Cost Effective" List={FilterResultsByPrice('$')}></ResultsList>
    <ResultsList title ="Bit Pricer" List={FilterResultsByPrice('$$')}></ResultsList>
    <ResultsList title ="Big Spender" List={FilterResultsByPrice("$$$")}> </ResultsList>
    </ScrollView>
        </>
    )
  
    
}

const styles = StyleSheet.create({
ScreenStyle :{
    backgroundColor:'white'
}
})

export default SearchScreen;