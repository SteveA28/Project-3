import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import bahamas from "../assets/img/bahamas.webp";
import familyBasic from "../assets/img/family-basic.png";
import familyPremium from "../assets/img/family-premium.png";
import familyPlatinum from "../assets/img/family-platinum.png";
import groupBasic from "../assets/img/group-basic.png";
import groupPremium from "../assets/img/group-premium.png";
import groupPlatinum from "../assets/img/group-platinum.png";
import individualBasic from "../assets/img/individual-basic.png";
import individualPremium from "../assets/img/individual-premium.png";
import individualPlatinum from "../assets/img/individual-platinum.png";
import Package from "./Package";

function getImage(imgSrc) {
  switch (imgSrc) {
    case "family-basic.png":
      return familyBasic;
    case "family-premium.png":
      return familyPremium;
    case "family-platinum.png":
      return familyPlatinum;
    case "group-basic.png":
      return groupBasic;
    case "group-premium.png":
      return groupPremium;
    case "group-platinum.png":
      return groupPlatinum;
    case "individual-basic.png":
      return individualBasic;
    case "individual-premium.png":
      return individualPremium;
    case "individual-platinum.png":
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

  const filteredPackages = data?.packages.filter(
    (pkg) =>
      selectedCategory === "" ||
      pkg.name.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <section className="pb-[40px">
      {/* Image and intro sections */}
      <div className="relative">
        <img src={bahamas} className="h-[450px] w-full shadow-md" alt="" />
        {/* Other introductory content */}
      </div>
      <main className="px-[90px]">
        <div className="package-details flex flex-col ">
          <h2 className="font-bold text-left text-[1.2rem] mt-[40px]">
            Our Packages:
          </h2>
          <div className="packages mt-[20px] flex gap-4 gap-y-[40px] justify-center flex-wrap">
            {filteredPackages.map((pkg) => (
              <Package
                key={pkg.id}
                img={getImage(pkg.image)}
                packageType={pkg.name}
                packagePrice={`$${pkg.price}`}
                packageId={pkg.id}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
