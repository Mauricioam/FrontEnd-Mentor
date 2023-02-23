import React from "react";
import sideNews from "../data/sideNewsData";

function SideNews() {
  return (
    <section className="px-5 flex flex-col h-full border border-softRed bg-veryDarkBlue p-8">
      <h1 className="text-6xl font-extrabold text-softOrange ">New</h1>
      <div className="flex flex-col h-[40rem]   justify-around ">
        {sideNews.map((item, i) => (
  
          <div className="flex flex-col gap-4" key={i}>
            <a className="text-2xl font-extrabold  text-offWhite active:text-softOrange hover:cursor-pointer">
              {item.title}
            </a>
            <p className="leading-7 text-grayishBlue text-[15px]">
              {item.text}
            </p>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default SideNews;
