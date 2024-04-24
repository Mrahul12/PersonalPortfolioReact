import React from "react";
const Resume = () => {
  return (
    <>
      <article className="flex-grow flex gap-4  w-[75vw] flex-col  h-[520px] bg-white rounded-[5px]  overflow-x-hidden overflow-y-scroll scrollbar  py-2 max-md:w-[90vw] max-md:text-justify ">
        <h2
          id="about"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          ABOUT
        </h2>
        <div className="text-1xl  text-justify px-5">
          A determined and passionate developer, I have completed Bachelor of
          technical degree (Computer Science) from Punjab technical university
          Punjab. Passionate about implementing and launching new projects ,
          accept challenges for rapid growth of the organization.
        </div>
        <h2
          id="education"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          EDUCATION
        </h2>
        <div className="flex flex-col gap-4  px-2">
          <section className="flex flex-col justify-between">
            <h3 className="flex  justify-between w-[100%] items-center text-xl ">
              <span className=" px-4">Degree College</span>
              <span>Punjab,India</span>
            </h3>
            <p className="px-10">
              I have completed Bechelor of technical degree from Anand college
              of engineering and management Kapurthala Punjab in 2023.
            </p>
          </section>
          <section className="flex flex-col justify-between">
            <h3 className="flex  justify-between w-[100%] items-center text-xl ">
              <span className=" px-4">Intermediate School</span>
              <span>Bihar,India</span>
            </h3>
            <p className="px-10">
              I have completed Intermediate School from Sant Kabir College
              samastipur bihar in 2019.
            </p>
          </section>
        </div>

        <h2
          id="course"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          COURSE
        </h2>
        <div className="text-1xl  text-justify px-5">
          I have completed web development course from Qspider noida
          uttar-pradesh in October 2023.
        </div>

        <h2
          id="project"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          PROJECT LINKS
        </h2>
        <div className="flex flex-wrap justify-start gap-5 px-5">
          <a
            href="https://coffee812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Coffee Website
          </a>
          <a
            href="https://todoapp812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Todo-App
          </a>
          <a
            href="https://weatherapp8121.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Weather Api
          </a>
          <a
            href="https://ecommerce812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Mini E-commerce
          </a>
          <a
            href="https://spotifyweb81.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Spotify Music Clone
          </a>
          <a
            href="https://qrcodegenerate812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            QR-Code Generate
          </a>
          <a
            href="https://fetchapi812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Github User Api
          </a>
          <a
            href="https://draganddrop812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            DragDrop Api
          </a>
          <a
            href="https://musicplayer812.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Music Palyer
          </a>
          <a
            href="https://recipefinder81.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Recipe Finder
          </a>
          <a
            href="https://firefoxclone81.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Firefox Clone
          </a>
          <a
            href="https://spotifysignupreact.netlify.app"
            target="_blank"
            className="bg-white py-3 px-2 rounded no-underline text-xl shadow-[0px_0px_3px_grey] max-sm:w-[100%]"
          >
            Spotify SignUp
          </a>
        </div>

        <h2
          id="skill"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          SKILLS
        </h2>
        <div className="px-4">
          <p className="flex gap-5 ">
            <h2 className="font-semibold">Language</h2>:
            <span> Html , Cascading style sheet , Javascript.</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">Framework</h2>:
            <span> ReactJs , TailwindCss , Boostrap , JQuery.</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">Tools</h2>:<span> Git & Github.</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">UI Design</h2>:<span>Figma.</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">Database</h2>:<span>MySql</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">Platform</h2>:
            <span>Firebase , Auth0</span>
          </p>
          <p className="flex gap-5 ">
            <h2 className="font-semibold">SoftSkill</h2>:
            <span>
              Leadership , Problem-Solving , Teching-Skill , Quick Learner.
            </span>
          </p>
        </div>

        <h2
          id="interest"
          className="text-xl font-semibold afterAdd bg-slate-200 px-2 rounded py-2"
        >
          INTERESET
        </h2>
        <div className="flex flex-wrap justify-evenly gap-5 items-center">
          <section>
            <h2 className="text-xl font-semibold">Your Hobbies</h2>
            <ul className="list-none px-3">
              <li>Play Cricket .</li>
              <li>Play Ludo.</li>
              <li>Play Chess.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Your Strength</h2>
            <ul className="list-none px-3">
              <li>Learn new skill quickly.</li>
              <li>Problem-slover.</li>
              <li>Work done in sufficient manner.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Your Hobbies</h2>
            <ul className="list-none px-3">
              <li>I always want to improve myself.</li>
              <li>I am Overthinker.</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};
export default Resume;
