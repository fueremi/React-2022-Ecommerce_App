import { IProduct } from "../interfaces/IProducts";

interface IProps {
  item: IProduct;
  handleAddToCard: (clickedItem: IProduct) => void;
}

const Item: React.FC<IProps> = ({ item, handleAddToCard }) => (
  <div className="rounded shadow-xl px-4 py-6 mb-2 hover:scale-105 hover:cursor-pointer transition w-full lg:w-1/4 lg:h-[440px] lg:flex lg:flex-col lg:justify-around">
    <img src={item.image} alt={item.title} className="flex mb-4 h-40 mx-auto" />

    <div className="text-base font-bold leading-5 mb-1">{item.title}</div>
    <div className="flex items-center justify-between mb-2">
      <div className="text-sm flex items-center">
        Rating:{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400 inline-block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>{" "}
        {item.rating.rate}
      </div>
      <div className="text-sm font-bold leading-5">
        Price: <span className="underline">${item.price}</span>
      </div>
    </div>

    <div className="text-sm mb-4">
      {item.description.length > 200
        ? item.description.slice(0, 200) + "..."
        : item.description}
    </div>
    <button
      className="bg-indigo-500 rounded w-full shadow-lg px-1 py-2 text-white text-xs hover:bg-indigo-400"
      onClick={() => handleAddToCard(item)}
    >
      Add To Cart
    </button>
  </div>
);

export default Item;
