import React from "react";

export default function Package({ img, packageType, packagePrice }) {
  return (
    <div className="package p-[4px] py-[10px] flex flex-col rounded-md border-gray-400 border-solid border-[1.5px] w-[300px] ">
      <img src={img} className="h-[170px] object-cover w-full" alt="" />
      <h3 className="font-[500] mt-[10px] text-center text-violet-700 text-[1.1rem]">
        {packageType}
      </h3>
      <p className="package-price font-[600] text-center text-[1.6rem] mt-[40px] mb-[30px] ">
        {packagePrice}
      </p>
      {/* <button className=" bg-gray-500 py-[10px] rounded-md text-gray-100 font-bold">
        View Details
      </button> */}
      <button className=" bg-blue-400 mt-[5px] py-[10px] rounded-md text-black font-bold">
        Add To Cart
      </button>
    </div>
  );
}
