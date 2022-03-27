import { CartItem } from "../components";
import { IProduct } from "../interfaces/IProducts";

interface IProps {
  cartItems: IProduct[];
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<IProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
  setIsOpen,
}) => {
  const handleSetIsOpen = (): void => {
    setIsOpen(false);
  };

  const calculateTotal = (items: IProduct[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div className="fixed top-0 left-0 z-30 bg-gradient-to-br from-indigo-400 to-indigo-600 h-screen w-screen text-white px-6 lg:w-1/3 lg:right-0 lg:left-auto rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 fixed text-white top-4 right-4 hover:cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={handleSetIsOpen}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
      <div className="text-lg font-bold text-center mt-16 mb-4">Your Cart</div>
      {cartItems.length === 0 ? (
        <p className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          No items in cart.
        </p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length !== 0 ? (
        <div className="flex justify-between items-center font-bold">
          <span>Total :</span>{" "}
          <span>$ {calculateTotal(cartItems).toFixed(2)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
