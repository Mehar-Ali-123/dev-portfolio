import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "Next.js",
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Html",
      "CSS",
      "MongoDb",
      "Node Js",
    ],
    [
      "TypeScript",
      "Git & GitHub",
      "Figma",
      "Photoshop",
      "Illustrator",
      "Adobe XD",
    ],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-0 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center justify-start px-0 mx-0">
          <div className="flex flex-row  items-center  mr-4   px-0 mx-0">
            <span className="flex-none text-AAsecondary opacity-85 font-bold tracking-wider text-lg sm:text-3xl">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-500 ">
                Hey there, I am Ali Hussnain, and I am all about making things
                look great and work smoothly on the internet. I learned the ins
                and outs of{" "}
                <span className="text-AAsecondary"> software engineering </span>
                .
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-500 ">
                You know, I really love creating the front parts of websites and
                making them super user-friendly. It is like making a cool
                <span className="text-AAsecondary"> painting </span>
                that you can click and use! I am really good at using
                <span className="text-AAsecondary">
                  {" "}
                  Html, Css & Javascript{" "}
                </span>{" "}
                – these are like my magic tools for creating awesome online
                stuff that you can see and touch.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-500 ">
                I am all about paying close attention to even the tiniest
                details, so that when people visit a website or an app I have
                worked on, they find it easy to use and totally cool. I am
                always learning new things to stay ahead in this ever-changing
                tech world. Lets come together and turn ideas into amazing stuff
                on the <span className="text-AAsecondary"> web! </span>
              </span>
             
            </div>
            <a
                href={"/resume.pdf"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <button className="bg-AAsecondary text-AAprimary border rounded-xl px-4 sm:px-8 py-[12px] sm:py-[8px] border-AAsecondary text-sm mt-5">
                 Resume
                </button>
              </a>
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-500  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-500  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-500 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-500 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-4/6 h-4/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-4/6 h-4/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/portfolio1.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/portfolio1.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
