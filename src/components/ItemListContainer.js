import React, { useState } from 'react';
import {ItemCount} from "./ItemCount";
import {ItemList } from "./ItemList";
import {products} from "../utils/products";


export const ItemListContainer = (props) => {

    const [datos,setDatos] = useState([]);

    const myPromise = new Promise ((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }
        else{
            reject("Error")
        }
    })
    .then(result => setDatos(result))
    .catch(err => console.log(err))

    return(
        <>
            <h3>{props.greeting}</h3>
            <ItemCount stock ={5} inital = {0}/>
            <ItemList items = {datos}/>
        </>
    );
} 