import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function RemoteJob() {
  const tasks = [
    {
      text: "Completed different types of projects at  OQVEST ",
      keywords: ["OQVEST", "native"],
    },
    {
      text: "Understanding the structure of multiple languages React Js , Next Js , Node Js , build user-friendly user interface",
      keywords: ["XML"],
    },
    {
      text: "Working with node js and mongo DB  for backend services and create REST APIs also integerate APis in Frontend & Manage Functionalities ",
      keywords: ["node js", "REST"],
    },
    {
        text: "Worked on multiple projects related to different categories e.g calculator , mortgage , ecommerece , rental , advertising , CRM etc ",
        keywords: ["node js", "REST"],
      },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
           Web Developer  
            <span className="text-AAsecondary">
                @ OQTEQ USA
            </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500"> August 2023 - May 2024</span>
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
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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
