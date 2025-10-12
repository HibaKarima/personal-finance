import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage Your Money With Our App <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Personal Finance
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/dashbordImg.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;
