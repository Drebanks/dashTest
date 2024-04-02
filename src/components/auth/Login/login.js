import React, { useState } from "react";
import { Input } from "@/components/UI/Input/input";
import { form, social } from "@/components/constants/index";
import Image from "next/image";
import Button from "@/components/UI/Button/button";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="bg-white w-[348px] m-auto px-5 py-10">
        <form className="">
          <p className="text-center text-lightBlack font-body font-[500] text-[20px] leading-[24px]">
            Login
          </p>
          <div className="mt-8">
            {form.map((item, i) => (
              <Input
                value={data[item.name]}
                onChange={handleChange}
                key={`${i}`}
                {...item}
              />
            ))}
            <Button text="Login"/>
          </div>
          <div className="line-container">
            <div className="line-container__line"></div>
            <div className="or-text">OR</div>
            <div className="line-container__line"></div>
          </div>
          <div>
            {social.map((item, i) => (
              <div className="border border-[#D8DAE5] p-[10px_16px] rounded-[10px] mb-3">
                <div className="flex justify-center items-center gap-x-4">
                  <Image src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
            <p className="text-lightBlack text-center">Forgot your password</p>
            <p className="text-lightBlack text-center mt-3">
              Don't have an account? <span className="text-blue">Sign Up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
