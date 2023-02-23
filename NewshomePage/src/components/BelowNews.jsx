import React from "react";
import belowNewsData from "../data/belowNewsData";

function BelowNews() {
  return (
    <section className="flex desktop:flex-row flex-col   gap-10">
      {belowNewsData.map((item, i) => (
          <div className="flex gap-4  h-40 ">
            <img className="w-36 h-40" src={item.img} alt="image of the news" />
            <div className="flex flex-col gap-2 ">
              <h1 className="text-4xl font-bold text-grayishBlue">
                {item.number}
              </h1>
              <a className="text-xl font-extrabold text-veryDarkBlue hover:cursor-pointer active:text-softOrange">
                {item.title}
              </a>
              <p>{item.text}</p>
            </div>
          </div>
      ))}
    </section>
  );
}

export default BelowNews;
