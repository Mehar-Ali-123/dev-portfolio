import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Leading the role of Graphic Designer in the company and design",
      keywords: ["NFT Marketplace v2"],
    },
    {
      text: "Worked with a team of six developers to design android thumbnails and infographics, Greeting Cards, ",
      keywords: [" infographics", "thumbnails"],
    },
    {
      text: "Also got a chance to give them my services as a UI designer. Design android App interfaces and became a part of the development team.",
      keywords: ["interfaces"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-500 sm:text-lg text-sm font-Arimo tracking-wide">
            Graphic Designer <span className="text-AAsecondary">@ Venturetech Computer Education</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2018 - Sep 2019</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.8rem" }}
            onClick={() => window.open("https:///www.venturetech.com.pk", "_blank")}
          >
            www.venturetech.com.pk
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
