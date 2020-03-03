import React , {useState,useEffect} from 'react';
import {ToastAndroid} from 'react-native'
import yelp from '../api/yelp'

export default()=>{
    const [results, setResults] = useState([]);

    const searchApi =async (searchTerm) =>{
        
         try{
             
            const response = await yelp.get('/search', {
                params:{
                    limit:50 ,
                    term: searchTerm,
                    location: 'san jose'
                }
            }
            
            );
            setResults(response.data.businesses);
             } catch(err){
                ToastAndroid.show(err.Message, ToastAndroid.SHORT);

        }
    }
    useEffect(() =>{
        searchApi('pasta');
    }, []);
    return [searchApi,results]
}