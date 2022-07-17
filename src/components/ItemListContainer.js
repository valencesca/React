import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import {products} from "../utils/products";
import {customFetch} from "../utils/customFetch";
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemListContainer = (props) => {

    const [datos,setDatos] = useState([]);

    
    useEffect(() => {
        customFetch(products,2000)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])
    

    return(
        <>
            <h3>{props.greeting}</h3>
            <ItemList items = {datos}/>
            <ItemDetailContainer/>
        </>
    );
} 