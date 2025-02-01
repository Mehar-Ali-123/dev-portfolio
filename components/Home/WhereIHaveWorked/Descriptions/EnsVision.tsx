import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development in the web3 domain using Next.js, Tailwind CSS, REST APIs, React Hooks ",
      keywords: ["Next.js", "Tailwind", "Apis", "sass","React Hooks"],
    },
    {
      text: "Create Ecommerce App in Next Js using REST APIs and react hooks, Ensure the design quality and responsiveness",
      keywords: ["quality", "design", "hooks"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in Api",
      keywords: ["smart contracts", "api"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Next Js Developer <span className="text-AAsecondary">@ Micrologicx</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2022</span>
          <span
            className="font-mono text-sm text-AAsecondary hover:cursor-pointer"
            
            // set on click to open the website
            onClick={() => window.open("https://www.micrologicx.net", "_blank")}
          >
            www.micrologicx.net
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
