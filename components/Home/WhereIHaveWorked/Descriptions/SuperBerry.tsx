import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Completed my FYP names as FitPit (Internet Complaint Management System ) in react native",
      keywords: ["FitPit", "native"],
    },
    {
      text: "Understanding the structure of XML, build user-friendly user interface",
      keywords: ["XML"],
    },
    {
      text: "Working with node js for backend services and create REST APIs",
      keywords: ["node js","REST"],
    }, 
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Final Year Project <span className="text-AAsecondary">@ University of Agriculture Faisalabad</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500"> Jun 2023</span>
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
