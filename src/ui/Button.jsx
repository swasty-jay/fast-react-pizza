import { Link } from "react-router-dom";

const Button = ({ children, disabled, to }) => {
  if (to)
    return (
      <Link to={to} className="btn">
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} to={to} className="btn">
      {children}
    </button>
  );
};

export default Button;
