import React, { useEffect, useState } from "react";
import familyBasic from "../assets/img/family-basic.png";
import familyPremium from "../assets/img/family-premium.png";
import familyPlatinum from "../assets/img/family-platinum.png";
import groupBasic from "../assets/img/group-basic.png";
import groupPremium from "../assets/img/group-premium.png";
import groupPlatinum from "../assets/img/group-platinum.png";
import individualBasic from "../assets/img/individual-basic.png";
import individualPremium from "../assets/img/individual-premium.png";
import individualPlatinum from "../assets/img/individual-platinum.png";
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
      case "family-basic.png":
        return (imgSrc = familyBasic);
      case "family-premium.png":
        return (imgSrc = familyPremium);
      case "family-platinum.png":
        return (imgSrc = familyPlatinum);
      case "group-basic.png":
        return (imgSrc = groupBasic);
      case "group-premium.png":
        return (imgSrc = groupPremium);
      case "group-platinum.png":
        return (imgSrc = groupPlatinum);
      case "individual-basic.png":
        return (imgSrc = individualBasic);
      case "individual-premium.png":
        return (imgSrc = individualPremium);
      case "individual-platinum.png":
        return (imgSrc = individualPlatinum);
      default:
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

  return (
    Object.entries(getData).length > 0 && (
      <section className=" min-h-[740px] max-h-screen mt-[70px] py-[40px] bg-gray-100">
        <div className="gap-[50px] flex jusitfy-center h-[500px] w-full">
          <div class="flex flex-col justify-center ">
            <h2 className="text-[3.2rem] ml-[10px] text-center text-[rgba(0,0,0,0.7)] font-bold">
              {getData.getPackage.name}
            </h2>
            <img
              src={getImage(getData.getPackage.image)}
              className="h-[400px] w-[700px] mt-[30px] shadow-md shadow-[rgba(0,0,0,0.4)] object-cover ml-[50px]"
              alt=""
            />
          </div>
          <div className="border-gray-500  relative border-solid border-[1.5px] flex flex-col mr-[20px] justify-between py-[50px] w-[40%] overflow-x-scroll min-h-[600px] px-[30px] rounded-md  shadow-[rgba(0,0,0,0.2)]  shadow-sm">
            <div>
              <h2 className="text-[2.5rem] mb-[20px] font-[500] text-[rgba(0,0,0,0.8)] text-center">
                Package Details
              </h2>
              <ul className="">
                {getData.getPackage.packageDetails.map((data, index) => {
                  return (
                    <li
                      className="text-[1.4rem] mb-[15px] font-[400]  ml-[40px]  list-disc"
                      key={index}
                    >
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-[20px]">
              <p className="font-[500] text-[2.5rem] -[10px] ml-[10px] text-green-600">
                Price : {`$${getData.getPackage.price}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
