import React from "react";
import familyBasic from "../assets/img/family-basic.jpg";

export default function PackageDetails() {
  return (
    <section className="mt-[40px] bg-[rgba(0,0,0,0.2)] ">
      <div className=" gap-[50px] flex h-[500px] w-full">
        <div class="">
          <h2 className="text-[3rem]"> Family Basic Package</h2>
          <img src={familyBasic} alt="" />
        </div>
        <div>
          <h2 className="text-[3rem] mt-[20px] mb-[10px]">Package Details</h2>
          <ul className="">
            <li className='text-[1.2rem]'>fasdf</li>
            <li className='text-[1.2rem]'>fasdf</li>
            <li className='text-[1.2rem]'>asdf</li>
            <li className='text-[1.2rem]'>asd</li>
            <li className='text-[1.2rem]'>asdfa</li>
          </ul>
        </div>
      
      </div>
      <div className='w-full flex justify-center gap-[10px]'>
            <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem]">Add To Cart</button>
            <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem]">Remove From Cart</button>
        </div>
    </section>
  );
}
