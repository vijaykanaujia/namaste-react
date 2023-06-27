import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart);
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart{" "}
        <button
          className="bg-green-100 green-100 p-2 m-2 text-sm"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </h1>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
