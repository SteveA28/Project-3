import React, { useEffect, useState } from "react";
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
import { gql, useQuery } from "@apollo/client";

function getImage(imgSrc) {
  switch (imgSrc) {
    case "family-basic.jpg":
      return (imgSrc = familyBasic);
      break;
    case "family-premium.jpeg":
      return (imgSrc = familyPremium);
      break;
    case "family-platinum.jpeg":
      return (imgSrc = familyPlatinum);
      break;
    case "group-basic.jpeg":
      return (imgSrc = groupBasic);
      break;
    case "group-premium.jpeg":
      return (imgSrc = groupPremium);
      break;
    case "group-platinum.jpeg":
      return (imgSrc = groupPlatinum);
      break;
    case "individual-basic.jpeg":
      return (imgSrc = individualBasic);
      break;
    case "individual-premium.jpeg":
      return (imgSrc = individualPremium);
      break;
    case "individual-platinum.jpeg":
      return (imgSrc = individualPlatinum);
      break;
    default:
      return "fuck off";
  }
  return imgSrc;
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(loading, error, data);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  if (data)
    // console.log(data.packages.forEach((pack) => console.log(pack.name)));
    return (
      !loading &&
      data && (
        <>
          <section className="pb-[40px]">
            <div className="relative">
              <img
                src={bahamas}
                className="h-[450px] w-full shadow-md"
                alt=""
              />
              <div className="intro absolute bottom-10 pl-[10px]">
                <h1 className="text-blue-100 text-[4.5rem] font-bold  font-montserrat">
                  It's Time For A Get Away With TripSet!
                </h1>
              </div>
            </div>
            <main className="px-[90px]">
              <div className="px-[20px]">
                <p className="font-montserrat text-[1.2rem] mt-[20px] font-[500]">
                  Discover the world with TripSet, your portal to four
                  breathtaking destinations. Our expertly curated vacation
                  packages promise unforgettable adventures, relaxation, and
                  cultural immersion.
                </p>
              </div>
              <div>
                <div style={{ textAlign: "center" }}>
                  <h2>Bahamas</h2>
                  <p>
                    Experience paradise with crystal-clear waters, vibrant coral
                    reefs, and sun-soaked beaches in the Bahamas. A tropical
                    escape awaits.
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <h2>Caribbean</h2>
                  <p>
                    Dive into the vibrant life of the Caribbean. Rich cultures,
                    lively music, and stunning landscapes make for the ultimate
                    island-hopping journey.
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <h2>Hawaii</h2>
                  <p>
                    Embrace the spirit of Aloha. Hawaii's volcanoes, waterfalls,
                    and cultural sites invite you on an enchanting journey
                    through paradise.
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <h2>Alaska</h2>
                  <p>
                    Venture into the wilds of Alaska. Majestic glaciers, rugged
                    landscapes, and abundant wildlife offer an adventure like no
                    other.
                  </p>
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <p>
                    With TripSet, unforgettable memories are just a click away.
                    Embark on your journey with us today!
                  </p>
                </div>
              </div>

              <div className="category-details">
                <h2 className="font-bold  text-left text-[1.2rem] mt-[40px]">
                  Choose A Category:
                </h2>

                <div className="categories mt-[20px] flex gap-4">
                  <div
                    className="category bg-blue-400 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md"
                    onClick={() => handleCategorySelect("Individual")}
                  >
                    Individual
                  </div>
                  <div
                    className="category bg-blue-400 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md"
                    onClick={() => handleCategorySelect("Family")}
                  >
                    Family
                  </div>
                  <div
                    className="category bg-blue-400 cursor-pointer font-[500] text-[1.2rem] font-montserrat p-3 min-w-[140px] text-center rounded-md"
                    onClick={() => handleCategorySelect("Group")}
                  >
                    Group
                  </div>
                </div>
              </div>

              <div className="package-details flex flex-col ">
                <h2 className="font-bold  text-left text-[1.2rem] mt-[40px]">
                  Our Packages:
                </h2>

                <div className="packages mt-[20px] flex gap-4 gap-y-[40px] justify-center flex-wrap">
                  {data.packages.map((data) => {
                    return (
                      <Package
                        img={getImage(data.image)}
                        packageType={data.name}
                        packagePrice={`$${data.price}`}
                        packageId={data.id}
                      />
                    );
                  })}
                  {/* {data.package.map((data) => {
                <Package
                  img={individualBasic}
                  packageType={"Individual Basic Package"}
                  packagePrice={"$500"}
                />;
              })} */}

                  {/* {(selectedCategory === null ||
                selectedCategory === "Individual") && (
                <>
                  <Package
                    img={individualBasic}
                    packageType={"Individual Basic Package"}
                    packagePrice={"$500"}
                  />
                  <Package
                    img={individualPremium}
                    packageType={"Individual Premium Package"}
                    packagePrice={"$750"}
                  />
                  <Package
                    img={individualPlatinum}
                    packageType={"Individual Platinum Package"}
                    packagePrice={"$950"}
                  />
                </>
              )}
              {(selectedCategory === null || selectedCategory === "Family") && (
                <>
                  <Package
                    img={familyBasic}
                    packageType={"Family Basic Package"}
                    packagePrice={"$650"}
                  />
                  <Package
                    img={familyPremium}
                    packageType={"Family Premium Package"}
                    packagePrice={"$850"}
                  />
                  <Package
                    img={familyPlatinum}
                    packageType={"Family Platinum Package"}
                    packagePrice={"$1100"}
                  />
                </>
              )}
              {(selectedCategory === null || selectedCategory === "Group") && (
                <>
                  <Package
                    img={groupBasic}
                    packageType={"Group Basic Package"}
                    packagePrice={"$750"}
                  />
                  <Package
                    img={groupPremium}
                    packageType={"Group Premium Package"}
                    packagePrice={"$900"}
                  />
                  <Package
                    img={groupPlatinum}
                    packageType={"Group Platinum Package"}
                    packagePrice={"$1200"}
                  />
                </>
              )} */}
                </div>
              </div>
            </main>
          </section>
        </>
      )
    );
}
