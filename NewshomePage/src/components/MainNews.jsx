import React from "react";
import desktopImage from "../assets/images/image-web-3-desktop.jpg";
function MainNews() {
  return (
    <section className="flex flex-col h-full gap-8   ">
      <img src={desktopImage} alt="abstract image for desktop" />
      <div className="grid grid-cols-1 h-full desktop:grid-cols-6 gap-7 items-center ">
        <div className="col-span-3 ">
        <h1 className="desktop:text-7xl text-4xl font-extrabold ">The Brigth Future of Web 3.0?</h1>
        </div>
        <div className=" flex flex-col items-start col-span-3 desktop:justify-between gap-12 ">
          <p className="leading-loose text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="flex  px-10 py-5 bg-softRed text-offWhite active:bg-veryDarkBlue"><span className="text-md font-bold tracking-[0.5rem] ">READ MORE</span></button>
        </div>
      </div>
    </section>
  );
}

export default MainNews;
