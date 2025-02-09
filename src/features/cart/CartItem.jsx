import { useSelector } from "react-redux";
import { formatCurrency } from "./../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-4 ">
        <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} currenetQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
