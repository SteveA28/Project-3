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
          <img src={bahamas} className="h-[400px] w-full shadow-md" alt="" />
          <div className="intro absolute bottom-10 pl-[10px]">
            <h1 className=" text-gray-200 text-[4.5rem] font-bold  font-montserrat">
              It's Time For A Get Away
            </h1>
          </div>
        </div>

        <div className="px-[20px]">
          <p className="font-montserrat text-[1.2rem] mt-[20px] font-[500]">
            Taking a vacation with family, friends or your own is a great way to
            recharge. Enjoy kicking your feet up and enjoying all the luxuries
            of a well-deserved getaway that your future self will thank you for!
          </p>

          <div className="category-details">
            <h2 className="font-bold text-[1.2rem] mt-[50px]">
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

            <div className="package-details ">
              <h2 className="font-bold text-[1.2rem] mt-[50px]">
                Our Packages:
              </h2>

              <div className="packages mt-[20px]  justify-center flex flex-wrap gap-3">
                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src={familyBasic} className="h-[170px] w-full" alt="" />
                  <h3 className="font-bold mt-[5px] text-center text-violet-700">
                    Family Basic Package
                  </h3>
                  <button class="mt-[120px] bg-gray-500 py-[10px] rounded-md text-white">
                    View Details
                  </button>
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img
                    src={familyPremium}
                    className="h-[170px] w-full"
                    alt=""
                  />
                  <h3 className="font-bold mt-[5px] text-center text-violet-700">
                    Family Premium Package
                  </h3>

                  <button class="mt-[120px] bg-gray-500 py-[10px] rounded-md text-white">
                    View Details
                  </button>
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img
                    src={familyPlatinum}
                    className="h-[170px] w-full"
                    alt=""
                  />
                  <h3 className="font-bold mt-[5px] text-center text-violet-700">
                    Family Platinum Package
                  </h3>
                  <button class="mt-[120px] bg-gray-500 py-[10px] rounded-md text-white">
                    View Details
                  </button>
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>

                <div className="package px-[8px] py-[5px] flex flex-col rounded-md border-black border-solid border-[1.5px] w-[300px] h-[400px]">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
