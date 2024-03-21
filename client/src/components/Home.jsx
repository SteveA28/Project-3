import React from "react";
import bahamas from "../assets/img/bahamas.webp";
import familyBasic from "../assets/img/family-basic.jpg";
import familyPremium from "../assets/img/family-premium.jpeg";
import familyPlatinum from "../assets/img/family-platinum.jpeg";
import groupBasic from "../assets/img/group-basic.jpeg";
import groupPremium from "../assets/img/group-premium.jpeg";
import groupPlatinum from "../assets/img/group-platinum.jpeg";
import individualBasic from "../assets/img/individual-basic.jpeg";
import individualPremium from "../assets/img/individual-premium.jpeg";
import individualPlatinum from "../assets/img/individual-platinum.jpeg";

export default function home() {
  return (
    <>
      <section className="pb-[40px]">
        <div className="relative">
          <img src={bahamas} className="h-[280px] w-full shadow-md" alt="" />
          <div className="intro absolute bottom-10 pl-[10px]">
            <h1 className=" text-blue-100 text-[4.5rem] font-bold  font-montserrat">
              It's Time For A Get Away With TripSet!
            </h1>
          </div>
        </div>

        <div className="px-[20px]">
          <p className="font-montserrat text-[1.2rem] mt-[20px] font-[500]">
          
Discover the world with TripSet, your portal to four breathtaking destinations. Our expertly curated vacation packages promise unforgettable adventures, relaxation, and cultural immersion.

<div>
      <div style={{ textAlign: 'center' }}>
        <h2>Bahamas</h2>
        <p>Experience paradise with crystal-clear waters, vibrant coral reefs, and sun-soaked beaches in the Bahamas. A tropical escape awaits.</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2>Caribbean</h2>
        <p>Dive into the vibrant life of the Caribbean. Rich cultures, lively music, and stunning landscapes make for the ultimate island-hopping journey.</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2>Hawaii</h2>
        <p>Embrace the spirit of Aloha. Hawaii's volcanoes, waterfalls, and cultural sites invite you on an enchanting journey through paradise.</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2>Alaska</h2>
        <p>Venture into the wilds of Alaska. Majestic glaciers, rugged landscapes, and abundant wildlife offer an adventure like no other.</p>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>With TripSet, unforgettable memories are just a click away. Embark on your journey with us today!</p>
      </div>
    </div>
          </p>

          <div className="category-details px-[20px] ">
          <h2 className="font-bold  text-left text-[1.2rem] mt-[50px]">
            Choose A Category:
          </h2>

          <div className="categories mt-[20px] flex gap-4">
            <div className="category bg-blue-500 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md">
              Individual
            </div>
            <div className="category bg-blue-500 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md">
              Family
            </div>
            <div className="category bg-blue-500 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md">
              Group
            </div>
          </div>
        </div>

        <div className="package-details px-[20px]">
          <h2 className="font-bold  text-left text-[1.2rem] mt-[50px]">
            Our Packages:
          </h2>

          <div className="packages mt-[20px]  justify-center flex flex-wrap   gap-3">
            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={familyBasic} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Family Basic Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $650
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={familyPremium} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Family Premium Package
              </h3>

              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $850
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={familyPlatinum} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Family Platinum Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $1100
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            {/* --------------------  */}

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={groupBasic} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Group Basic Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $750
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={groupPremium} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Group Premium Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $900
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={groupPlatinum} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Group Platinum Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $1200
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>
            {/* ------------------- */}
            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img src={individualBasic} className="h-[170px] w-full" alt="" />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Individual Basic Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $500
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img
                src={individualPremium}
                className="h-[170px] w-full"
                alt=""
              />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Individual Premium Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $750
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>

            <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
              <img
                src={individualPlatinum}
                className="h-[170px] w-full"
                alt=""
              />
              <h3 className="font-bold mt-[5px] text-center text-violet-700">
                Individual Platinum Package
              </h3>
              <p className="package-price text-center text-[1.6rem] my-[50px] ">
                $950
              </p>
              <button class=" bg-gray-500 py-[10px] rounded-md text-white">
                View Details
              </button>
            </div>
          </div>
        </div>        </div>
      </section>
    </>
  );
}
