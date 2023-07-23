import {useEffect,useState} from 'react'
import axios from 'axios'

export const Fetch=(url)=>{
let payload;
 useEffect(()=>{
    const FetchData=async()=>{
        let {data}=await axios.get(url)
        console.log(data);
        payload=data
    }

    FetchData(url)

 },[url])
 
 return payload
}

