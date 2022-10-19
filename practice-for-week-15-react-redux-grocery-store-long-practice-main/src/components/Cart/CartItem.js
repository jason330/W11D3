import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrementCart, depopulateCart, populateCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={()=> setCount(count)}
        />
        <button onClick={()=> dispatch(populateCart(item.id))}
          className="cart-item-button"
        >
          +
        </button>
        <button onClick={()=> dispatch(decrementCart(item.id))}
          className="cart-item-button"
        >
          -
        </button>
        <button onClick={()=>dispatch(depopulateCart(item.id))}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;