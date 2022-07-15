import React from 'react'
import {Item} from "./Item";

export const ItemList = ({items}) => {
    return(
        <>
        {
            items.map(data => 
                <Item key={data.id} title = {data.title} description ={data.description} price ={data.price} pictureUrl ={data.pictureUrl}></Item>)
        }
        </>


    );

}

