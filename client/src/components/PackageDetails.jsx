import React from "react";
import familyBasic from "../assets/img/family-basic.jpg";

export default function PackageDetails() {
  return (
    <section className="mt-[40px] bg-[rgba(0,0,0,0.2)] py-[20px] ">
      <div className=" gap-[50px] flex h-[500px] w-full">
        <div class="">
          <h2 className="text-[3rem]"> Family Basic Package</h2>
          <img src={familyBasic} alt="" />
        </div>
        <div>
          <h2 className="text-[3rem] mt-[20px] mb-[10px]">Package Details</h2>
          <ul className="">
          <li className="text-[1.2rem]">3-Day 4-star hotel accomodation</li>
            <li className="text-[1.2rem]">Commercial Flight fees covered</li>
            <p className='font-bold text-[20px]'>price : $ $650</p>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[10px]">
        <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem] rounded-[10px] text-gray-200">
          Add To Cart
        </button>
        <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem] rounded-[10px] text-gray-200">
          Remove From Cart
        </button>
      </div>
    </section>
  );
}
