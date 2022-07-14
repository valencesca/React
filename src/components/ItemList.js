import React from 'react'
import {Item} from "./Item";

export const ItemList = () => {
    const items = [
        {
            id: "1",
            title: "Adidas Superstar",
            description: "Las zapatillas clasicas de Adidas",
            price: 20000,
            pictureUrl:"../img/adidas superstar W.jpg"
        },
        {
            id: "2",
            title: "Jordan Blancas",
            description: "Zapatillas Jordan que te harán volar",
            price: 30000,
            pictureUrl:"../img/Joradan blancas.png"
        },
        {
            id: "3",
            title: "Nike Black",
            description: "Zapatillas Nike negras",
            price: 21000,
            pictureUrl:"../img/nike negras M.jpg"
        },
        {
            id: "4",
            title: "White Fila",
            description: "Fila Blancas en tendencia",
            price: 26000,
            pictureUrl:"../img/fila blancas.jpg"
        },
        {
            id: "5",
            title: "Yeezy",
            description: "La zapatillas de moda en UK ",
            price: 40000,
            pictureUrl:"../img/Yeezy.jpg"
        }
    ]
    


    const myPromise = new Promise ((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve(task);
            }, 2000);
        }
        else{
            reject("Error")
        }
    })
    
    return(
        <>
        {

            items.map(data => 
                .then(()=><Item id={data.id} title = {data.title} description ={data.description} price ={data.price} pictureUrl ={data.pictureUrl}></Item>)
                    
            )
            
            
        }
        </>


    );

}

