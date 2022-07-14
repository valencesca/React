import {ItemCount} from "./ItemCount";
import {ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
    return(
        <>
            <h3>{props.greeting}</h3>
            <ItemCount stock ={5} inital = {0}/>
            <ItemList/>
        </>
    );
} 