import React, { useEffect, useState } from "react";
import familyBasic from "../assets/img/family-basic.jpg";
import familyPremium from "../assets/img/family-premium.jpeg";
import familyPlatinum from "../assets/img/family-platinum.jpeg";
import groupBasic from "../assets/img/group-basic.jpeg";
import groupPremium from "../assets/img/group-premium.jpeg";
import groupPlatinum from "../assets/img/group-platinum.jpeg";
import individualBasic from "../assets/img/individual-basic.jpeg";
import individualPremium from "../assets/img/individual-premium.jpeg";
import individualPlatinum from "../assets/img/individual-platinum.jpeg";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const GET_SINGLE_PACKAGE = gql`
  mutation getPackageMutation($package: ID!) {
    getPackage(id: $package) {
      id
      name
      price
      image
      packageDetails
    }
  }
`;
export default function PackageDetails() {
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

  const [getData, setGetData] = useState({});

  const { id } = useParams();
  const [getPackage, { loading, data, error }] = useMutation(
    GET_SINGLE_PACKAGE,
    {
      variables: { package: id },
      onCompleted: (data) => {
        setGetData(data);
      },
    }
  );

  useEffect(() => {
    getPackage();
  }, []);

  // getPackage();

  // console.log(data);

  return (
    Object.entries(getData).length > 0 && (
      <section className=" bg-blue-200  overflow-hidden py-[40px]">
        <div className=" gap-[180px] flex h-[500px] w-full">
          <div class="flex flex-col justify-center ">
            <h2 className="text-[3.5rem] font-bold whitespace-nowrap">
              {" "}
              {getData.getPackage.name}
            </h2>
            <img
              src={getImage(getData.getPackage.image)}
              className="h-[400px] w-[750px] object-cover ml-[20px]"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[3rem]  mt-[5px] mb-[10px] font-bold">
              Package Details
            </h2>
            <ul className="">
              {getData.getPackage.packageDetails.map((data, index) => {
                return (
                  <li
                    className="text-[1.5rem] mb-[18px] font-[500] ml-[40px]  list-disc"
                    key={index}
                  >
                    {data}
                  </li>
                );
              })}

              <p className="font-bold text-[2rem] mt-[50px] text-blue-600">
                Price : {`$${getData.getPackage.price}`}
              </p>
            </ul>
          </div>
        </div>
        <div className="w-full mt-[40px] flex justify-center gap-[10px]">
          <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem] rounded-[10px] text-gray-200">
            Add To Cart
          </button>
          <button className="bg-blue-600 p-[10px] w-[200px] text-[1.1rem] rounded-[10px] text-gray-200">
            Remove From Cart
          </button>
        </div>
      </section>
    )
  );
}
