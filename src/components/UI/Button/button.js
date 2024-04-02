// import classes from "./Button.module.css";
// import { Link } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";

// import CircleLoader from "../../assets/images/auth/circle-loader.svg";

const Button = ({
  isLink,
  text,
  onClick,
  to,
  className,
  loading,
  disabled,
  buttonType,
}) => {
  return isLink ? (
    <Link to={to} className={`link`}>
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${className} relative ${`button`} ${
        buttonType ? "secondary" : ""
      }`}
      disabled={disabled || false}
    >
      {loading ? (
        // <Image src={CircleLoader} alt="" className="center-absolute" />
        <ClipLoader
          color="#fff"
          loading={loading}
          size={25}
          className="center-absolute"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
