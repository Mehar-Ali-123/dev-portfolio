import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Worked as a freelancer during my journey.",
      keywords: ["journey"],
    },
    {
      text: "Understanding concepts of CMS and worked on Wordpress, build different wordpress websites for ecommerce, support, news ",
      keywords: ["CMS"],
    },
    {
      text: "Showed my creativity in creating HTML templates with user-friendly and responsive design.",
      keywords: ["HTML"],
    },
    {
      text: "Practiced as a backend developer and developed backend web applications in php (core) and mysql",
      keywords: ["php"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer <span className="text-AAsecondary">@ Fiver</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2019 - June 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
