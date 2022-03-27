import { useState } from "react";
import { useQuery } from "react-query";
import { Cart, Item, LinearProgress } from "./components";
import { IProduct } from "./interfaces/IProducts";

const fetchProducts = async (): Promise<IProduct[]> =>
  await (
    await fetch("https://fakestoreapi.com/products/category/men's clothing")
  ).json();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IProduct[]);
  const { data, isLoading, error } = useQuery<IProduct[]>(
    "products",
    fetchProducts
  );

  const getTotalItems = (items: IProduct[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: IProduct) => {
    setCartItems((prevItems) => {
      // ? 1. Is the item already added in the card ?
      const isItemInCart = prevItems.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // ? First time the item is added
      return [...prevItems, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as IProduct[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="flex flex-col h-screen w-screen">
      {isOpen && (
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          setIsOpen={setIsOpen}
        />
      )}
      <header
        className="py-2 lg:py-3 bg-indigo-600 text-white flex items-center justify-end px-6 text-right"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block lg:h-6 lg:w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>

          <div className="bg-red-500 h-3 w-3 text-[8px] flex items-center justify-center rounded-full absolute top-0 -right-1 z-20 lg:h-4 lg:w-4 lg:-top-1">
            {getTotalItems(cartItems)}
          </div>
        </div>

        <span className="text-sm font-bold ml-3 lg:text-base">Cart</span>
      </header>
      <div className="flex flex-wrap justify-center items-center lg:items-start lg:flex-wrap lg:gap-4 px-4 flex-1 overflow-y-auto lg:max-w-8xl">
        {data?.map((item) => (
          <Item key={item.id} item={item} handleAddToCard={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
