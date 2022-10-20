import { useState } from "react";
import { useDispatch } from "react-redux";
import { populateCart } from "../../store/cart";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const [liked, setLiked] = useState(produce.liked);

const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={ (e)=> {
            setLiked(!e.target.liked)
            
          }}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {dispatch(populateCart(produce.id))}}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;