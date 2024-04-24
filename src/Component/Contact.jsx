import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap  gap-2 items-center justify-evenly bg-white border-2 px-3 py-2 rounded-[4px] shadow-[0px_0px_10px_white]">
        <a
          href="tel:+918102150657"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-teal-900 text-xl"
        >
          <BiPhoneCall />
        </a>
        <a
          href="mailto:rahul933579@gmail.com"
          target="_blank"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-teal-900 text-xl"
        >
          <MdOutlineEmail />
        </a>
        <a
          href="https://github.com/Mrahul12"
          target="_blank"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-teal-900 text-xl"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-kumar-754b0b197"
          target="_blank"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-teal-900 text-xl"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/Rahularya4618"
          target="_blank"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-teal-900 text-xl"
        >
          <BsInstagram />
        </a>
      </div>
    </>
  );
};
export default Contact;
