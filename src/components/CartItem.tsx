import { IProduct } from "../interfaces/IProducts";

interface IProps {
  item: IProduct;
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<IProps> = ({ item, addToCart, removeFromCart }) => (
  <div className="rounded shadow-lg px-3 py-4">
    <div className="text-base font-bold">{item.title}</div>
    <div className="flex justify-between items-center">
      <div className="text-xs">
        Price: <span className="font-bold">${item.price}</span>
      </div>
      <div className="text-xs">
        Total:{" "}
        <span className="font-bold">
          ${(item.amount * item.price).toFixed(2)}
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <div>{item.amount}</div>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  </div>
);

export default CartItem;
