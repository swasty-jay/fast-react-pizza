import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateQuantity = ({ pizzaId, currenetQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-4">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span>{currenetQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
};

export default UpdateQuantity;
