import { useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold mt-7">
        Hello <span className="uppercase font-xl space-x-1"> {userName}</span>{" "}
        Your cart is empty. Start adding some pizzas 🍕
      </p>
    </div>
  );
}

export default EmptyCart;
