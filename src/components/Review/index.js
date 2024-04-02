import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button/button";
import Empty from "@/assets/images/empty.svg";
import Review from "@/components/Modal/review";
import {review} from "@/components/constants/index"
import First from "@/assets/images/first.svg"
import Second from "@/assets/images/second.svg"
import Third from "@/assets/images/third.svg"
import Last from "@/assets/images/last.svg"


const Index = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
        console.log("dadd")
    }
  return (
    <>
    {show  && <Review setShow={setShow}/>}
    <div>
        <div className="flex justify-between">
            <div className="flex-1 mr-8">
                {review.map((item, i) => (
                    <div key={i} className="border-b-[2px] border-[#D9D9D9] last-of-type:border-b-[0px]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2">
                        <Image src={item.img} alt=""/>
                        <p>{item.name}</p>
                        <p>{item.time}</p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Image src={item.img4} alt=""/>
                            <p>{item.rating}</p>
                        </div>
                    </div>
                    <div>
                        <p>{item.content}</p>
                        <div className="flex gap-x-4 items-center">
                            <Image src={item.img2} alt=""/>
                            <Image src={item.img3} alt=""/>
                            <Image src={item.img5} alt=""/>
                        </div>
                    </div>
                    </div>
                ))}

            </div>
            <div className="grid grid-cols-2">
                <Image src={First} alt=""/>
                <Image src={Second} alt=""/>
                <Image src={Third} alt=""/>
                <Image src={Last} alt=""/>

            </div>
        </div>
        {review.length < 1 && (
            <div className="flex justify-center items-center">
                <div>
                <Image src={Empty} alt="" className="mb-4" />
                <p className="text-center mb-4">Oops! No review yet</p>
                <Button text="LEAVE A REVIEW" onClick={handleClick} />
                </div>
            </div>

        )}
    </div>
    </>
  );
};

export default Index;
