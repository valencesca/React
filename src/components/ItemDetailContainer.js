import React, { useState, useEffect } from 'react';
import {ItemDetail} from "./ItemDetail";
import {products} from "../utils/products";
import {customFetch} from "../utils/customFetch";

export const ItemDetailContainer = () => {

    const [dato,setDato] = useState({});

    
    useEffect(() => {
        customFetch(products[4],2000)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    

    return(
        <>
            <ItemDetail Item = {dato}/>
        </>
    );
} 