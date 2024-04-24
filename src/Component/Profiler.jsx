import React from "react";
import Menu from "./Menu";
import Resume from "./Resume";

const Profiler = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2  flex-grow ">
       <Menu />
       <Resume/>
      </section>
    </>
  );
};
export default Profiler;
