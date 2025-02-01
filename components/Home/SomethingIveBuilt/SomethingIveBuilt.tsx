import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const projects = [
    {
      title: "Web Journal",
      company: "Micrologicx",
      img: "vsohj.jpg",
      url: "https://vsohj.com",
      detail:
        "At Micrologicx, I had the oppurtunity to design the web application for the University of Vetenary and Animal Sciences. Understanding the working of styled components and Next UI liberary. Also worked with REST APIs and manage API integration. Learnt Next Js CSR ( client side rendering ). Developed multi thened web application.",
      tools: ["Next Js", "Sass", "Styled Components", "Next UI"],
    },
    {
      title: "Doc2Any",
      company: "Recent Project",
      img: "doc2any.jpg",
      url: "https://doc2any.vercel.app/",
      detail:
        "Doc2Any is a document converter website designed to convert any type of document into different formats, I used Bootstrap to design this website and jQuery to create awesom interactions.",
      tools: ["Bootstrap", "css3", "jQuery"],
    },
    {
      title: "Oqvic in React",
      company: "OQVIC",
      img: "oqvic-oqvest.png",
      url: "https://oqvic.com/",
      detail:
        "Oqvest gave me oppurtunity to polish my skills in backend development. I developed fully functional  web application for one of our client during my remote job of USA. I used React & Bootsrap  for designing and make functionalities of different pages in one go",
      tools: ["React", "Bootstrap", "Redux"],
      github: true,
    },
    {
      title: "Ecommerce Website",
      company: "IndyMandi",
      img: "indymandi.png",
      url: "https://www.indymandi.com/",
      detail:
        "Developed an e-commerce website for the Indian market using HTML, CSS, and JavaScript. The platform offers a smooth user experience, allowing customers to browse and order various products, including groceries, clothing, and more.",
      tools: ["Html", "CSS", "JavaScript"],
    },
    {
      title: "Oqvest Homesloans in React , Tailwind CSS",
      company: "OQVEST Homeloans",
      img: "oqvesthomelaons.png",
      url: "https://www.oqvest.com/",
      detail:
        "During my job in the USA, I had the opportunity to develop and maintain a mortgage booking platform for MicroLogicx. As a Frontend Engineer, I built an intuitive user interface for booking mortgage houses, book appointments, and managing loan data & calculations. The project aimed to enhance user experience & make smooth mortgage process.",
      tools: ["React", "Tailwind CSS"],
    },
    {
      title: "Wordpress Woocommerce",
      company: "Makecheesepk",
      img: "makecheesepk.jpg",
      url: "https://micrologicx.net",
      detail:
        'During my bechelors degree I created a wordpress website for my local client who is affiliated with university of agriculture faisalabad. I used theme "catch food mania", and plugins like woo-commerce, elementor, contact form 7, whatsapp share, for it',
      tools: ["wordpress", "elementor", "woo-commerce"],
    },
    {
      title: "Onio Lead the World",
      company: "Onio Ai",
      img: "onioai.png",
      url: "https://onio.ai/",
      detail:
        "After completing my Bachelor degree, I developed a React-based website for a US-based client. The project focused on CRM, SEO, and advertising support, providing a comprehensive digital solution to enhance business operations and marketing strategies.",
      tools: ["React", "Tailwind CSS", "Redux"],
    },
  ];
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-AAsecondary text-lg md:text-3xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((e, index) => {
          if (index % 2 == 0) {
            return (
              <div
                data-aos="fade-up"
                className="relative md:grid md:grid-cols-12 w-full md:h-96 "
                key={index}
              >
                {/* Left image */}
                <div
                  className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                >
                  <div className="relative rounded-xl overflow-hidden w-full h-full col-span-7  border-[3px]  border-AAtertiary">
                    {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

                    <a href={e.url} target={"_blank"} rel="noopener noreferrer">
                      <div
                        // onClick={}
                        className="absolute w-full h-full rounded-xl   overflow-hidden 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                      ></div>
                    </a>

                    <Img
                      src={`/projects/${e.img}`}
                      alt={"Project Screen shot"}
                      className={`w-full rounded h-full `}
                    />
                  </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                  {/* background for text in mobile responsive */}
                  <div className="absolute w-full h-full bg-opacity-70 z-0">
                    <div className="relative w-full h-full">
                      <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                      <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                      <Img
                        src={`/projects/${e.img}`}
                        alt={"Project Screen shot"}
                        className={`w-full h-full `}
                      />
                    </div>
                  </div>

                  <div
                    className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
                  >
                    <div className="flex flex-col space-y-1 md:items-end z-10">
                      <span className="text-AAsecondary text-base">
                        {e.company}{" "}
                      </span>
                      <a href={e.url} target="_blank" rel="noopener noreferrer">
                        <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                          {e.title}
                        </span>
                      </a>
                    </div>
                    <div className="w-full md:bg-AAtertiary rounded-xl overflow-hidden py-6 md:p-6  z-10   border-[3px] border-AAsecondary ">
                      <p className="text-gray-800 md:text-gray-500 text-left md:text-right ">
                        {e.detail}
                      </p>
                    </div>
                    <ul
                      className="flex flex-wrap w-full text-gray-800 md:text-gray-500
               text-sm font-Text2 md:justify-end"
                    >
                      {e.tools.map((t, index) => {
                        return (
                          <span className="pr-4 z-10" key={index}>
                            {t}
                          </span>
                        );
                      })}
                    </ul>
                    <div className="z-10 flex fle-row space-x-5 ">
                      {e.github && <GithubIcon link={e.url} />}
                      <a href={e.url} target={"_blank"} rel="noopener noreferrer">
                        <ExternalLink url={"url"} router={router} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                data-aos="fade-up"
                className="relative md:grid md:grid-cols-12 w-full md:h-96  "
                key={index}
              >
                {/* Left image */}
                <div
                  className="hidden bg-AAprimary z-10  py-4 
            absolute md:grid grid-cols-12 w-full h-full  content-center "
                >
                  <div className="relative rounded-xl overflow-hidden w-full h-full col-start-6 col-span-7 border-[3px] border-AAtertiary">
                    <a href={e.url} target="_blank" rel="noopener noreferrer">
                      <div
                        className="absolute w-full h-full 
             transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300  "
                      ></div>
                    </a>
                    <Img
                      src={`/projects/${e.img}`}
                      alt={"Project Screen shot"}
                      className={`w-full rounded h-full `}
                    />
                  </div>
                </div>

                {/* right Content */}
                <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                  {/* background for text in mobile responsive */}
                  <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                    <div className="relative w-full h-full">
                      <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                      <div className="absolute w-full h-full  opacity-80 z-10 "></div>
                      <Img
                        src={`/projects/${e.img}`}
                        alt={"Project Screen shot"}
                        className={`w-full h-full`}
                      />
                    </div>
                  </div>

                  <div
                    className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
              col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                  >
                    <div className="flex flex-col space-y-1  z-10">
                      <span className="text-AAsecondary text-base">
                        {e.company}
                      </span>
                      <a href={e.url} target="_blank" rel="noopener noreferrer">
                        <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                          {e.title}
                        </span>
                      </a>
                    </div>
                    <div className="w-full md:bg-AAtertiary rounded-xl py-6 md:p-6  z-10  border-[3px] border-AAsecondary">
                      <p className="text-gray-800 md:text-gray-500 text-left ">
                        {e.detail}
                      </p>
                    </div>
                    <ul
                      className="flex flex-wrap w-full text-gray-800 md:text-gray-500
                 text-sm font-Text2 md:justify-start"
                    >
                      {e.tools.map((t, index) => {
                        return (
                          <span className="pr-4 z-10" key={index}>
                            {t}
                          </span>
                        );
                      })}
                    </ul>
                    <div className="z-10 flex fle-row space-x-5 ">
                      {e.github && <GithubIcon link={e.url} />}

                      <a href={e.url} target={"_blank"} rel="noopener noreferrer">
                        <ExternalLink url={""} router={router} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
