import React from "react";
import { FaUser } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { LiaDiscourse } from "react-icons/lia";
import { FaProjectDiagram } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { TiPointOfInterest } from "react-icons/ti";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineQrCodeScanner } from "react-icons/md"
const Menu = () => {
  return (
    <>
      <nav className="flex-grow flex justify-evenly items-center  w-[75vw] flex-wrap bg-white rounded-[5px]  px-4 py-4 max-md:w-[90vw] ">
        <a
          href="#about"
          title="About me"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <FaUser />
        </a>
        <a
          href="#education"
          tiltle="Education"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <MdCastForEducation />
        </a>
        <a
          href="#course"
          title="Course"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <LiaDiscourse />
        </a>
        <a
          href="#project"
          title="Projects"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <FaProjectDiagram />
        </a>
        <a
          href="#skill"
          title="Skills"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <SiSkillshare />
        </a>
        <a
          href="#interest"
          title="Hobbies"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <TiPointOfInterest />
        </a>
        <a
          href="https://wa.me/8102150657"
          title="Whatsapp"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-green-600 text-xl"
        >
          <SiWhatsapp />
        </a>
        <a
          href="https://qrcodegenerate812.netlify.app"
          title="QR-Code"
          className="bg-white px-2 py-2 rounded shadow-[0px_0px_5px] text-emerald-700 text-xl"
        >
          <MdOutlineQrCodeScanner />
        </a>
      </nav>
    </>
  );
};
export default Menu;
