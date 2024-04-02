import Image from "next/image";
 import { useState } from "react";

export const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  svg2,
  svg3,
  onChange,
  maxLength,
}) => {
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <label className="flex flex-col mb-4">
      <p className="font-Regular text-sm font-semibold leading-[30px] text-thinGrey">
        {label}
      </p>
      <div className="relative">
        <input
          type={type === "password" && password ? "text" : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={`inside`}
        />
        {svg2 && (
          <Image
            src={password ? svg3 : svg2}
            alt="show"
            className="image"
            onClick={handlePassword}
          />
        )}
      </div>
    </label>
  );
};
