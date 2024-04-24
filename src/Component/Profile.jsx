import React from 'react'
import Contact from './Contact';
import Address from './Address';
import Resume from './../assets/Resume111.pdf';
import { BiDownload, BiSolidDownload } from "react-icons/bi";

const Profile=()=>{
 return (
   <>
     <section className="w-[20vw] h-[600px] bg-white rounded-[5px] relative sm:flex-col max-md:w-[100vw] flex-grow  ">
       <div className="image w-[200px] h-[200px] absolute left-[55px] top-[-90px] max-md:w-[150px] max-md:h-[130px] max-md:top-[-10px] max-md:left-[70px]"></div>
       <main className="mt-[110px] flex flex-col justify-evenly   gap-5 px-3 py-2">
         <div>
           <h1 className="text-2xl font-sans font-bold tracking-[1px] text-center">
             Rahul Kumar
           </h1>
           <p className="font-thin text-center">Frontend/Web Developer</p>
           <p className='text-center'>I am  Fresher</p>
         </div>
         <Address />
         <Contact />
         <div className='w-[100%] flex items-center justify-center'>
           <a href={Resume} download="Resume" className="no-underline bg-blue-600 px-5 py-2 rounded-md text-xl font-semibold  whitespace-nowrap flex justify-center items-center gap-3">
             <BiDownload/> Download CV
           </a>
         </div>
       </main>
     </section>
   </>
 );
}
export default Profile;