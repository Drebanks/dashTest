import React, { useState } from 'react'
import ModalLayout from '@/components/Layout/modal'
import OutsideClickHandler from "react-outside-click-handler";
import { amenities } from '@/components/constants/index';
import Image from "next/image"
import Select from '@/assets/images/down.svg'
import Star from "@/assets/images/star.svg"
import Button from "@/components/UI/Button/button"


const Review = ({setShow}) => {
    const [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(true)
    }
  return (
    <ModalLayout>
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <h1 className="text-center font-body text-lightBlack">
          Review Location
        </h1>
        <p className="text-lightBlue font-body mt-4">
          Bonny and Clyde Street, Ajao Estate, Lagos
        </p>
        <form className="mt-4">
          <div className="bg-[#F3F7FE] w-full p-4 rounded-[10px] border border-[#D4DCF1]">
            <div className="flex justify-between">
              <p>Select Amenities</p>
              <Image src={Select} alt="" onClick={handleClick} />
            </div>
            {display && (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {amenities.map((item, idx) => (
                  <label
                    htmlFor={item.for_id}
                    className="flex items-center"
                    key={idx}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 text-green-500 rounded-md transition duration-200 focus:ring-2 focus:ring-green-500"
                      id={item.for_id}
                      value={item.name}
                    />
                    <span className="ml-2 text-[14px]">{item.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4">
            <p>Rate Location</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <Image key={idx} src={Star} alt="" className="mr-1" />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p>Write Review</p>
            <textarea className="mt-2 w-full p-4 rounded-[10px] border border-[#D4DCF1]"></textarea>
          </div>
          <div className="flex items-center mt-4">
  <label className="text-[#484851] flex items-center space-x-2">    
    <input type="checkbox" className="mr-2"/>
    Post as Anonymous
  </label>
</div>
<div className="flex justify-between w-full">
    <div className="w-[42%]">
        <Button
        text="SUBMIT"
        disabled="disabled"
         />
    </div>
    <div className="w-[42%]">
        <Button
        text="CANCEL"
        buttonType="secondary" />

    </div>
</div>
        </form>
      </OutsideClickHandler>
    </ModalLayout>
  );
}

export default Review