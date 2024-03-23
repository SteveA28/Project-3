import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
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
import Package from "./Package";

function getImage(imgSrc) {
  switch (imgSrc) {
    case "family-basic.jpg":
      return familyBasic;
    case "family-premium.jpeg":
      return familyPremium;
    case "family-platinum.jpeg":
      return familyPlatinum;
    case "group-basic.jpeg":
      return groupBasic;
    case "group-premium.jpeg":
      return groupPremium;
    case "group-platinum.jpeg":
      return groupPlatinum;
    case "individual-basic.jpeg":
      return individualBasic;
    case "individual-premium.jpeg":
      return individualPremium;
    case "individual-platinum.jpeg":
      return individualPlatinum;
    default:
      return imgSrc;
  }
}

const GETPACKAGES = gql`
  query {
    packages {
      id
      name
      price
      image
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GETPACKAGES);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredPackages = data?.packages.filter((pkg) => 
    selectedCategory === "" || pkg.name.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <section className="pb-[40px]">
      {/* Image and intro sections */}
      <div className="relative">
        <img src={bahamas} className="h-[450px] w-full shadow-md" alt="" />
        {/* Other introductory content */}
      </div>
      <main className="px-[90px]">
        {/* Descriptions and category selection */}
        <div className="category-details">
          <h2 className="font-bold text-left text-[1.2rem] mt-[40px]">Choose A Category:</h2>
          <div className="categories mt-[20px] flex gap-4">
            {["Individual", "Family", "Group"].map((category) => (
              <div 
                key={category} 
                className={`category bg-blue-400 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md ${selectedCategory === category ? "bg-blue-600" : ""}`} 
                onClick={() => handleCategorySelect(category)}>
                {category}
              </div>
            ))}
            <div 
                className="category bg-gray-400 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md" 
                onClick={() => setSelectedCategory("")}>
                Show All
              </div>
          </div>
        </div>
        <div className="package-details flex flex-col ">
          <h2 className="font-bold text-left text-[1.2rem] mt-[40px]">Our Packages:</h2>
          <div className="packages mt-[20px] flex gap-4 gap-y-[40px] justify-center flex-wrap">
            {filteredPackages.map((pkg) => (
              <Package key={pkg.id} img={getImage(pkg.image)} packageType={pkg.name} packagePrice={`$${pkg.price}`} packageId={pkg.id} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
