import "./item.css";

export const Item = (props) => {
  return (
    <div>
        <img src={props.pictureUrl}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>${props.price}</h4>
    </div>
  )
}
