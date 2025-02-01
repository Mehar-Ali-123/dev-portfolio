import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Play a role as a frontend developer at micrologicx software house and desing user-friendly websites for their company",
      keywords: ["user-friendly","frontend"],
    },
    {
      text: "Worked with a variety of different languages, platforms, frameworks, and content management systems such as wordpress, Javascript, Next.js/React,  Vercel.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Introduced with sass and learnt advanced css",
      keywords: ['css'],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer <span className="text-AAsecondary">@ Micrologicx</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mars 2022 - Sep 2022</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.8rem" }}
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
