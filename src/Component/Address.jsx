import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {  BiCurrentLocation, BiLocationPlus, BiPhoneCall, BiSolidEditLocation } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const Address = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-start justify-start px-3 py-2 rounded-[4px] shadow-[0px_0px_10px_white]">
        <article className="bg-gray-200  px-3 py-1 rounded flex items-center gap-4 w-[100%] leading-5">
          <p className="bg-white py-2 px-2 rounded text-green-500 shadow-[0px_0px_2px] flex justify-center items-center">
            <BiPhoneCall />
          </p>
          <main className="flex flex-col ">
            <span className="font-semibold text-gray-400">Phone number</span>
            <h3 className="text-[12px] ">8102150657</h3>
          </main>
        </article>
        <article className="bg-gray-200  px-3 py-1 rounded flex items-center gap-4 w-[100%] leading-5">
          <p className="bg-white py-2 px-2 rounded text-green-500 shadow-[0px_0px_2px] flex justify-center items-center">
            <MdOutlineEmail />
          </p>
          <main className="flex flex-col ">
            <span className="font-semibold text-gray-400">Email Id</span>
            <h3 className="text-[12px] ">rahul933579@gmail.com</h3>
          </main>
        </article>
        <article className="bg-gray-200  px-3 py-1 rounded flex items-center gap-4 w-[100%] leading-5">
          <p className="bg-white py-2 px-2 rounded text-green-500 shadow-[0px_0px_2px] flex justify-center items-center">
            <FaRegAddressCard />
          </p>
          <main className="flex flex-col ">
            <span className="font-semibold text-gray-400">Address</span>
            <h3 className="text-[12px] ">Samastipur , Bihar</h3>
          </main>
        </article>
        <article className="bg-gray-200  px-3 py-1 rounded flex items-center gap-4 w-[100%] leading-5">
          <p className="bg-white py-2 px-2 rounded text-red-700 shadow-[0px_0px_2px] flex justify-center items-center">
            <IoLocationSharp />
          </p>
          <main className="flex flex-col ">
            <span className="font-semibold text-gray-400">Location</span>
            <h3 className="text-[12px] ">Samastipur , Bihar</h3>
          </main>
        </article>
      </div>
    </>
  );
};
export default Address;
